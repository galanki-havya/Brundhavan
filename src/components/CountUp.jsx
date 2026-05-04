import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

export default function CountUp({ to, from = 0, duration = 2, ...props }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(from)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(to)
    }
  }, [motionValue, to, isInView])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString()
      }
    })
  }, [springValue])

  return <span ref={ref} {...props} />
}