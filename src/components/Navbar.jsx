import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-teal/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <img src="/logo.png" alt="جودة العقارية" className="h-11 w-auto" />

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="font-tajawal text-sm text-white/70 hover:text-teal transition-colors duration-200">
            من نحن
          </a>
          <a href="#interior" className="font-tajawal text-sm text-white/70 hover:text-teal transition-colors duration-200">
            نشاطنا
          </a>
          <a href="#services" className="font-tajawal text-sm text-white/70 hover:text-teal transition-colors duration-200">
            خدماتنا
          </a>
          <a href="#contact" className="font-tajawal text-sm text-white/70 hover:text-teal transition-colors duration-200">
            تواصل معنا
          </a>
        </div>

        <a
          href="https://wa.me/966555776728"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal hover:bg-teal-mid text-brand-dark font-tajawal font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
        >
          احجز استشارة
        </a>
      </div>
    </nav>
  )
}
