import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import { siteData } from '../../data/site' // Import your siteData
import { Award, Users, BookOpen, GraduationCap } from 'lucide-react'

export default function ChairmanMessage() {
  const { chairman } = siteData;

  return (
    <>
      <PageHero
        title="Chairman's Message"
        subtitle="Visionary guidance and leadership shaping our institutional future."
      />
      
      {/* Chairman Message Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-[#FDFDFD]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Chairman Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-8">
                <div className="bg-white rounded-3xl p-8 text-center border border-slate-200 shadow-xl shadow-slate-100/50">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-white shadow-xl transform transition duration-300 hover:scale-105">
                    <img
                      src={chairman.image}
                      alt={chairman.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
                    {chairman.name}
                  </h3>
                  <p className="font-body text-secondary-600 font-bold mb-4 italic">
                    {chairman.title}
                  </p>
                  
                  <div className="space-y-3 pt-6 border-t border-slate-100">
                    <div className="flex items-center justify-center gap-3">
                      <GraduationCap className="w-5 h-5 text-primary-600" />
                      <span className="text-sm font-semibold text-slate-700">{chairman.credentials}</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Award className="w-5 h-5 text-primary-600" />
                      <span className="text-sm font-semibold text-slate-700">8+ Years Excellence</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Detailed Biography & Message */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
                
                {/* Header Section */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="w-2 h-10 bg-secondary-500 rounded-full"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                    About the Chairman
                  </h2>
                </motion.div>

                {/* Split Biography Message */}
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                  {chairman.message.split('\n\n').map((para, i) => (
                    <motion.p
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } },
                      }}
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>

                {/* Final Signature */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1 },
                  }}
                  className="mt-12 pt-8 border-t border-slate-100"
                >
                  <p className="font-display text-2xl font-bold text-slate-900">{chairman.name}</p>
                  <p className="text-secondary-600 font-bold uppercase tracking-widest text-xs mt-2">
                    {chairman.title}
                  </p>
                </motion.div>
              </div>

              {/* Functional Highlights */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: BookOpen,
                    title: 'Academic Oversight',
                    value: 'Physics Expert',
                    desc: 'Specialized IIT Coaching'
                  },
                  {
                    icon: Users,
                    title: 'Leadership Roles',
                    value: 'Vice Principal',
                    desc: 'Former High School In-Charge'
                  },
                  {
                    icon: GraduationCap,
                    title: 'Educational Vision',
                    value: 'Holistic Dev.',
                    desc: 'Character & Intellect'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="bg-white rounded-xl p-6 text-center border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100">
                      <item.icon className="w-6 h-6 text-secondary-500" />
                    </div>
                    <div className="text-xl font-bold text-slate-800 mb-1">{item.value}</div>
                    <div className="text-sm font-bold text-secondary-600 mb-1">{item.title}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vision Section - Updated to Light Colors */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-100/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-100/30 blur-[100px] rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl md:text-5xl mb-8 italic text-slate-800 leading-tight"
          >
            "Cultivating both intellectual growth and personal character."
          </motion.h2>
          <div className="w-20 h-1 bg-secondary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Under the leadership of S. Chandra Sekhar, we are committed to innovative teaching methods and excellence in high-school education.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-display font-bold text-4xl text-slate-900 mb-8">
            Join the Brindavan Legacy
          </h2>
          <Link to="/admissions" className="bg-primary-700 text-white hover:bg-primary-800 px-12 py-5 rounded-full font-bold transition-all shadow-xl shadow-primary-100 inline-block">
            Start Your Child's Journey
          </Link>
        </div>
      </section>
    </>
  )
}