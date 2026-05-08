import { motion } from 'framer-motion'

const intelligences = [
  'Linguistic',
  'Logical-Mathematical',
  'Spatial',
  'Bodily-Kinesthetic',
  'Musical',
  'Interpersonal',
  'Intrapersonal',
  'Naturalistic',
  'Emotional Intelligence',
]

export default function LogoMeaning() {
  return (
    <section className="py-20 bg-[#F7F3EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#8B5E3C]">Our Identity</p>
          <h2 className="mt-4 text-4xl font-display font-bold text-[#5C3A21]">Meaning Behind the Logo</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Every element in the Brindavan School logo tells a story of values, learning, and the future we build for each child.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#E7D3BF] bg-[#fff8f1] p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-semibold text-[#5C3A21] mb-3">Why the Logo Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                The logo reflects our commitment to balanced education: strong roots in values, modern learning, and a nurturing campus culture where every student is encouraged to shine.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E7D3BF] bg-[#fff8f1] p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-semibold text-[#5C3A21] mb-3">Core Values</h3>
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li>• Discipline with compassion</li>
                <li>• Academic rigour with creativity</li>
                <li>• Community, character, and confidence</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E7D3BF] bg-[#fff8f1] p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#5C3A21] mb-6">Nine Intelligences We Nurture</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {intelligences.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-[#E7D3BF] bg-[#fffdf9] p-4 hover:bg-white transition-all duration-300"
                >
                  <p className="font-semibold text-[#5C3A21]">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
