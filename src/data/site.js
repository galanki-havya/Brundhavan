import { TrendingUp, Users, Award, BookOpen } from 'lucide-react'

export const siteData = {
  school: {
    name: "Brindavan School",
    tagline: "Best State Board School in Palamaneru",
    shortTagline: "Building Bright Futures",
    description:
      "Brundavan School, founded in 2025 in Palamaner, is a modern State Board school dedicated to academic excellence, holistic growth, and strong values. We offer contemporary facilities, experienced faculty, and a nurturing environment for every child.",
    established: "2025",
    affiliation: "State Board School",
    rating: "4.9",
    phone: "+91 88920 04394",
    email: "contact@brundavanschool.com",
    address: "Bazaar Street, Palamaner, Chittoor, Andhra Pradesh – 517004, India",
    website: "www.brundavanschool.com",
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
      desc: "Schedule a school tour. Meet our faculty, explore facilities, and understand the Brundavan learning environment.",
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
        "Brundavan School has given my child a strong foundation. The faculty is dedicated and truly cares about each student's progress. The campus is clean and well-maintained.",
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
        "Brundavan prepared me well for my board exams and my competitive entrance tests. The teachers here go the extra mile to help students succeed.",
      avatar: "SR",
    },
    {
      name: "Lakshmi Devi",
      role: "Parent of Grade 3 student",
      quote:
        "The student-friendly environment at Brundavan is what sets it apart. My son looks forward to school every day. Highly recommended for families in Palamaner.",
      avatar: "LD",
    },
  ],

  galleryImages: [
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80", alt: "Classroom teaching session", category: "Classrooms" },
    { src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&q=80", alt: "Students exploring science lab experiments", category: "Labs" },
    { src: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=600&q=80", alt: "School sports day activities", category: "Sports" },
    { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", alt: "Annual day performance and awards", category: "Annual Day" },
    { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80", alt: "Students using library resources", category: "Library" },
    { src: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=600&q=80", alt: "Students engaged in a science fair", category: "Science Fair" },
    { src: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80", alt: "Festival celebration with students", category: "Festivals" },
    { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80", alt: "Outdoor school outing and campus tour", category: "Outings" },
    { src: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=600&q=80", alt: "Faculty mentoring students", category: "Faculty" },
    { src: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&q=80", alt: "School campus aerial view", category: "Campus" },
  ],

  vision:
    "To be a globally recognised centre of learning excellence that empowers students to become ethical, innovative, and compassionate leaders who make meaningful contributions to society.",
  mission:
    "To provide a stimulating, inclusive, and values-driven educational environment where every learner is inspired to achieve their fullest potential through academic rigour, creative expression, and character development.",

  chairman: {
    name: "Sri K. Venkateshwar Rao",
    title: "Founder & Chairman",
    message:
      "Education is not merely the accumulation of knowledge — it is the kindling of a flame that illuminates the world. At Brundavan School, founded in 2025, we are building a modern educational institution focused on academic excellence, innovation, and holistic development. Our commitment to quality education, rooted in Indian values and global perspectives, will shape future generations. I invite you to be part of this extraordinary journey.",
  },
  principal: {
    name: "Dr. Lakshmi Prasanna",
    title: "Principal",
    message:
      "At Brundavan School, every day is an opportunity for our students to discover, learn, and grow. As an experienced educator dedicated to modern education excellence, I lead our team in providing quality education in a supportive environment. We believe in nurturing both the academic and personal development of every child through innovative teaching methods and personalized attention. We look forward to partnering with families to help our students achieve their best.",
  },
};
