import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const asset = (path) => path.replace('../assets', '/images')

const galleryData = {
  AnnualDay: [
    asset('/images/gallery/AnnualDay/1.jpg'),
    asset('/images/gallery/AnnualDay/2.jpg'),
    asset('/images/gallery/AnnualDay/3.jpg'),
    asset('/images/gallery/AnnualDay/5.jpg'),
    asset('/images/gallery/AnnualDay/7.jpg'),
    asset('/images/gallery/AnnualDay/10.jpg'),
    asset('/images/gallery/AnnualDay/11.jpg'),
    asset('/images/gallery/AnnualDay/12.jpg'),
    asset('/images/gallery/AnnualDay/14.jpg'),
    asset('/images/gallery/AnnualDay/16.jpg'),
    asset('/images/gallery/AnnualDay/17.jpg'),
    asset('/images/gallery/AnnualDay/18.jpg'),
    asset('/images/gallery/AnnualDay/19.jpg'),
    asset('/images/gallery/AnnualDay/22.jpg'),
    asset('/images/gallery/AnnualDay/24.jpg'),
    asset('/images/gallery/AnnualDay/26.jpg'),
    asset('/images/gallery/AnnualDay/27.jpg'),
    asset('/images/gallery/AnnualDay/28.jpg'),
    asset('/images/gallery/AnnualDay/29.jpg'),
  ],

  ScienceDay: [
    asset('/images/gallery/ScienceDay/1.jpg'),
    asset('/images/gallery/ScienceDay/2.jpg'),
  ],

  AcademicAchievers: [
    asset('/images/gallery/AcademicAchivers/1.jpg'),
    asset('/images/gallery/AcademicAchivers/2.jpg'),
  ],

  ChildrensDay: [
    asset('/images/gallery/ChildrensDay/1.jpg'),
    asset('/images/gallery/ChildrensDay/2.jpg'),
  ],

  GraduationDay: [
    asset('/images/gallery/GraduationDay/1.jpg'),
    asset('/images/gallery/GraduationDay/2.jpg'),
  ],

  HouseVisit: [
    asset('/images/gallery/HouseVisit/1.jpg'),
    asset('/images/gallery/HouseVisit/2.jpg'),
  ],

  Infrastructure: [
    asset('/images/gallery/Infrastructure/1.jpg'),
    asset('/images/gallery/Infrastructure/2.jpg'),
  ]
}

export default function GalleryDetails() {
  const { category } = useParams()

  const images = galleryData[category] || []

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-bold text-[#5C3A21]">
            {category}
          </h1>

          <Link
            to="/gallery"
            className="px-6 py-3 rounded-full bg-[#5C3A21] text-white"
          >
            Back
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={img}
                alt=""
                className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
