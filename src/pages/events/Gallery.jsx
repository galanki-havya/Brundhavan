import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../../components/PageHero'
import { Users, Award, Calendar, Camera } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const asset = (path) => path

const galleryData = [
  {
    title: 'Annual Day',
    folder: 'AnnualDay',
    cover: asset('/images/gallery/AnnualDay/1.jpg'),
    images: [
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
    ]
  },
  {
    title: 'Science Day',
    folder: 'ScienceDay',
    cover: asset('/images/gallery/ScienceDay/1.jpg'),
    images: [
      asset('/images/gallery/ScienceDay/1.jpg'),
      asset('/images/gallery/ScienceDay/2.jpg')
    ]
  },
  {
    title: 'Academic Achievers',
    folder: 'AcademicAchivers',
    cover: asset('/images/gallery/AcademicAchivers/1.jpg'),
    images: [
      asset('/images/gallery/AcademicAchivers/1.jpg'),
      asset('/images/gallery/AcademicAchivers/2.jpg')
    ]
  },
  {
    title: "Children's Day",
    folder: 'ChildrensDay',
    cover: asset('/images/gallery/ChildrensDay/1.jpg'),
    images: [
      asset('/images/gallery/ChildrensDay/1.jpg'),
      asset('/images/gallery/ChildrensDay/2.jpg')
    ]
  },
  {
    title: 'Graduation Day',
    folder: 'GraduationDay',
    cover: asset('/images/gallery/GraduationDay/1.jpg'),
    images: [
      asset('/images/gallery/GraduationDay/1.jpg'),
      asset('/images/gallery/GraduationDay/2.jpg')
    ]
  },
  {
    title: 'House Visit',
    folder: 'HouseVisit',
    cover: asset('/images/gallery/HouseVisit/1.jpg'),
    images: [
      asset('/images/gallery/HouseVisit/1.jpg'),
      asset('/images/gallery/HouseVisit/2.jpg')
    ]
  },
  {
    title: 'Infrastructure',
    folder: 'Infrastructure',
    cover: asset('/images/gallery/Infrastructure/1.jpg'),
    images: [
      asset('/images/gallery/Infrastructure/1.jpg'),
      asset('/images/gallery/Infrastructure/2.jpg')
    ]
  },
  {
    title: 'Campus Activities',
    folder: 'campus-activities',
    cover: asset('/images/gallery/campus-activities/1.jpg'),
    images: [
      asset('/images/gallery/campus-activities/2.jpg'),
      asset('/images/gallery/campus-activities/3.jpg'),
      asset('/images/gallery/campus-activities/4.jpg'),
      asset('/images/gallery/campus-activities/5.jpg'),
      asset('/images/gallery/campus-activities/6.jpg'),
      asset('/images/gallery/campus-activities/7.jpg'),
    ]
  }
]

export default function Gallery() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7FB] via-[#FFFDFD] to-[#FFF4F8]">

      <Helmet>
        <title>Brindavan School Palamaner | Photo Gallery & Campus Life</title>
        <meta
          name="description"
          content="Explore real moments from Brindavan School Palamaner including annual day celebrations, sports events, science exhibitions, classroom activities, and student achievements."
        />
      </Helmet>

      <PageHero
        variant="pink"
        title="Photo Gallery"
        subtitle="Capturing memorable moments and showcasing the vibrant life at Brindavan School."
      />

      {/* ── GALLERY CATEGORIES ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'School Events',
                description: 'Celebrations, festivals, and special school programs',
              },
              {
                icon: Award,
                title: 'Achievements',
                description: 'Academic excellence, sports victories, and competitions',
              },
              {
                icon: Calendar,
                title: 'Annual Functions',
                description: 'Cultural programs, annual days, and graduation ceremonies',
              },
              {
                icon: Camera,
                title: 'Campus Life',
                description: 'Daily activities, classroom moments, and student interactions',
              },
              {
                icon: Camera,
                title: 'Digital Media Archive',
                description: 'External Google Drive photo collection and school media archive',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  group relative overflow-hidden
                  bg-white/80 backdrop-blur-xl
                  border border-[#F6D6E6]
                  rounded-[32px]
                  p-7
                  shadow-[0_10px_40px_rgba(236,72,153,0.08)]
                  hover:shadow-[0_18px_50px_rgba(236,72,153,0.18)]
                  hover:-translate-y-2
                  transition-all duration-500
                "
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFE4EF] to-[#FFD3E2] rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                  <item.icon className="w-7 h-7 text-[#D94680]" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#7A284B] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#7C6A74] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PHOTOS ── */}
      <section className="py-24 bg-gradient-to-b from-[#FFF8FC] via-[#FFFDFE] to-[#FFF1F7] relative overflow-hidden">

        {/* Decorative background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200/30 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-rose-200/20 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#D94680] uppercase tracking-[0.25em] text-xs font-semibold">
              School Life
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#7A284B] mt-3">
              Moments That Define Us
            </h2>
            <p className="text-[#7C6A74] text-lg mt-4 max-w-2xl mx-auto">
              Explore curated collections of events, achievements, and campus life captured over time.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10">
            {galleryData.map((gallery, index) => (
              <motion.div
                key={gallery.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => {
                  if (gallery.external) {
                    window.open(gallery.link, '_blank')
                  } else {
                    navigate(`/gallery/${gallery.folder}`)
                  }
                }}
                className="
                  group cursor-pointer
                  relative overflow-hidden
                  rounded-[34px]
                  bg-white/70 backdrop-blur-xl
                  border border-[#F7D9E6]
                  shadow-[0_10px_35px_rgba(236,72,153,0.08)]
                  hover:shadow-[0_20px_60px_rgba(236,72,153,0.18)]
                  transition-all duration-500
                  hover:-translate-y-3
                "
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={gallery.cover}
                    alt={gallery.title}
                    loading="lazy"
                    className="
                      w-full h-72 object-cover
                      group-hover:scale-110
                      transition duration-700
                    "
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D0F24]/70 via-transparent to-transparent opacity-80" />

                  {/* Photo count badge */}
                  <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#C2417A] text-xs font-bold shadow-lg">
                    {gallery.images.length} Photos
                  </div>
                </div>

                {/* Card content */}
                <div className="p-7">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <h3 className="text-2xl font-display font-bold text-[#7A284B] group-hover:text-[#D94680] transition-colors duration-300">
                      {gallery.title}
                    </h3>
                    {gallery.external && (
                      <span className="text-xs bg-[#E8A0B0] text-white px-2 py-1 rounded-full">
                        External
                      </span>
                    )}
                  </div>

                  <p className="text-[#7C6A74] mt-3 leading-relaxed">
                    Explore memorable moments from {gallery.title.toLowerCase()}.
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#D94680] tracking-wide">
                      View Collection
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#FFE4EF] flex items-center justify-center group-hover:bg-[#D94680] transition-all duration-300">
                      <span className="text-[#D94680] group-hover:text-white text-lg leading-none">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY STATS ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#D94680] uppercase tracking-[0.25em] text-xs font-semibold">
              Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#7A284B] mt-3">
              Visual Archive Overview
            </h2>
            <p className="text-[#7C6A74] text-lg mt-4">
              A snapshot of our growing digital memory collection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Photos',             suffix: '' },
              { number: '25+',  label: 'Events Covered',     suffix: '' },
              { number: '1+',   label: 'Year of Memories',   suffix: 'year' },
              { number: '100%', label: 'Digital Archive',    suffix: '' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-white/80 backdrop-blur-xl
                  border border-[#F6D6E6]
                  rounded-[30px]
                  p-8
                  shadow-[0_10px_35px_rgba(236,72,153,0.08)]
                  hover:shadow-[0_18px_45px_rgba(236,72,153,0.15)]
                  transition-all duration-500
                  hover:-translate-y-2
                  text-center
                "
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-[#D94680] mb-2">
                  {stat.number}
                  {stat.suffix && (
                    <span className="text-lg text-[#7A284B]">{stat.suffix}</span>
                  )}
                </div>
                <div className="text-[#7C6A74] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-r from-[#7A284B] via-[#A3376B] to-[#D94680] text-white">

        <div className="absolute top-0 left-0 w-[32rem] h-[32rem] bg-pink-300/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-rose-200/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:22px_22px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <span className="text-white/80 uppercase tracking-[0.25em] text-xs font-semibold">
            Admissions
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4"
          >
            Join Our Learning Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-white/80 text-lg"
          >
            Discover our vibrant school community through memorable moments and celebrations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/admissions"
              className="
                bg-white text-[#C2417A]
                hover:bg-[#FFF1F7]
                font-semibold
                px-10 py-4
                rounded-full
                transition-all duration-300
                shadow-[0_10px_30px_rgba(255,255,255,0.18)]
                hover:scale-105
              "
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="
                border border-white/40
                bg-white/10 backdrop-blur-xl
                px-10 py-4
                rounded-full
                hover:bg-white
                hover:text-[#C2417A]
                font-semibold
                transition-all duration-300
              "
            >
              Schedule Visit
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}