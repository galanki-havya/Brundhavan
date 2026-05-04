import Section from './Section'
import Card from './Card'
import { siteData } from '../data/site'

const { facilities } = siteData

export default function Facilities() {
  return (
    <Section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="section-subheading">Our Campus</p>
          <h2 className="section-heading">World-Class Facilities</h2>
          <p className="text-gray-500 font-body max-w-xl mx-auto">
            Every space on our campus is thoughtfully designed to inspire learning, creativity, and healthy growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, i) => (
            <Card key={f.title} delay={i * 0.08} className="p-6 group">
              <div className="w-14 h-14 bg-primary-50 group-hover:bg-primary-100 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-colors">
                {f.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal-900 mb-2">{f.title}</h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
