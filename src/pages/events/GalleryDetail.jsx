import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const asset = (path) => new URL(path, import.meta.url).href

const galleries = {
  AnnualDay: [
    asset('../../assets/gallery/AnnualDay/1.jpg'),
    asset('../../assets/gallery/AnnualDay/2.jpg'),
    asset('../../assets/gallery/AnnualDay/3.jpg'),
    asset('../../assets/gallery/AnnualDay/5.jpg'),
    asset('../../assets/gallery/AnnualDay/7.jpg'),
    asset('../../assets/gallery/AnnualDay/10.jpg'),
    asset('../../assets/gallery/AnnualDay/11.jpg'),
    asset('../../assets/gallery/AnnualDay/12.jpg'),
    asset('../../assets/gallery/AnnualDay/14.jpg'),
    asset('../../assets/gallery/AnnualDay/16.jpg'),
    asset('../../assets/gallery/AnnualDay/17.jpg'),
    asset('../../assets/gallery/AnnualDay/18.jpg'),
    asset('../../assets/gallery/AnnualDay/19.jpg'),
    asset('../../assets/gallery/AnnualDay/22.jpg'),
    asset('../../assets/gallery/AnnualDay/24.jpg'),
    asset('../../assets/gallery/AnnualDay/26.jpg'),
    asset('../../assets/gallery/AnnualDay/27.jpg'),
    asset('../../assets/gallery/AnnualDay/28.jpg'),
  ],

  ScienceDay: [
    asset('../../assets/gallery/ScienceDay/1.jpg'),
    asset('../../assets/gallery/ScienceDay/2.jpg'),
    asset('../../assets/gallery/ScienceDay/3.jpg'),
    asset('../../assets/gallery/ScienceDay/4.jpg'),
    asset('../../assets/gallery/ScienceDay/5.jpg'),
    asset('../../assets/gallery/ScienceDay/6.jpg'),
    asset('../../assets/gallery/ScienceDay/7.jpg'),
    asset('../../assets/gallery/ScienceDay/8.jpg'),
    asset('../../assets/gallery/ScienceDay/9.jpg'),
  ],

  AcademicAchivers: [
    asset('../../assets/gallery/AcademicAchivers/1.jpg'),
    asset('../../assets/gallery/AcademicAchivers/2.jpg'),
    asset('../../assets/gallery/AcademicAchivers/3.jpg'),
    asset('../../assets/gallery/AcademicAchivers/4.jpg'),
    asset('../../assets/gallery/AcademicAchivers/5.jpg'),
    asset('../../assets/gallery/AcademicAchivers/6.jpg'),
  ],

  ChildrensDay: [
    asset('../../assets/gallery/ChildrensDay/1.jpg'),
    asset('../../assets/gallery/ChildrensDay/2.jpg'),
    asset('../../assets/gallery/ChildrensDay/3.jpg'),
    asset('../../assets/gallery/ChildrensDay/4.jpg'),
    asset('../../assets/gallery/ChildrensDay/5.jpg'),
  ],

  GraduationDay: [
    asset('../../assets/gallery/GraduationDay/1.jpg'),
    asset('../../assets/gallery/GraduationDay/2.jpg'),
    asset('../../assets/gallery/GraduationDay/3.jpg'),
    asset('../../assets/gallery/GraduationDay/4.jpg'),
    asset('../../assets/gallery/GraduationDay/5.jpg'),
    asset('../../assets/gallery/GraduationDay/6.jpg'),
    asset('../../assets/gallery/GraduationDay/7.jpg'),
    asset('../../assets/gallery/GraduationDay/8.jpg'),
    asset('../../assets/gallery/GraduationDay/9.jpg'),
    asset('../../assets/gallery/GraduationDay/10.jpg'),
    asset('../../assets/gallery/GraduationDay/11.jpg'),
  ],

  HouseVisit: [
    asset('../../assets/gallery/HouseVisit/1.jpg'),
    asset('../../assets/gallery/HouseVisit/2.jpg'),
    asset('../../assets/gallery/HouseVisit/3.jpg'),
    asset('../../assets/gallery/HouseVisit/4.jpg'),
    asset('../../assets/gallery/HouseVisit/5.jpg'),
    asset('../../assets/gallery/HouseVisit/6.jpg'),
    asset('../../assets/gallery/HouseVisit/7.jpg'),
  ],

  Infrastructure: [
    asset('../../assets/gallery/Infrastructure/1.jpg'),
    asset('../../assets/gallery/Infrastructure/2.jpg'),
    asset('../../assets/gallery/Infrastructure/3.jpg'),
    asset('../../assets/gallery/Infrastructure/4.jpg'),
    asset('../../assets/gallery/Infrastructure/5.jpg'),
    asset('../../assets/gallery/Infrastructure/6.jpg'),
    asset('../../assets/gallery/Infrastructure/7.jpg'),
    asset('../../assets/gallery/Infrastructure/8.jpg'),
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
