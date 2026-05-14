import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import Card from '../components/Card'
import { siteData } from '../data/site'

const { admissionSteps, programs, school } = siteData


export default function Admissions() {

  return (
    <div className="min-h-screen bg-primary-50">
      <Helmet>
        <title>Admissions - Brindavan School | State Board Admissions 2026</title>
        <meta name="description" content="Apply for admission to Brindavan School, the leading State Board school in Palamaner. Admissions open for 2026-27 with modern facilities and holistic education." />
      </Helmet>
      <PageHero 
        pageKey="admissions"
        title="Join Brindavan School" 
        subtitle="Admissions" 
        image="/images/gallery/Infrastructure/1.jpg"
        breadcrumbs="Home / Admissions"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="absolute -mt-16 right-6 z-30">
          <Link
            to="/admission-form"
            className="inline-flex items-center gap-2 
            bg-gradient-to-r from-primary-700 to-primary-900
            text-white px-6 py-4 rounded-full font-semibold
            shadow-xl hover:scale-105 transition-all duration-300"
          >
            Apply Now →
          </Link>
        </div>
      </div>

      {/* Process */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="section-subheading">How to Apply</p>
            <h2 className="section-heading">Simple 4-Step Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, i) => (
              <Card key={step.step} delay={i * 0.1} className="p-6 relative overflow-visible">
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-to-r from-primary-700 to-primary-900 text-white flex items-center justify-center font-display font-bold shadow-md">
                  {step.step}
                </div>
                <div className="pt-6">
                  <h3 className="font-display font-bold text-lg text-charcoal-900 mb-2">{step.title}</h3>
                  <p className="font-body text-charcoal-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 text-primary-300 text-xl z-10">→</div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Eligibility */}
      <Section className="bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-subheading">Who Can Apply</p>
            <h2 className="section-heading">Eligibility Criteria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-5 shadow-md border border-gold-100 flex gap-4 items-start"
              >
                <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${prog.color} flex items-center justify-center text-white font-display font-bold text-sm`}>
                  {i + 1}
                </div>
                <div>
                  <div className="font-display font-semibold text-charcoal-900 mb-0.5">{prog.level}</div>
                  <div className="text-xs text-gold-600 font-body font-medium mb-1">{prog.age}</div>
                  <div className="text-xs text-charcoal-600 font-body">
                    Age proof, previous school records, parent ID required at time of registration.
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl p-6 shadow-md border border-gold-100">
            <h4 className="font-display font-bold text-charcoal-900 mb-3">Documents Required</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {[
                'Birth Certificate', "Child's Aadhaar Card", 'Previous Academic Records',
                'Transfer Certificate', 'Parent/Guardian ID Proof', 'Passport Size Photographs (4)',
                'Residential Address Proof', 'Medical Fitness Certificate', 'Caste Certificate (if applicable)',
              ].map(doc => (
                <li key={doc} className="flex items-center gap-2 font-body text-sm text-charcoal-600">
                  <span className="text-gold-500">✓</span> {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { title: 'Trusted by Parents', value: '4.9/5', detail: 'Google review rating for school and admissions support' },
              { title: 'Rapid Response', value: '24 hrs', detail: 'Admission enquiries are answered quickly by our team' },
              { title: 'Holistic Focus', value: 'Values + Academics', detail: 'Balanced education with discipline, sports, and extracurricular learning' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-gold-200 bg-white p-8 shadow-md">
                <h3 className="text-3xl font-display font-bold text-charcoal-900 mb-3">{item.value}</h3>
                <p className="font-semibold text-gold-700 mb-2">{item.title}</p>
                <p className="text-charcoal-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>


      {/* Apply Now CTA */}
      <Section className="bg-white" id="apply">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          
          <p className="section-subheading">Ready to Begin?</p>
          <h2 className="section-heading mb-6">Apply Now</h2>

          <p className="text-charcoal-600 mb-8">
            Start your child's admission process by filling our official online application form.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/admission-form"
              className="inline-block bg-gradient-to-r from-primary-700 to-primary-900 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:from-primary-800 hover:to-primary-950 transition-all"
            >
              Apply Online
            </Link>
          </motion.div>

        </div>
      </Section>

      
    </div>
  )
}
