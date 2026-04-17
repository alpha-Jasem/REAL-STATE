import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

const stats = [
  { value: 26, suffix: '+', label: 'مشروع منجز', numeric: true },
  { value: 10, suffix: '', label: 'سنوات خبرة', numeric: true },
  { value: 5, suffix: '+', label: 'مدن رئيسية', numeric: true },
  { value: null, label: 'شركة مرخصة', numeric: false },
]

export default function Trust() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        sectionRef.current.querySelector('.trust-header'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      )

      // Cells: scale + fade
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.trust-cell'),
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )

      stats.forEach((stat, i) => {
        if (!stat.numeric) return
        const el = sectionRef.current.querySelector(`[data-count="${i}"]`)
        if (!el) return
        const obj = { val: 0 }
        gsap.to(obj, {
          val: stat.value,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + stat.suffix
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="bg-brand-dark py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="trust-header text-center mb-16">
          <p className="font-dm text-teal text-[10px] tracking-[0.35em] uppercase mb-3">من نحن</p>
          <h2 className="font-tajawal font-black text-4xl md:text-5xl text-white mb-4">
            أرقام تتحدث عنا
          </h2>
          <p className="font-tajawal text-white/45 max-w-md mx-auto text-sm leading-relaxed">
            شركة جودة العقارية — شركة مرخصة ومعتمدة في المملكة العربية السعودية
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-x-reverse divide-white/5">
          {stats.map((stat, i) => (
            <div key={i} className="trust-cell px-8 py-12 text-center">
              {stat.numeric ? (
                <>
                  <div
                    data-count={i}
                    className="font-dm font-bold text-5xl md:text-6xl text-teal leading-none mb-3"
                  >
                    0{stat.suffix}
                  </div>
                  <div className="font-tajawal text-white/45 text-sm">{stat.label}</div>
                </>
              ) : (
                <>
                  <div className="w-14 h-14 rounded-full border border-teal/30 flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-teal">
                      <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="font-tajawal font-bold text-xl text-white mb-1">{stat.label}</div>
                  <div className="font-tajawal text-white/40 text-xs">هيئة العقار</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
