import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function AdmissionForm() {
  const [form, setForm] = useState({
    studentName: '', dob: '', gender: '', classApplying: '',
    fatherName: '', motherName: '', phone: '', email: '',
    address: '', previousSchool: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const inputStyle = {
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid #e0e0e0',
    fontSize: '0.95rem',
    width: '100%',
    outline: 'none'
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.studentName || !form.phone || !form.classApplying) {
      alert("Please fill all required fields marked with *")
      return
    }
    setSubmitted(true)
  }

  return (
    <div style={{ background: '#F9FAFB', minHeight: '100vh', padding: '120px 24px 80px', fontFamily: "'DM Sans', sans-serif" }}>
      <Helmet>
        <title>Online Admission Form - Brindavan Schools</title>
      </Helmet>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#011E3A', marginBottom: '12px' }}>
            Online Admission
          </h1>
          <p style={{ color: '#666' }}>Begin your journey with us by filling out the details below.</p>
        </div>

        {submitted ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ background: '#fff', padding: '60px', borderRadius: '24px', textAlign: 'center', border: '1px solid #f0f0f0' }}>
            <h2 style={{ color: '#011E3A', marginBottom: '16px' }}>Application Received!</h2>
            <p style={{ color: '#666', marginBottom: '24px' }}>Our team will reach out to you shortly regarding the next steps.</p>
            <Link to="/" style={{ background: '#FF6347', color: '#fff', padding: '12px 30px', borderRadius: '50px', textDecoration: 'none', fontWeight: 600 }}>Back to Home</Link>
          </motion.div>
        ) : (
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            style={{ background: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid #f0f0f0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            
            <input name="studentName" onChange={handleChange} placeholder="Student Name *" style={inputStyle} />
            <input type="date" name="dob" onChange={handleChange} style={inputStyle} />
            <select name="gender" onChange={handleChange} style={inputStyle}>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <select name="classApplying" onChange={handleChange} style={inputStyle}>
              <option value="">Class Applying For *</option>
              {["Nursery","LKG","UKG","1","2","3","4","5","6","7","8","9","10"].map(c => <option key={c}>{c}</option>)}
            </select>

            <input name="fatherName" onChange={handleChange} placeholder="Father Name" style={inputStyle} />
            <input name="motherName" onChange={handleChange} placeholder="Mother Name" style={inputStyle} />
            <input name="phone" onChange={handleChange} placeholder="Phone Number *" style={inputStyle} />
            <input name="email" onChange={handleChange} placeholder="Email Address" style={inputStyle} />
            <input name="previousSchool" onChange={handleChange} placeholder="Previous School" style={{ ...inputStyle, gridColumn: 'span 2' }} />
            <textarea name="address" onChange={handleChange} placeholder="Address" style={{ ...inputStyle, gridColumn: 'span 2' }} rows={2} />
            <textarea name="message" onChange={handleChange} placeholder="Additional Message" style={{ ...inputStyle, gridColumn: 'span 2' }} rows={3} />

            <button type="submit" style={{ 
              gridColumn: 'span 2', background: '#011E3A', color: '#fff', padding: '16px', 
              borderRadius: '12px', fontWeight: 700, border: 'none', cursor: 'pointer', marginTop: '10px' 
            }}>
              Submit Application
            </button>
          </motion.form>
        )}
      </div>
    </div>
  )
}