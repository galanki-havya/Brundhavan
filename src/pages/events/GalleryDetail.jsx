import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const galleries = {
  AnnualDay: [
    '/images/gallery/AnnualDay/5.jpg',
    '/images/gallery/AnnualDay/7.jpg',
    '/images/gallery/AnnualDay/10.jpg',
    '/images/gallery/AnnualDay/11.jpg',
    '/images/gallery/AnnualDay/16.jpg',
    '/images/gallery/AnnualDay/17.jpg',
    '/images/gallery/AnnualDay/18.jpg',
    '/images/gallery/AnnualDay/19.jpg',
    '/images/gallery/AnnualDay/22.jpg',
    '/images/gallery/AnnualDay/24.jpg',
    '/images/gallery/AnnualDay/26.jpg',
    '/images/gallery/AnnualDay/27.jpg',
  ],

  ScienceDay: [
    '/images/gallery/ScienceDay/1.jpg',
    '/images/gallery/ScienceDay/2.jpg',
    '/images/gallery/ScienceDay/3.jpg',
    '/images/gallery/ScienceDay/4.jpg',
    '/images/gallery/ScienceDay/5.jpg',
    '/images/gallery/ScienceDay/6.jpg',
    '/images/gallery/ScienceDay/7.jpg',
    '/images/gallery/ScienceDay/8.jpg',
    '/images/gallery/ScienceDay/9.jpg',
  ],

  AcademicAchivers: [
    '/images/gallery/AcademicAchivers/1.jpg',
    '/images/gallery/AcademicAchivers/2.jpg',
    '/images/gallery/AcademicAchivers/3.jpg',
    '/images/gallery/AcademicAchivers/4.jpg',
    '/images/gallery/AcademicAchivers/5.jpg',
    '/images/gallery/AcademicAchivers/6.jpg',
  ],

  ChildrensDay: [
    '/images/gallery/ChildrensDay/1.jpg',
    '/images/gallery/ChildrensDay/2.jpg',
    '/images/gallery/ChildrensDay/3.jpg',
    '/images/gallery/ChildrensDay/4.jpg',
    '/images/gallery/ChildrensDay/5.jpg',
  ],

  GraduationDay: [

    '/images/gallery/GraduationDay/12.jpg',
    '/images/gallery/GraduationDay/13.jpg',
    '/images/gallery/GraduationDay/14.jpg',
    '/images/gallery/GraduationDay/15.jpg',
    '/images/gallery/GraduationDay/16.jpg',
  ],

  HouseVisit: [
    '/images/gallery/HouseVisit/2.jpg',
    '/images/gallery/HouseVisit/4.jpg',
    '/images/gallery/HouseVisit/5.jpg',
    '/images/gallery/HouseVisit/7.jpg',
  ],

  Infrastructure: [
    '/images/gallery/Infrastructure/1.jpg',
    '/images/gallery/Infrastructure/2.jpg',
    '/images/gallery/Infrastructure/3.jpg',
    '/images/gallery/Infrastructure/4.jpg',
    '/images/gallery/Infrastructure/5.jpg',
    '/images/gallery/Infrastructure/6.jpg',
    '/images/gallery/Infrastructure/7.jpg',
    '/images/gallery/Infrastructure/8.jpg',
  ],

  'campus-activities': [
    '/images/gallery/campus-activities/1.jpg',
    '/images/gallery/campus-activities/2.jpg',
    '/images/gallery/campus-activities/3.jpg',

    '/images/gallery/campus-activities/5.jpg',

  ],
}

export default function GalleryDetail() {
  const { folder } = useParams()

  const images = galleries[folder] || []

  return (
    <section className="min-h-screen bg-[#F7F3EE] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <Link
          to="/gallery"
          className="inline-flex items-center text-[#8B5E3C] font-semibold mb-10 hover:underline"
        >
          ← Back to Gallery
        </Link>

        <div className="mb-14 text-center">
          <span className="text-[#8B5E3C] uppercase tracking-[0.25em] text-xs font-semibold">
            Photo Collection
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-[#3A2618] mt-4">
            {folder?.replace(/[-_]/g, ' ')}
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            A curated visual story of school moments, achievements, and celebrations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              className="overflow-hidden rounded-2xl shadow-md bg-white group"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
