import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function AdmissionForm() {
  const [form, setForm] = useState({
    studentName: '',
    dob: '',
    gender: '',
    classApplying: '',
    fatherName: '',
    motherName: '',
    phone: '',
    email: '',
    address: '',
    previousSchool: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!form.studentName || !form.phone || !form.classApplying) {
      alert("Please fill required fields")
      return
    }

    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-primary-50 pt-28 pb-10 px-4">
      <Helmet>
        <title>Online Admission Form - Brindavan School</title>
      </Helmet>

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-charcoal-900">
            Online Admission Form
          </h1>
          <p className="text-charcoal-600 mt-2">
            Fill in the details carefully to apply for admission
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center"
          >
            <h2 className="text-2xl font-bold text-green-700">Application Submitted!</h2>
            <p className="text-charcoal-600 mt-2">
              We will contact you shortly regarding admission.
            </p>

            <Link
              to="/"
              className="inline-block mt-6 bg-gradient-to-r from-primary-700 to-primary-900 text-white px-6 py-3 rounded-full font-semibold hover:from-primary-800 hover:to-primary-950 transition"
            >
              Back to Home
            </Link>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-md border border-gold-100 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-5"
          >

            {/* Student Info */}
            <input name="studentName" onChange={handleChange} placeholder="Student Name *" className="input" />

            <input type="date" name="dob" onChange={handleChange} className="input" />

            <select name="gender" onChange={handleChange} className="input">
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <select name="classApplying" onChange={handleChange} className="input">
              <option value="">Class Applying For *</option>
              {["Nursery","LKG","UKG","1","2","3","4","5","6","7","8","9","10"].map(c => (
                <option key={c}>{c}</option>
              ))}
            </select>

            {/* Parent Info */}
            <input name="fatherName" onChange={handleChange} placeholder="Father Name" className="input" />
            <input name="motherName" onChange={handleChange} placeholder="Mother Name" className="input" />

            <input name="phone" onChange={handleChange} placeholder="Phone *" className="input" />
            <input name="email" onChange={handleChange} placeholder="Email" className="input" />

            <input name="previousSchool" onChange={handleChange} placeholder="Previous School" className="input md:col-span-2" />

            <textarea
              name="address"
              onChange={handleChange}
              placeholder="Address"
              className="input md:col-span-2"
              rows={2}
            />

            <textarea
              name="message"
              onChange={handleChange}
              placeholder="Additional Message"
              className="input md:col-span-2"
              rows={3}
            />

            {/* Submit */}
            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-primary-700 to-primary-900 text-white py-3 rounded-xl font-semibold hover:from-primary-800 hover:to-primary-950 shadow-md transition"
            >
              Submit Application
            </button>

          </motion.form>
        )}
      </div>
    </div>
  )
}