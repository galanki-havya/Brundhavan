import { motion } from 'framer-motion';
import { siteData } from '../data/site';
import { Quote } from 'lucide-react';

export default function ManagementMessage() {
  // Destructure Correspondent from siteData
  const { Correspondent } = siteData;
  const fallbackPhoto = '/images/gallery/founder.png';

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 hidden lg:block" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-secondary-100/30 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: IMAGE SECTION */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-primary-100 rounded-2xl -z-10 translate-x-2 translate-y-2" />
              
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 bg-slate-200">
                <img
                  src={Correspondent.image || fallbackPhoto}
                  alt={Correspondent.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-6 -right-6 bg-primary-700 text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-secondary-400 font-bold text-xl">Est. 2025</p>
                <p className="text-xs uppercase tracking-widest opacity-80">Visionary Leadership</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: MESSAGE CONTENT */}
          <div className="lg:col-span-7 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-secondary-500" />
                <p className="uppercase tracking-[0.25em] text-secondary-600 text-xs font-bold">
                   Correspondent's Message
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-6">
                Message from Our Correspondent
              </h2>

              <div className="relative">
                <Quote className="absolute -top-4 -left-8 w-12 h-12 text-primary-50 opacity-10" />
                
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg italic">
                   "{Correspondent.message}"
                </div>
              </div>

              {/* Signature Area */}
              <motion.div 
                className="mt-12 pt-8 border-t border-slate-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <p className="font-display text-3xl text-primary-900 font-bold">
                  {Correspondent.name}
                </p>
                <p className="text-secondary-600 font-semibold tracking-wide mt-1 uppercase text-sm">
                  {Correspondent.title}
                </p>
                
                <div className="mt-8 flex flex-wrap gap-3">
                   <span className="px-4 py-2 bg-primary-50 rounded-full text-[10px] font-bold text-primary-700 uppercase tracking-wider border border-primary-100">
                     Academic Excellence
                   </span>
                   <span className="px-4 py-2 bg-primary-50 rounded-full text-[10px] font-bold text-primary-700 uppercase tracking-wider border border-primary-100">
                     Innovation
                   </span>
                   <span className="px-4 py-2 bg-primary-50 rounded-full text-[10px] font-bold text-primary-700 uppercase tracking-wider border border-primary-100">
                     Holistic Growth
                   </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}