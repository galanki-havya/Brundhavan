import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Facilities from '../components/Facilities'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Section from '../components/Section'
import { siteData } from '../data/site'

const { school } = siteData

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      {/* About Preview */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=85"
                  alt="Brundavan students"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 bg-primary-600 text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-3xl font-display font-black">Est. {school.established}</div>
                <div className="text-primary-200 text-xs font-body">Trusted by Families</div>
              </div>
              <div className="absolute -top-4 -left-3 bg-gold-500 text-white rounded-2xl px-5 py-3 shadow-xl hidden md:block">
                <div className="text-2xl font-display font-black">CBSE</div>
                <div className="text-yellow-100 text-xs font-body">Affiliated</div>
              </div>
            </div>

            <div>
              <p className="section-subheading">Welcome to Brundavan</p>
              <h2 className="section-heading">A Legacy of Learning & Leadership</h2>
              <p className="font-body text-gray-600 leading-relaxed mb-4">
                {school.description}
              </p>
              <p className="font-body text-gray-600 leading-relaxed mb-8">
                With over 20 years of experience, Brundavan School has established itself as a trusted educational institution in Palamaner, Chittoor, committed to delivering quality education with a focus on academic excellence and student development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary">
                  Our Story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/academics" className="btn-outline">Explore Academics</Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Facilities />
      <Gallery />
      <Testimonials />

      {/* CTA Band */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Admissions Open – 2025–26
          </h2>
          <p className="font-body text-primary-100 mb-8 max-w-xl mx-auto">
            Secure your child's future at one of Andhra Pradesh's most respected institutions. Limited seats available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 hover:bg-primary-50 font-body font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 font-body font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Contact Admissions Office
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
