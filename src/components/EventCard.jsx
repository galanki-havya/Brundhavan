import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function EventCard({ id, image, title, caption, info, date }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 group"
    >
      {/* IMAGE */}
      <div className="h-52 overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-2 bg-[#f9f3ec]">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-charcoal-900 flex-1">
            {title}
          </h3>
          {date && (
            <span className="text-xs font-medium text-gold-700 bg-white px-2 py-1 rounded-full whitespace-nowrap">
              {date}
            </span>
          )}
        </div>

        <p className="text-gold-700 font-medium text-sm">
          {caption}
        </p>

        <p className="text-sm text-charcoal-700 leading-relaxed line-clamp-2">
          {info}
        </p>

        <Link
          to={`/activity/${id}`}
          className="inline-block mt-3 text-sm font-semibold text-gold-700 hover:text-gold-900 transition-colors"
        >
          View Gallery →
        </Link>
      </div>
    </motion.div>
  )
}
