import { useParams, Link } from 'react-router-dom'

const asset = (path) => new URL(path, import.meta.url).href

const galleries = {
  'annual-day': [
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
    asset('../../assets/gallery/AnnualDay/29.jpg'),
  ],
  'science-day': [
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
  'academic-achievers': [
    asset('../../assets/gallery/AcademicAchivers/2.jpg'),
    asset('../../assets/gallery/AcademicAchivers/1.jpg'),
    asset('../../assets/gallery/AcademicAchivers/3.jpg')
  ],
  'childrens-day': [
    asset('../../assets/gallery/ChildrensDay/1.jpg'),
    asset('../../assets/gallery/ChildrensDay/2.jpg'),
    asset('../../assets/gallery/ChildrensDay/3.jpg')
  ],
  'graduation-day': [
    asset('../../assets/gallery/GraduationDay/1.jpg'),
    asset('../../assets/gallery/GraduationDay/2.jpg'),
    asset('../../assets/gallery/GraduationDay/3.jpg')
  ],
  'house-visit': [
    asset('../../assets/gallery/HouseVisit/1.jpg'),
    asset('../../assets/gallery/HouseVisit/2.jpg'),
    asset('../../assets/gallery/HouseVisit/3.jpg')
  ],
  'infrastructure': [
    asset('../../assets/gallery/Infrastructure/1.jpg'),
    asset('../../assets/gallery/Infrastructure/2.jpg'),
    asset('../../assets/gallery/Infrastructure/3.jpg')
  ]
}

const titleMap = {
  'annual-day': 'Annual Day',
  'science-day': 'Science Day',
  'academic-achievers': 'Academic Achievers',
  'childrens-day': "Children's Day",
  'graduation-day': 'Graduation Day',
  'house-visit': 'House Visit',
  infrastructure: 'Infrastructure'
}

export default function AlbumPage() {
  const { slug } = useParams()
  const images = galleries[slug] || []
  const title = titleMap[slug] || 'Gallery'

  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <Link
          to="/gallery"
          className="inline-block mb-8 text-[#8B5E3C] font-semibold"
        >
          ← Back to Gallery
        </Link>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal-900 mb-6">
          {title}
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg group"
            >
              <img
                src={img}
                alt={`${title} photo ${index + 1}`}
                loading="lazy"
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
