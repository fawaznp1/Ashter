import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X, MessageCircle } from 'lucide-react';
import './ChatAi.css';
import { doctorsData } from './DoctorData'; // Import from your DoctorData.js

const AshterChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Ashter Assistant. I can help you find doctors, check availability, book appointments, and answer questions about our medical services. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      showQuickOptions: true
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickOptions = [
    "🏥 Show all available doctors",
    "❤️ Find cardiologists",
    "👶 Find pediatricians", 
    "🦴 Find orthopedic surgeons",
    "🧠 Find neurologists",
    "🌟 Show highest rated doctors",
    "💰 Show most affordable doctors",
    "🗣️ Find doctors who speak Spanish",
    "👨‍⚕️ Find general physicians"
  ];

  const handleQuickOption = (option) => {
    const queries = {
      "🏥 Show all available doctors": "show me all available doctors",
      "❤️ Find cardiologists": "find cardiologists",
      "👶 Find pediatricians": "find pediatricians",
      "🦴 Find orthopedic surgeons": "find orthopedic surgeons", 
      "🧠 Find neurologists": "find neurologists",
      "🌟 Show highest rated doctors": "show me the highest rated doctors",
      "💰 Show most affordable doctors": "show me affordable doctors",
      "🗣️ Find doctors who speak Spanish": "find doctors who speak Spanish",
      "👨‍⚕️ Find general physicians": "find general physicians"
    };
    
    // Directly process the query without showing it in input
    const userMessage = {
      id: messages.length + 1,
      text: option,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Process the query immediately
    setTimeout(() => {
      const botResponse = processUserQuery(queries[option]);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
        showQuickOptions: false
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const processUserQuery = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    // Booking related - check this FIRST before specialty search
    if (lowercaseQuery.includes('book') || lowercaseQuery.includes('appointment') || lowercaseQuery.includes('schedule')) {
      return `To book an appointment, I can help you find the right doctor first. Here are our available doctors:

${doctorsData.filter(doc => doc.status.toLowerCase() === 'available').slice(0, 5).map(doc => 
  `• ${doc.name} (${doc.specialty}) - ${doc.location} - ${doc.appointmentFee}`
).join('\n')}

Please let me know which doctor you'd like to book with, or tell me what type of specialist you need.`;
    }

    // Specialty search - Fixed logic for better matching
    const specialtyMappings = {
      'cardiology': 'cardiologist',
      'cardiologist': 'cardiologist',
      'cardiologists': 'cardiologist',
      'heart': 'cardiologist',
      'pediatrics': 'pediatrician',
      'pediatrician': 'pediatrician',
      'pediatricians': 'pediatrician',
      'children': 'pediatrician',
      'kids': 'pediatrician',
      'orthopedic': 'orthopedic surgeon',
      'orthopedics': 'orthopedic surgeon',
      'bone': 'orthopedic surgeon',
      'joint': 'orthopedic surgeon',
      'neurology': 'neurologist',
      'neurologist': 'neurologist',
      'neurologists': 'neurologist',
      'brain': 'neurologist',
      'nerve': 'neurologist',
      'dermatology': 'dermatologist',
      'dermatologist': 'dermatologist',
      'skin': 'dermatologist',
      'general physician': 'general physician',
      'general': 'general physician',
      'gp': 'general physician',
      'family': 'general physician',
      'gynecology': 'gynecologist',
      'gynecologist': 'gynecologist',
      'women': 'gynecologist',
      'ear nose throat': 'ent specialist',
      'ent specialist': 'ent specialist',
      'ear': 'ent specialist',
      'nose': 'ent specialist',
      'throat': 'ent specialist',
      'psychiatry': 'psychiatrist',
      'psychiatrist': 'psychiatrist',
      'mental': 'psychiatrist',
      'psychology': 'psychiatrist',
      'urology': 'urologist',
      'urologist': 'urologist',
      'kidney': 'urologist',
      'oncology': 'oncologist',
      'oncologist': 'oncologist',
      'cancer': 'oncologist',
      'pulmonology': 'pulmonologist',
      'pulmonologist': 'pulmonologist',
      'lung': 'pulmonologist',
      'breathing': 'pulmonologist',
      'nephrology': 'nephrologist',
      'nephrologist': 'nephrologist',
      'endocrinology': 'endocrinologist',
      'endocrinologist': 'endocrinologist',
      'diabetes': 'endocrinologist',
      'hormone': 'endocrinologist',
      'ophthalmology': 'ophthalmologist',
      'ophthalmologist': 'ophthalmologist',
      'eye': 'ophthalmologist',
      'vision': 'ophthalmologist',
      'rheumatology': 'rheumatologist',
      'rheumatologist': 'rheumatologist',
      'arthritis': 'rheumatologist',
      'plastic surgeon': 'plastic surgeon',
      'plastic': 'plastic surgeon',
      'cosmetic': 'plastic surgeon',
      'hematology': 'hematologist',
      'hematologist': 'hematologist',
      'blood': 'hematologist',
      'gastroenterology': 'gastroenterologist',
      'gastroenterologist': 'gastroenterologist',
      'stomach': 'gastroenterologist',
      'digestive': 'gastroenterologist'
    };

    // Find matching specialty - simplified and more reliable logic
    const foundSpecialtyKey = Object.keys(specialtyMappings).find(key => {
      // Check if the query contains the specialty keyword
      return lowercaseQuery.includes(key.toLowerCase());
    });
    
    if (foundSpecialtyKey) {
      const targetSpecialty = specialtyMappings[foundSpecialtyKey];
      const doctors = doctorsData.filter(doc => 
        doc.specialty.toLowerCase().includes(targetSpecialty.toLowerCase())
      );
      return formatDoctorResults(doctors, `${targetSpecialty}s`);
    }

    // Doctor name search
    const nameMatch = doctorsData.find(doc => 
      lowercaseQuery.includes(doc.name.toLowerCase()) ||
      lowercaseQuery.includes(doc.name.split(' ')[1].toLowerCase()) // Last name
    );
    
    if (nameMatch) {
      return formatSingleDoctor(nameMatch);
    }

    // Language search
    const languageMap = {
      'spanish': 'spanish',
      'mandarin': 'mandarin',
      'korean': 'korean', 
      'korea': 'korean',
      'portuguese': 'portuguese',
      'english': 'english',
      'hindi': 'hindi',
      'gujarati': 'gujarati',
      'urdu': 'urdu',
      'arabic': 'arabic',
      'french': 'french',
      'russian': 'russian',
      'japanese': 'japanese',
      'german': 'german'
    };
    
    const foundLanguage = Object.keys(languageMap).find(lang => 
      lowercaseQuery.includes(lang)
    );
    
    if (foundLanguage) {
      const targetLanguage = languageMap[foundLanguage];
      const doctors = doctorsData.filter(doc => 
        doc.languages.some(docLang => 
          docLang.toLowerCase().includes(targetLanguage.toLowerCase())
        )
      );
      return formatDoctorResults(doctors, `doctors who speak ${foundLanguage}`);
    }

    // Day availability search
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const foundDay = days.find(day => lowercaseQuery.includes(day));
    
    if (foundDay) {
      const doctors = doctorsData.filter(doc => 
        doc.availability.toLowerCase().includes(foundDay.substring(0, 3).toLowerCase())
      );
      return formatDoctorResults(doctors, `doctors available on ${foundDay}`);
    }

    // Rating search
    if (lowercaseQuery.includes('best') || lowercaseQuery.includes('highest rated') || lowercaseQuery.includes('top rated')) {
      const topDoctors = doctorsData
        .filter(doc => doc.rating >= 4.8)
        .sort((a, b) => b.rating - a.rating);
      return formatDoctorResults(topDoctors, 'highest rated doctors');
    }

    // Fee/cost search - updated to handle string format with $
    if (lowercaseQuery.includes('cheap') || lowercaseQuery.includes('affordable') || lowercaseQuery.includes('low cost')) {
      const affordableDoctors = doctorsData
        .filter(doc => {
          const fee = parseInt(doc.appointmentFee.replace('$', ''));
          return fee <= 150;
        })
        .sort((a, b) => {
          const feeA = parseInt(a.appointmentFee.replace('$', ''));
          const feeB = parseInt(b.appointmentFee.replace('$', ''));
          return feeA - feeB;
        });
      return formatDoctorResults(affordableDoctors, 'most affordable doctors');
    }

    // Available doctors
    if (lowercaseQuery.includes('available') && !foundDay) {
      const availableDoctors = doctorsData.filter(doc => 
        doc.status.toLowerCase() === 'available'
      );
      return formatDoctorResults(availableDoctors, 'currently available doctors');
    }

    // Experience search - updated to handle string format
    if (lowercaseQuery.includes('experienced') || lowercaseQuery.includes('senior')) {
      const experiencedDoctors = doctorsData
        .filter(doc => {
          const years = parseInt(doc.experience.split(' ')[0]);
          return years >= 15;
        })
        .sort((a, b) => {
          const yearsA = parseInt(a.experience.split(' ')[0]);
          const yearsB = parseInt(b.experience.split(' ')[0]);
          return yearsB - yearsA;
        });
      return formatDoctorResults(experiencedDoctors, 'most experienced doctors');
    }

    // General help queries
    if (lowercaseQuery.includes('help') || lowercaseQuery.includes('what can you do')) {
      return `I can help you with:
      
• Find doctors by specialty (cardiology, dermatology, pediatrics, etc.)
• Search doctors by name
• Check doctor availability by day
• Find doctors who speak specific languages
• Compare appointment fees
• Show highest rated doctors
• Book appointments
• Get doctor details and contact information

Try asking me something like:
- "Show me cardiologists"
- "Find doctors available on Monday"
- "Who speaks Spanish?"
- "What's the fee for Dr. Patel?"`;
    }

    // Default response
    return `I'm not sure about that specific query, but I can help you find doctors and book appointments. Here are some things you can ask me:

• "Show me all cardiologists"
• "Find doctors available on Tuesday"
• "Who are the highest rated doctors?"
• "Find doctors who speak Spanish"
• "What's Dr. Patel's appointment fee?"

What would you like to know about our doctors?`;
  };

  const formatDoctorResults = (doctors, title) => {
    if (doctors.length === 0) {
      return `Sorry, I couldn't find any ${title} at the moment. Would you like me to show you all available doctors instead?`;
    }

    return `Here are the ${title} I found:

${doctors.map(doc => 
  `👨‍⚕️ **${doc.name}**
   Specialty: ${doc.specialty}
   Rating: ${doc.rating}⭐ (${doc.reviews} reviews) 
   Experience: ${doc.experience}
   Fee: ${doc.appointmentFee} | Status: ${doc.status}
   Languages: ${doc.languages.join(', ')}
   Location: ${doc.location}
   ${doc.status.toLowerCase() === 'available' ? '✅ Available for booking' : '⏳ Currently busy'}
`).join('\n')}

Would you like more details about any of these doctors or help booking an appointment?`;
  };

  const formatSingleDoctor = (doctor) => {
    return `Here's the information for ${doctor.name}:

👨‍⚕️ **${doctor.name}**
🏥 Specialty: ${doctor.specialty}
⭐ Rating: ${doctor.rating}/5.0 (${doctor.reviews} reviews)
📅 Experience: ${doctor.experience}
🎓 Education: ${doctor.education}
💰 Appointment Fee: ${doctor.appointmentFee}
📍 Location: ${doctor.location}
🗣️ Languages: ${doctor.languages.join(', ')}
🚦 Status: ${doctor.status.toLowerCase() === 'available' ? '✅ Available' : '⏳ Busy'}

📋 About: ${doctor.description}

${doctor.status.toLowerCase() === 'available' ? 'Would you like to book an appointment?' : 'This doctor is currently busy. Would you like me to suggest similar specialists?'}`;
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const botResponse = processUserQuery(inputText);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
        showQuickOptions: false
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessageText = (text) => {
    return text.split('\n').map((line, index) => (
      <div key={index}>
        {line.includes('**') ? (
          <div dangerouslySetInnerHTML={{
            __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          }} />
        ) : (
          line
        )}
      </div>
    ));
  };

  return (
    <div className="chatbot-container">
      {/* Chat Toggle Button */}
      <div 
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-content">
              <Bot size={20} />
              <div>
                <h3>Ashter Assistant</h3>
                <span>Medical Appointment Helper</span>
              </div>
            </div>
          </div>

          <div className="messages-container">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-avatar">
                  {message.sender === 'bot' ? <Bot size={16} /> : <User size={16} />}
                </div>
                <div className="message-content">
                  <div className="message-text">
                    {formatMessageText(message.text)}
                  </div>
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  {message.showQuickOptions && (
                    <div className="quick-options">
                      <div className="quick-options-title">Quick options:</div>
                      <div className="quick-options-grid">
                        {quickOptions.map((option, index) => (
                          <button 
                            key={index}
                            className="quick-option-btn"
                            onClick={() => handleQuickOption(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot">
                <div className="message-avatar">
                  <Bot size={16} />
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about appointments..."
              rows="1"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="send-button"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AshterChatbot;