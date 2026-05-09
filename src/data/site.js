import { TrendingUp, Users, Award, BookOpen } from 'lucide-react'

export const siteData = {
  school: {
    name: "Brindavan School",
    tagline: "Best State Board School in Palamaner",
    shortTagline: "Building Bright Futures",
    description:
      "Brindavan School, founded in 2025 in Palamaner, is a modern State Board school dedicated to academic excellence, holistic growth, and strong values. We offer contemporary facilities, experienced faculty, and a nurturing environment for every child.",
    established: "2025",
    affiliation: "State Board School",
    rating: "4.9",
    phone: "+91 88920 04394",
    email: "contact@brindavanschool.com",
    address: "Bazaar Street, Palamaner, Chittoor, Andhra Pradesh – 517004, India",
    website: "www.brindavanschool.in",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.2!2d79.15!3d13.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4a!2sPalamaner%2C%20Chittoor!5e0!3m2!1sen!2sin!4v1619608000000!5m2!1sen!2sin",
    socials: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
      twitter: "#",
    },
  },

  stats: [
    { value: "State Curriculum", label: "Curriculum Framework", icon: Award },
    { value: "Personalized", label: "Learning Approach", icon: Users },
    { value: "Modern", label: "Smart Classrooms", icon: TrendingUp },
    { value: "Holistic", label: "Student Development", icon: BookOpen },
  ],

  facilities: [
    {
      icon: "🔬",
      title: "Science Laboratories",
      desc: "State-of-the-art Physics, Chemistry, and Biology labs equipped with modern instruments for hands-on learning.",
    },
    {
      icon: "💻",
      title: "Digital Learning Center",
      desc: "Air-conditioned computer labs with high-speed internet and the latest software for 21st-century skill development.",
    },
    {
      icon: "📚",
      title: "Resource Library",
      desc: "A vast collection of 30,000+ books, digital resources, periodicals, and e-learning modules for every grade.",
    },
    {
      icon: "🏊",
      title: "Aquatic Complex",
      desc: "Olympic-standard swimming pool with certified coaches, separate sessions for all age groups.",
    },
    {
      icon: "🎨",
      title: "Arts & Creativity Studio",
      desc: "Dedicated spaces for painting, sculpture, music, dance, and drama to nurture every child's creative potential.",
    },
    {
      icon: "⚽",
      title: "Sports Complex",
      desc: "Multi-sport facilities including cricket ground, basketball, badminton courts, and an indoor gymnasium.",
    },
  ],

  programs: [
    {
      level: "Pre-Primary (Nursery–KG)",
      age: "Ages 3–6",
      desc: "Play-based learning with Montessori principles, fostering language, motor skills, and social development.",
      color: "from-yellow-400 to-orange-400",
    },
    {
      level: "Primary School (Grades 1–5)",
      age: "Ages 6–11",
      desc: "Strong foundation in core subjects with activity-based pedagogy, art integration, and life-skills curriculum.",
      color: "from-[#C89B3C] to-[#8B5E3C]",
    },
    {
      level: "Middle School (Grades 6–8)",
      age: "Ages 11–14",
      desc: "Concept-based learning, critical thinking projects, and exploration of co-curricular interests.",
      color: "from-[#8B5E3C] to-[#5C3A21]",
    },
    {
      level: "Secondary School (Grades 9–10)",
      age: "Ages 14–16",
      desc: "State Board curriculum with expert mentorship, exam preparation, and skill enhancement programmes.",
      color: "from-[#5C3A21] to-[#C89B3C]",
    },
  ],

  admissionSteps: [
    {
      step: "01",
      title: "Submit Enquiry",
      desc: "Fill the online enquiry form or visit our admissions office. Our team will get in touch within 24 hours.",
    },
    {
      step: "02",
      title: "Campus Visit",
      desc: "Schedule a school tour. Meet our faculty, explore facilities, and understand the Brindavan learning environment.",
    },
    {
      step: "03",
      title: "Entrance Assessment",
      desc: "Age-appropriate interaction or written assessment to understand your child's learning level and strengths.",
    },
    {
      step: "04",
      title: "Offer & Enrolment",
      desc: "Receive your admission offer, complete documentation, and secure your child's seat with fee payment.",
    },
  ],

  testimonials: [
    {
      name: "Ramesh Kumar",
      role: "Parent of Grade 7 student",
      quote:
        "Brindavan School has given my child a strong foundation. The faculty is dedicated and truly cares about each student's progress. The campus is clean and well-maintained.",
      avatar: "RK",
    },
    {
      name: "Divya Reddy",
      role: "Parent of Grade 5 student",
      quote:
        "I appreciate the balance between academics and sports here. My daughter has become more confident, both in her studies and physical activities. Great value for education.",
      avatar: "DR",
    },
    {
      name: "Sriram",
      role: "Alumni – Batch of 2020",
      quote:
        "Brindavan prepared me well for my board exams and my competitive entrance tests. The teachers here go the extra mile to help students succeed.",
      avatar: "SR",
    },
    {
      name: "Lakshmi Devi",
      role: "Parent of Grade 3 student",
      quote:
        "The student-friendly environment at Brindavan is what sets it apart. My son looks forward to school every day. Highly recommended for families in Palamaner.",
      avatar: "LD",
    },
  ],

  galleryImages: [
    {
      src: new URL('../assets/gallery/Infrastructure/1.jpg', import.meta.url).href,
      alt: 'Classroom teaching session',
      category: 'Classrooms',
    },
    {
      src: new URL('../assets/gallery/Infrastructure/2.jpg', import.meta.url).href,
      alt: 'Students exploring science lab experiments',
      category: 'Labs',
    },
    {
      src: new URL('../assets/gallery/Sports/1.jpg', import.meta.url).href,
      alt: 'School sports day activities',
      category: 'Sports',
    },
    {
      src: new URL('../assets/gallery/AnnualDay/1.jpg', import.meta.url).href,
      alt: 'Annual day performance and awards',
      category: 'Annual Day',
    },
    {
      src: new URL('../assets/gallery/Library/1.jpg', import.meta.url).href,
      alt: 'Students using library resources',
      category: 'Library',
    },
    {
      src: new URL('../assets/gallery/ScienceDay/1.jpg', import.meta.url).href,
      alt: 'Students engaged in a science fair',
      category: 'Science Fair',
    },
    {
      src: new URL('../assets/gallery/ChildrensDay/1.jpg', import.meta.url).href,
      alt: 'Festival celebration with students',
      category: 'Festivals',
    },
    {
      src: new URL('../assets/gallery/HouseVisit/1.jpg', import.meta.url).href,
      alt: 'Outdoor school outing and campus tour',
      category: 'Outings',
    },
    {
      src: new URL('../assets/gallery/Infrastructure/3.jpg', import.meta.url).href,
      alt: 'Faculty mentoring students',
      category: 'Faculty',
    },
    {
      src: new URL('../assets/gallery/Infrastructure/4.jpg', import.meta.url).href,
      alt: 'School campus aerial view',
      category: 'Campus',
    },
  ],

  vision:
    "To be a globally recognised centre of learning excellence that empowers students to become ethical, innovative, and compassionate leaders who make meaningful contributions to society.",
  mission:
    "To provide a stimulating, inclusive, and values-driven educational environment where every learner is inspired to achieve their fullest potential through academic rigour, creative expression, and character development.",

  chairman: {
    name: "M Mahesh Babu",
    title: "Founder & CEO",
    message:
      "Education is not merely the accumulation of knowledge — it is the kindling of a flame that illuminates the world. At Brindavan School, founded in 2025, we are building a modern educational institution focused on academic excellence, innovation, and holistic development. Our commitment to quality education, rooted in Indian values and global perspectives, will shape future generations. I invite you to be part of this extraordinary journey.",
  },
  principal: {
    name: "Dr. Lakshmi Prasanna",
    title: "Principal",
    message:
      "At Brindavan School, every day is an opportunity for our students to discover, learn, and grow. As an experienced educator dedicated to modern education excellence, I lead our team in providing quality education in a supportive environment. We believe in nurturing both the academic and personal development of every child through innovative teaching methods and personalized attention. We look forward to partnering with families to help our students achieve their best.",
  },
};
