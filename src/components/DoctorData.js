import dr1 from '../images/dr1.webp'
import dr2 from '../images/dr2.webp'
import dr3 from '../images/dr26 (7).webp'
import dr4 from '../images/dr4.webp'
import dr5 from '../images/dr5.webp'
import dr6 from '../images/dr18.jpg'
import dr7 from '../images/dr19.jpg'
import dr8 from '../images/dr20.jpg'
import dr9 from '../images/dr26 (1).webp'
import dr10 from '../images/dr26 (10).webp'
import dr11 from '../images/dr26 (11).webp'
import dr12 from '../images/dr26 (12).webp'
import dr13 from '../images/dr26 (13).webp'
import dr14 from '../images/dr26 (14).webp'
import dr15 from '../images/dr26 (15).webp'
import dr16 from '../images/dr26 (16).webp'
import dr17 from '../images/dr26 (17).webp'
import dr18 from '../images/dr26 (4).webp'
import dr19 from '../images/dr26 (5).webp'
import dr20 from '../images/dr26 (6).webp'







export const doctorsData = [
  {
    id: 1,
    name: 'Dr. Richard James',
    specialty: 'General Physician',
    status: 'Available',
    availability: 'Mon-Fri: 9AM-5PM, Sat: 10AM-2PM',
    appointmentFee: '$150',
    experience: '15 years',
    education: 'MD from Johns Hopkins University',
    description: 'Dr. Richard James is a board-certified general physician with over 15 years of experience. He specializes in preventative care and chronic disease management. Dr. James takes a holistic approach to healthcare, focusing on both physical and mental wellbeing.',
    languages: ['English', 'Spanish'],
    rating: 4.9,
    reviews: 128,
    location: 'Medical Center, Floor 3, Room 302',
    image: dr1
  },
  {
    id: 2,
    name: 'Dr. Emily Larson',
    specialty: 'Gynecologist',
    status: 'Available',
    availability: 'Mon-Thu: 8AM-4PM, Fri: 8AM-12PM',
    appointmentFee: '$200',
    experience: '12 years',
    education: 'MD from Stanford University',
    description: 'Dr. Emily Larson is a compassionate gynecologist dedicated to women\'s health at all life stages. With over 12 years of clinical experience, she specializes in reproductive health, family planning, and minimally invasive surgery.',
    languages: ['English', 'French'],
    rating: 4.8,
    reviews: 93,
    location: 'Women\'s Health Pavilion, Floor 2, Suite 210'
    ,image: dr14
  },
  {
    id: 3,
    name: 'Dr. Sarah Patel',
    specialty: 'Dermatologist',
    status: 'Available',
    availability: 'Tue-Fri: 9AM-6PM',
    appointmentFee: '$175',
    experience: '10 years',
    education: 'MD from Harvard Medical School',
    description: 'Dr. Sarah Patel is a board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology. She has particular expertise in treating acne, eczema, psoriasis, and skin cancer detection. Dr. Patel is known for her personalized approach to skincare.',
    languages: ['English', 'Hindi', 'Gujarati'],
    rating: 4.7,
    reviews: 156,
    location: 'Dermatology Clinic, Floor 1, Room 115',image: dr13
  },
  {
    id: 4,
    name: 'Dr. Christopher Lee',
    specialty: 'Pediatrician',
    status: 'Available',
    availability: 'Mon-Fri: 8AM-5PM',
    appointmentFee: '$125',
    experience: '18 years',
    education: 'MD from University of California, San Francisco',
    description: 'Dr. Christopher Lee is a warm and friendly pediatrician with nearly two decades of experience caring for children from newborns to adolescents. He emphasizes preventative care and developmental milestones while making both children and parents feel comfortable.',
    languages: ['English', 'Mandarin'],
    rating: 4.9,
    reviews: 215,
    location: 'Children\'s Medical Center, Floor 2, Room 220'
    ,image: dr16
  },
  {
    id: 5,
    name: 'Dr. Aisha Khan',
    specialty: 'Cardiologist',
    status: 'Available',
    availability: 'Mon, Wed, Fri: 7AM-3PM',
    appointmentFee: '$250',
    experience: '14 years',
    education: 'MD from Yale University',
    description: 'Dr. Aisha Khan is a highly respected cardiologist specializing in preventative cardiology and heart disease management. She utilizes the latest diagnostic technologies and treatment options to provide comprehensive cardiac care tailored to each patient\'s needs.',
    languages: ['English', 'Urdu', 'Arabic'],
    rating: 4.8,
    reviews: 87,
    location: 'Heart Institute, Floor 4, Suite 405',image: dr5
  },
  {
    id: 6,
    name: 'Dr. Marcus Hill',
    specialty: 'Orthopedic Surgeon',
    status: 'Available',
    availability: 'Mon-Thu: 8AM-4PM',
    appointmentFee: '$300',
    experience: '20 years',
    education: 'MD from Duke University',
    description: 'Dr. Marcus Hill is a skilled orthopedic surgeon specializing in sports medicine, joint replacement, and trauma care. With 20 years of experience, he has helped countless patients recover from injuries and return to active lifestyles through surgical and non-surgical treatments.',
    languages: ['English'],
    rating: 4.9,
    reviews: 176,
    location: 'Orthopedic Center, Floor 3, Suite 320',image: dr6
  },
  {
    id: 7,
    name: 'Dr. Priya Verma',
    specialty: 'ENT Specialist',
    status: 'Available',
    availability: 'Tue, Thu: 9AM-7PM, Wed: 9AM-5PM',
    appointmentFee: '$175',
    experience: '11 years',
    education: 'MD from University of Pennsylvania',
    description: 'Dr. Priya Verma specializes in disorders of the ear, nose, and throat. She is particularly skilled in treating sinus disorders, hearing loss, voice disorders, and pediatric ENT issues. Dr. Verma takes a patient-centered approach to care, ensuring each patient fully understands their condition and treatment options.',
    languages: ['English', 'Hindi'],
    rating: 4.7,
    reviews: 92,
    location: 'ENT Clinic, Floor 2, Room 208',image: dr7
  },
  {
    id: 8,
    name: 'Dr. John Chen',
    specialty: 'Neurologist',
    status: 'Available',
    availability: 'Mon, Wed, Fri: 8AM-6PM',
    appointmentFee: '$225',
    experience: '16 years',
    education: 'MD from Columbia University',
    description: 'Dr. John Chen is a board-certified neurologist who specializes in diagnosing and treating conditions affecting the brain, spinal cord, and nervous system. He has particular expertise in headache disorders, stroke management, and neurodegenerative diseases.',
    languages: ['English', 'Mandarin'],
    rating: 4.8,
    reviews: 105,
    location: 'Neurology Department, Floor 5, Suite 510',image: dr8
  },
  {
    id: 9,
    name: 'Dr. Natalie Brown',
    specialty: 'Psychiatrist',
    status: 'Available',
    availability: 'Tue-Fri: 10AM-6PM',
    appointmentFee: '$200',
    experience: '13 years',
    education: 'MD from Washington University',
    description: 'Dr. Natalie Brown is a compassionate psychiatrist who specializes in mood disorders, anxiety, PTSD, and integrated mental health care. She combines medication management with therapeutic approaches to create comprehensive treatment plans tailored to each patient\'s needs.',
    languages: ['English'],
    rating: 4.9,
    reviews: 78,
    location: 'Behavioral Health Center, Floor 2, Room 215',image: dr9
  },
  {
    id: 10,
    name: 'Dr. Ibrahim Al-Sayed',
    specialty: 'Urologist',
    status: 'Available',
    availability: 'Mon, Tue, Thu: 8AM-5PM',
    appointmentFee: '$225',
    experience: '17 years',
    education: 'MD from Baylor College of Medicine',
    description: 'Dr. Ibrahim Al-Sayed is a highly skilled urologist with expertise in treating conditions of the urinary tract and male reproductive system. He specializes in minimally invasive surgical techniques, kidney stone management, and prostate health.',
    languages: ['English', 'Arabic'],
    rating: 4.7,
    reviews: 112,
    location: 'Urology Clinic, Floor 3, Suite 305',image: dr10
  },
  {
    id: 11,
    name: 'Dr. Elena Petrova',
    specialty: 'Oncologist',
    status: 'Available',
    availability: 'Mon-Fri: 7AM-3PM',
    appointmentFee: '$275',
    experience: '19 years',
    education: 'MD from University of Chicago',
    description: 'Dr. Elena Petrova is a dedicated oncologist who provides compassionate care for patients with cancer. She specializes in creating personalized treatment plans that incorporate the latest advances in cancer therapy while supporting patients through their treatment journey.',
    languages: ['English', 'Russian'],
    rating: 4.9,
    reviews: 143,
    location: 'Cancer Treatment Center, Floor 4, Suite 420',image: dr11
  },
  {
    id: 12,
    name: 'Dr. Daniel Lee',
    specialty: 'Pulmonologist',
    status: 'Available',
    availability: 'Mon, Wed, Fri: 8AM-5PM',
    appointmentFee: '$200',
    experience: '14 years',
    education: 'MD from University of Michigan',
    description: 'Dr. Daniel Lee specializes in diagnosing and treating diseases of the respiratory system. He has particular expertise in asthma, COPD, sleep disorders, and pulmonary fibrosis. Dr. Lee employs a thorough approach to diagnosis and creates comprehensive treatment plans tailored to each patient.',
    languages: ['English', 'Korean'],
    rating: 4.8,
    reviews: 87,
    location: 'Pulmonary Medicine Department, Floor 3, Room 315',image: dr12
  },
  {
    id: 13,
    name: 'Dr. Susan Green',
    specialty: 'Nephrologist',
    status: 'Available',
    availability: 'Tue, Thu: 8AM-6PM, Wed: 8AM-12PM',
    appointmentFee: '$225',
    experience: '15 years',
    education: 'MD from Mayo Medical School',
    description: 'Dr. Susan Green is a board-certified nephrologist specializing in kidney diseases, hypertension, and electrolyte disorders. She provides comprehensive care for patients with acute and chronic kidney conditions, including those requiring dialysis and transplant management.',
    languages: ['English'],
    rating: 4.7,
    reviews: 65,
    location: 'Kidney Center, Floor 2, Suite 225',image: dr13
  },
  {
    id: 14,
    name: 'Dr. Tomoko Yamada',
    specialty: 'Endocrinologist',
    status: 'Available',
    availability: 'Mon-Thu: 9AM-5PM',
    appointmentFee: '$200',
    experience: '12 years',
    education: 'MD from University of California, Los Angeles',
    description: 'Dr. Tomoko Yamada specializes in hormonal disorders affecting growth, metabolism, reproduction, and more. She has particular expertise in diabetes management, thyroid disorders, and adrenal conditions. Dr. Yamada takes a holistic approach to endocrine health.',
    languages: ['English', 'Japanese'],
    rating: 4.8,
    reviews: 91,
    location: 'Endocrinology Clinic, Floor 1, Room 150',image: dr14
  },
  {
    id: 15,
    name: 'Dr. Rafael Silva',
    specialty: 'Ophthalmologist',
    status: 'Available',
    availability: 'Mon, Wed, Fri: 8AM-4PM',
    appointmentFee: '$175',
    experience: '16 years',
    education: 'MD from Vanderbilt University',
    description: 'Dr. Rafael Silva is an experienced ophthalmologist providing comprehensive eye care from routine exams to complex surgical procedures. He specializes in cataract surgery, glaucoma management, and diabetic eye disease. Dr. Silva is committed to preserving and improving patients\' vision and quality of life.',
    languages: ['English', 'Portuguese', 'Spanish'],
    rating: 4.9,
    reviews: 138,
    location: 'Vision Center, Floor 2, Suite 240',image: dr15
  },
  {
    id: 16,
    name: 'Dr. Meera Sinha',
    specialty: 'Rheumatologist',
    status: 'Available',
    availability: 'Tue, Thu: 9AM-5PM, Fri: 9AM-3PM',
    appointmentFee: '$200',
    experience: '13 years',
    education: 'MD from Northwestern University',
    description: 'Dr. Meera Sinha specializes in diagnosing and treating autoimmune and inflammatory conditions affecting joints, muscles and connective tissues. She has expertise in rheumatoid arthritis, lupus, osteoarthritis, and other rheumatic diseases. Dr. Sinha focuses on improving quality of life and functional capacity for patients with chronic conditions.',
    languages: ['English', 'Hindi'],
    rating: 4.8,
    reviews: 76,
    location: 'Rheumatology Clinic, Floor 3, Room 330',image: dr16
  },
  {
    id: 17,
    name: 'Dr. Eric Johnson',
    specialty: 'Plastic Surgeon',
    status: 'Available',
    availability: 'Mon, Wed: 9AM-6PM, Fri: 9AM-2PM',
    appointmentFee: '$350',
    experience: '18 years',
    education: 'MD from New York University',
    description: 'Dr. Eric Johnson is a board-certified plastic surgeon specializing in both reconstructive and aesthetic procedures. He combines technical skill with an artistic eye to deliver natural-looking results. Dr. Johnson is known for his personalized approach to patient care and attention to detail.',
    languages: ['English'],
    rating: 4.9,
    reviews: 157,
    location: 'Plastic Surgery Center, Floor 4, Suite 415',image: dr17
  },
  {
    id: 18,
    name: 'Dr. Hana Mahmoud',
    specialty: 'Hematologist',
    status: 'Available',
    availability: 'Mon-Thu: 8AM-4PM',
    appointmentFee: '$225',
    experience: '14 years',
    education: 'MD from Emory University',
    description: 'Dr. Hana Mahmoud specializes in disorders of the blood and blood-forming tissues. She has expertise in diagnosing and treating anemias, bleeding disorders, blood cancers, and other hematologic conditions. Dr. Mahmoud employs the latest diagnostic techniques and treatment approaches to provide optimal care.',
    languages: ['English', 'Arabic'],
    rating: 4.7,
    reviews: 82,
    location: 'Hematology Center, Floor 3, Suite 325',image: dr18
  },
  {
    id: 19,
    name: 'Dr. Oliver Stone',
    specialty: 'Gastroenterologist',
    status: 'Available',
    availability: 'Tue-Fri: 8AM-5PM',
    appointmentFee: '$200',
    experience: '15 years',
    education: 'MD from University of Texas',
    description: 'Dr. Oliver Stone is a board-certified gastroenterologist with expertise in digestive disorders and liver diseases. He specializes in endoscopic procedures, inflammatory bowel disease management, and gastrointestinal cancer screening. Dr. Stone takes a patient-centered approach, focusing on both symptom management and disease prevention.',
    languages: ['English'],
    rating: 4.8,
    reviews: 124,
    location: 'Digestive Health Center, Floor 2, Room 230',image: dr19
  },
  {
    id: 20,
    name: 'Dr. Maxwest James',
    specialty: 'General Physician',
    status: 'Available',
    availability: 'Mon-Fri: 9AM-5PM, Sat: 10AM-2PM',
    appointmentFee: '$120',
    experience: '11 years',
    education: 'MBBS  from Johns Hopkins University',
    description: 'Dr. Richard James is a board-certified general physician with over 15 years of experience. He specializes in preventative care and chronic disease management. Dr. James takes a holistic approach to healthcare, focusing on both physical and mental wellbeing.',
    languages: ['English', 'Spanish'],
    rating: 4.8,
    reviews: 96,
    location: 'Medical Center, Floor 3, Room 302-B',
    image: dr20
  },
];