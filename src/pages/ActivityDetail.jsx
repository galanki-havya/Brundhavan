import { motion, AnimatePresence } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import PageHero from '../components/PageHero'
import { activitiesData } from '../data/activitiesData'

export default function ActivityDetail() {
  const { id } = useParams()
  const activity = activitiesData[id]
  const [openImage, setOpenImage] = useState(false)

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7f3ee]">
        <div className="text-center py-20 px-6">
          <h1 className="text-3xl font-bold text-charcoal-900 mb-4">Activity Not Found</h1>
          <p className="text-charcoal-600 mb-6">Sorry, we couldn't find this activity.</p>
          <Link
            to="/activities"
            className="inline-block px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Back to Activities
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={activity.title}
        subtitle={activity.description}
        images={[activity.image]}
        breadcrumbs={`Home / Activities / ${activity.title}`}
      />

      <section className="py-16 bg-[#f7f3ee]">
        <div className="max-w-6xl mx-auto px-6">

          {/* TOP BAR: Back + Meta */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

            {/* Left: Back Button */}
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black transition"
            >
              ← Back to Activities
            </Link>

            {/* Right: Tags */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-4 py-1 text-sm bg-white rounded-full shadow-sm text-gray-700">
                {activity.category}
              </span>
              <span className="px-4 py-1 text-sm bg-white rounded-full shadow-sm text-gray-500">
                {activity.date}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 leading-tight">
            {activity.title}
          </h1>

          {/* SPLIT LAYOUT */}
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* LEFT IMAGE */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => setOpenImage(true)}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-[450px] object-cover"
              />
            </motion.div>

            {/* RIGHT TEXT */}
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">

              <p className="text-gray-800 font-medium">
                {activity.fullDescription}
              </p>

              <p>
                This event encourages students to participate actively, build confidence,
                and develop essential life skills beyond academics. It also strengthens
                school culture and teamwork among students and teachers.
              </p>

              {/* Highlight Box */}
              <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Key Highlights
                </h3>
                <ul className="list-disc ml-5 space-y-1 text-gray-600 text-base">
                  <li>Student participation & engagement</li>
                  <li>Skill development & creativity</li>
                  <li>Teamwork & leadership growth</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {openImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenImage(false)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={activity.image}
              alt={activity.title}
              className="max-w-4xl max-h-[80vh] rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
