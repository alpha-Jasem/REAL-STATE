import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

export default function InteriorReveal() {
  const secRef  = useRef(null)
  const imgRef  = useRef(null)
  const txtRef  = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(imgRef.current,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: { trigger: secRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      )

      gsap.fromTo(
        txtRef.current.querySelectorAll('.ln'),
        { opacity: 0, y: 22, filter: 'blur(5px)' },
        {
          opacity: 1, y: 0, filter: 'blur(0px)',
          stagger: 0.25, duration: 1.4, ease: 'power2.out',
          scrollTrigger: { trigger: txtRef.current, start: 'top 75%' },
        }
      )
    }, secRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={secRef} id="interior" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>

      <div
        ref={imgRef}
        style={{
          position: 'absolute', left: 0, right: 0,
          top: '-12%', bottom: '-12%',
          backgroundImage: "url('/interior.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(15,20,24,0.92) 0%, rgba(15,20,24,0.2) 55%, transparent 100%)',
      }} />

      <div ref={txtRef} style={{ position: 'absolute', bottom: '4rem', right: '4rem', maxWidth: 460, textAlign: 'right' }}>

        <p className="ln font-dm text-teal" style={{ fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
          نشاطنا
        </p>

        <h2 className="ln font-tajawal font-black text-white" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: 1.2, marginBottom: '0.3rem' }}>
          خبرة تمتد عبر
        </h2>
        <h2 className="ln font-tajawal font-black text-white" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', lineHeight: 1.2, marginBottom: '1.8rem' }}>
          مدن المملكة
        </h2>

        <p className="ln font-tajawal" style={{ color: 'rgba(255,255,255,0.58)', lineHeight: 1.9, marginBottom: '2.2rem' }}>
          نمتلك حضوراً راسخاً في السوق العقاري السعودي بفضل سنوات من الخبرة والشراكات الاستراتيجية الموثوقة
        </p>

        <div className="ln" style={{ display: 'flex', gap: '2rem', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
          {[
            { n: '+26', l: 'مشروع منجز' },
            { n: '10',  l: 'سنوات خبرة' },
            { n: '+5',  l: 'مدن رئيسية' },
          ].map((s, i, arr) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="font-dm font-bold text-teal" style={{ fontSize: '1.9rem', lineHeight: 1 }}>{s.n}</div>
                <div className="font-tajawal" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', marginTop: 4 }}>{s.l}</div>
              </div>
              {i < arr.length - 1 && <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,0.1)' }} />}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
