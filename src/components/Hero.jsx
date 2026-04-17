import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const pinRef     = useRef(null)
  const videoRef   = useRef(null)
  const fadeRef    = useRef(null)

  useLayoutEffect(() => {
    const video = videoRef.current
    const ctx   = gsap.context(() => {

      function setup() {
        video.pause()
        video.currentTime = 0

        gsap.timeline({
          scrollTrigger: {
            trigger: pinRef.current,
            pin:     true,
            scrub:   true,
            start:   'top top',
            end:     '+=1400',
          },
        })
        .to(video,       { currentTime: video.duration, ease: 'none' }, 0)
        .fromTo(fadeRef.current, { opacity: 0 }, { opacity: 1, ease: 'none' }, 0.7)
      }

      if (video.readyState >= 2) {
        setup()
      } else {
        video.addEventListener('canplay', setup, { once: true })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pinRef} style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden', background: '#111' }}>

      <video
        ref={videoRef}
        src="/hero.mp4"
        muted
        playsInline
        preload="auto"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />

      <div
        ref={fadeRef}
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/interior.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0,
        }}
      />

    </div>
  )
}
