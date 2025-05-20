import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

export default function LoginComponent() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [generatedResetCode, setGeneratedResetCode] = useState("");
  const [resetStep, setResetStep] = useState(1); // 1: email, 2: code, 3: new password
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 3) {
      newErrors.password = "Password must be at least 3 characters";
    }
    
    if (!isLogin && !formData.name) {
      newErrors.name = "Name is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateResetEmail = () => {
    if (!resetEmail) {
      setErrors({ resetEmail: "Email is required" });
      return false;
    } else if (!/\S+@\S+\.\S+/.test(resetEmail)) {
      setErrors({ resetEmail: "Email is invalid" });
      return false;
    }
    
    // Check if email exists in localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = storedUsers.find(user => user.email === resetEmail);
    
    if (!userExists) {
      setErrors({ resetEmail: "Email not found" });
      return false;
    }
    
    setErrors({});
    return true;
  };

  const validateResetCode = () => {
    if (!resetCode) {
      setErrors({ resetCode: "Reset code is required" });
      return false;
    } else if (resetCode !== generatedResetCode) {
      setErrors({ resetCode: "Invalid reset code" });
      return false;
    }
    
    setErrors({});
    return true;
  };

  const validateNewPassword = () => {
    const newErrors = {};

    if (!newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (newPassword.length < 3) {
      newErrors.newPassword = "Password must be at least 3 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      if (isLogin) {
        // Login logic
        const matchedUser = storedUsers.find(
          user =>
            user.email === formData.email &&
            user.password === formData.password
        );

        if (matchedUser) {
          localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
          window.dispatchEvent(new Event('userLogin')); // This triggers navbar update
          setLoginSuccess(true);
          navigate("/"); // Redirect to homepage after login
        } else {
          setErrors({ password: "Invalid email or password" });
        }

      } else {
        // Signup logic
        const userExists = storedUsers.find(
          user => user.email === formData.email
        );

        if (userExists) {
          setErrors({ email: "Email already exists" });
        } else {
          const newUser = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          };
          localStorage.setItem("users", JSON.stringify([...storedUsers, newUser]));
          setLoginSuccess(true);
          setIsLogin(true); // Redirect to login view after signup
          setFormData({ email: "", password: "", name: "" });
        }
      }

      setIsSubmitting(false);
    }, 1000);
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
    setResetStep(1);
    setResetEmail("");
    setResetCode("");
    setNewPassword("");
    setConfirmPassword("");
    setErrors({});
  };

  const handleSendResetCode = () => {
    if (!validateResetEmail()) return;

    setIsSubmitting(true);

    // Generate a 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedResetCode(code);

    // Simulate sending code (in a real app, this would be sent via email)
    setTimeout(() => {
      setResetStep(2);
      setIsSubmitting(false);
      // In a real application, you would send an email with this code
      console.log(`Reset code for ${resetEmail}: ${code}`);
      alert(`For demo purposes, your reset code is: ${code}`);
    }, 1000);
  };

  const handleVerifyCode = () => {
    if (!validateResetCode()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setResetStep(3);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleResetPassword = () => {
    if (!validateNewPassword()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Update the user's password in localStorage
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = storedUsers.map(user => {
        if (user.email === resetEmail) {
          return { ...user, password: newPassword };
        }
        return user;
      });

      localStorage.setItem("users", JSON.stringify(updatedUsers));

      setResetSuccess(true);
      setIsSubmitting(false);

      // After 2 seconds, return to login form
      setTimeout(() => {
        setShowForgotPassword(false);
        setResetSuccess(false);
      }, 2000);
    }, 1000);
  };

  const toggleView = () => {
    setIsLogin(!isLogin);
    setFormData({ email: "", password: "", name: "" });
    setErrors({});
  };

  // Handler for keyboard events to prevent form submission on Enter key for non-submit buttons
  const handleKeyDown = (e) => {
    // Prevent Enter key from submitting the form when focused on specific elements
    if (e.key === 'Enter' && (e.target.classList.contains('link') || e.target.classList.contains('link-button'))) {
      e.preventDefault(); // Prevent form submission
    }
  };

  const backToLogin = () => {
    setShowForgotPassword(false);
    setErrors({});
  };

  const EmailIcon = () => (
    <div className="icon-wrapper">
      <span className="material-icon">✉️</span>
    </div>
  );

  const LockIcon = () => (
    <div className="icon-wrapper">
      <span className="material-icon">🔒</span>
    </div>
  );

  const EyeIcon = () => (
    <div className="icon-wrapper">
      <span className="material-icon">{showPassword ? "👁️" : "👁️‍🗨️"}</span>
    </div>
  );

  const CheckIcon = () => (
    <div className="icon-wrapper">
      <span className="material-icon">✓</span>
    </div>
  );

  const LoadingSpinner = () => (
    <div className="spinner"></div>
  );

  const KeyIcon = () => (
    <div className="icon-wrapper">
      <span className="material-icon">🔑</span>
    </div>
  );

  // Render forgot password form
  const renderForgotPasswordForm = () => {
    if (resetSuccess) {
      return (
        <div className="success-message">
          <CheckIcon />
          <span>Password reset successfully! You can now log in with your new password.</span>
        </div>
      );
    }

    if (resetStep === 1) {
      return (
        <>
          <h3>Reset Your Password</h3>
          <p className="reset-instructions">Enter your email address and we'll send you a code to reset your password.</p>
          
          <div className="form-group">
            <label htmlFor="resetEmail" className="form-label">Email address</label>
            <div className="input-container">
              <div className="input-icon-left"><EmailIcon /></div>
              <input
                id="resetEmail"
                type="email"
                value={resetEmail}
                onChange={(e) => {
                  setResetEmail(e.target.value);
                  if (errors.resetEmail) setErrors({});
                }}
                className={`form-input icon-input ${errors.resetEmail ? "input-error" : ""}`}
                placeholder="example@gmail.com"
              />
              {errors.resetEmail && <p className="error-text">{errors.resetEmail}</p>}
            </div>
          </div>

          <div className="form-group">
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? (
                <>
                  <LoadingSpinner /> Sending...
                </>
              ) : "Send Reset Code"}
            </button>
          </div>
        </>
      );
    } else if (resetStep === 2) {
      return (
        <>
          <h3>Enter Reset Code</h3>
          <p className="reset-instructions">Enter the 6-digit code we sent to {resetEmail}</p>
          
          <div className="form-group">
            <label htmlFor="resetCode" className="form-label">Reset Code</label>
            <div className="input-container">
              <div className="input-icon-left"><KeyIcon /></div>
              <input
                id="resetCode"
                type="text"
                value={resetCode}
                onChange={(e) => {
                  setResetCode(e.target.value);
                  if (errors.resetCode) setErrors({});
                }}
                className={`form-input icon-input ${errors.resetCode ? "input-error" : ""}`}
                placeholder="123456"
              />
              {errors.resetCode && <p className="error-text">{errors.resetCode}</p>}
            </div>
          </div>

          <div className="form-group">
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? (
                <>
                  <LoadingSpinner /> Verifying...
                </>
              ) : "Verify Code"}
            </button>
          </div>

          <div className="form-group">
            <button
              type="button"
              onClick={() => {
                setResetStep(1);
                setErrors({});
              }}
              className="link-button"
            >
              Back to Email
            </button>
          </div>
        </>
      );
    } else if (resetStep === 3) {
      return (
        <>
          <h3>Set New Password</h3>
          <p className="reset-instructions">Create a new password for your account</p>
          
          <div className="form-group">
            <label htmlFor="newPassword" className="form-label">New Password</label>
            <div className="input-container">
              <div className="input-icon-left"><LockIcon /></div>
              <input
                id="newPassword"
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  if (errors.newPassword) {
                    const { newPassword, ...rest } = errors;
                    setErrors(rest);
                  }
                }}
                className={`form-input icon-input ${errors.newPassword ? "input-error" : ""}`}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="input-icon-right"
                onClick={() => setShowPassword(!showPassword)}
              >
                <EyeIcon />
              </button>
              {errors.newPassword && <p className="error-text">{errors.newPassword}</p>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <div className="input-container">
              <div className="input-icon-left"><LockIcon /></div>
              <input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (errors.confirmPassword) {
                    const { confirmPassword, ...rest } = errors;
                    setErrors(rest);
                  }
                }}
                className={`form-input icon-input ${errors.confirmPassword ? "input-error" : ""}`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
            </div>
          </div>

          <div className="form-group">
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? (
                <>
                  <LoadingSpinner /> Updating...
                </>
              ) : "Reset Password"}
            </button>
          </div>

          <div className="form-group">
            <button
              type="button"
              onClick={() => {
                setResetStep(2);
                setErrors({});
              }}
              className="link-button"
            >
              Back to Code Verification
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-header-content">
            {!showForgotPassword ? (
              <>
                <h2 className="login-title">{isLogin ? "Welcome Back" : "Create Account"}</h2>
                <p className="login-subtitle">{isLogin ? "Sign in to continue" : "Join our community"}</p>
              </>
            ) : (
              <h2 className="login-title">Reset Password</h2>
            )}
          </div>
        </div>

        <div className="login-form-container" onKeyDown={handleKeyDown}>
          {!showForgotPassword ? (
            <>
              {loginSuccess && (
                <div className="success-message">
                  <CheckIcon />
                  <span>
                    {isLogin ? "Login successful!" : "Account created successfully!"}
                  </span>
                </div>
              )}

              <form className="login-form" onSubmit={handleSubmit}>
                {!isLogin && (
                  <div className="form-group">
                    <label htmlFor="name" className="form-label" autoComplete="name">Full Name</label>
                    <div className="input-container">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-input ${errors.name ? "input-error" : ""}`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="error-text">{errors.name}</p>}
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label" autoComplete="email">Email address</label>
                  <div className="input-container">
                    <div className="input-icon-left"><EmailIcon /></div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input icon-input ${errors.email ? "input-error" : ""}`}
                      placeholder="example@gmail.com"
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                  </div>
                </div>

                {/* Password Field */}
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="input-container">
                    <div className="input-icon-left"><LockIcon /></div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      className={`form-input icon-input ${errors.password ? "input-error" : ""}`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="input-icon-right"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <EyeIcon />
                    </button>
                    {errors.password && <p className="error-text">{errors.password}</p>}
                  </div>
                </div>

                {isLogin && (
                  <div className="form-row">
                    <div className="checkbox-container">
                      <input id="remember-me" name="remember-me" type="checkbox" className="checkbox-input" />
                      <label htmlFor="remember-me" className="checkbox-label">Remember me</label>
                    </div>
                    <div className="forgot-password">
                      <button 
                        type="button" 
                        onClick={handleForgotPassword} 
                        className="link"
                        tabIndex="-1" // Prevents tab focus and unintended Enter submission
                      >
                        Forgot password?
                      </button>
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-button"
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner /> Processing...
                      </>
                    ) : isLogin ? "Sign in" : "Create account"}
                  </button>
                </div>
              </form>

             
              <div className="toggle-view">
                <p>
                  {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                  <button type="button" onClick={toggleView} className="link-button">
                    {isLogin ? "Sign up" : "Sign in"}
                  </button>
                </p>
              </div>
            </>
          ) : (
            <>
              <form className="login-form" onSubmit={(e) => {
                e.preventDefault();
                if (resetStep === 1) {
                  handleSendResetCode();
                } else if (resetStep === 2) {
                  handleVerifyCode();
                } else if (resetStep === 3) {
                  handleResetPassword();
                }
              }}>
                {renderForgotPasswordForm()}
              </form>
              
              {!resetSuccess && (
                <div className="toggle-view">
                  <p>
                    <button type="button" onClick={backToLogin} className="link-button">
                      Back to Login
                    </button>
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}