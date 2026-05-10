import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const galleries = {
  AnnualDay: [
    '/images/gallery/AnnualDay/1.jpg',
    '/images/gallery/AnnualDay/2.jpg',
    '/images/gallery/AnnualDay/3.jpg',
    '/images/gallery/AnnualDay/5.jpg',
    '/images/gallery/AnnualDay/7.jpg',
    '/images/gallery/AnnualDay/10.jpg',
    '/images/gallery/AnnualDay/11.jpg',
    '/images/gallery/AnnualDay/12.jpg',
    '/images/gallery/AnnualDay/14.jpg',
    '/images/gallery/AnnualDay/16.jpg',
    '/images/gallery/AnnualDay/17.jpg',
    '/images/gallery/AnnualDay/18.jpg',
    '/images/gallery/AnnualDay/19.jpg',
    '/images/gallery/AnnualDay/22.jpg',
    '/images/gallery/AnnualDay/24.jpg',
    '/images/gallery/AnnualDay/26.jpg',
    '/images/gallery/AnnualDay/27.jpg',
    '/images/gallery/AnnualDay/28.jpg',
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
    '/images/gallery/GraduationDay/1.jpg',
    '/images/gallery/GraduationDay/2.jpg',
    '/images/gallery/GraduationDay/3.jpg',
    '/images/gallery/GraduationDay/4.jpg',
    '/images/gallery/GraduationDay/5.jpg',
    '/images/gallery/GraduationDay/6.jpg',
    '/images/gallery/GraduationDay/7.jpg',
    '/images/gallery/GraduationDay/8.jpg',
    '/images/gallery/GraduationDay/9.jpg',
    '/images/gallery/GraduationDay/10.jpg',
    '/images/gallery/GraduationDay/11.jpg',
  ],

  HouseVisit: [
    '/images/gallery/HouseVisit/1.jpg',
    '/images/gallery/HouseVisit/2.jpg',
    '/images/gallery/HouseVisit/3.jpg',
    '/images/gallery/HouseVisit/4.jpg',
    '/images/gallery/HouseVisit/5.jpg',
    '/images/gallery/HouseVisit/6.jpg',
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
}

export default function GalleryDetail() {
  const { folder } = useParams()

  const images = galleries[folder] || []

  return (
    <section className="min-h-screen bg-[#F7F3EE] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <Link
          to="/gallery"
          className="inline-flex items-center text-[#8B5E3C] font-semibold mb-8 hover:underline"
        >
          ← Back to Gallery
        </Link>

        <h1 className="text-5xl font-bold text-[#3A2618] mb-12">
          {folder?.replace(/([A-Z])/g, ' $1').trim()}
        </h1>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="overflow-hidden rounded-3xl shadow-lg break-inside-avoid"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full object-cover hover:scale-105 transition duration-500"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
