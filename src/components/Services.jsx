import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

const services = [
  {
    title: 'التسويق العقاري',
    desc: 'نوظّف أحدث الأساليب التسويقية لإيصال عقارك لأكبر عدد من المشترين المستهدفين',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'إدارة الأملاك',
    desc: 'نتولى إدارة عقاراتك بالكامل من صيانة وتحصيل إيجارات وإدارة المستأجرين باحترافية',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'البيع والشراء',
    desc: 'نرافقك في كل خطوة من البحث عن العقار المناسب حتى إتمام الصفقة بأفضل الأسعار',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'التقييم العقاري',
    desc: 'نقدم تقييمات دقيقة وموثوقة للعقارات وفق أحدث معايير السوق العقاري السعودي',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        sectionRef.current.querySelector('.services-header'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
        }
      )

      // Cards: scale + fade stagger
      const cards = cardsRef.current.querySelectorAll('.service-card')
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 82%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="bg-brand-light py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="services-header text-center mb-16">
          <p className="font-dm text-teal text-[10px] tracking-[0.35em] uppercase mb-3">ما نقدمه</p>
          <h2 className="font-tajawal font-black text-4xl md:text-5xl text-brand-dark">
            خدماتنا العقارية
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card group bg-white p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              <div className="text-teal mb-6">{s.icon}</div>
              <h3 className="font-tajawal font-bold text-lg text-brand-dark mb-3">{s.title}</h3>
              <p className="font-tajawal text-brand-dark/55 text-sm leading-relaxed">{s.desc}</p>

              {/* Teal bottom accent */}
              <div className="absolute bottom-0 right-0 left-0 h-0.5 bg-teal origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
