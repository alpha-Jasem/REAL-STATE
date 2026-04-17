const navLinks = [
  { label: 'الشركة', href: '#about' },
  { label: 'نشاطنا', href: '#interior' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'تواصل معنا', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-darker">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-l from-teal via-teal/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo + tagline */}
          <div>
            <img src="/logo.png" alt="جودة العقارية" className="h-12 w-auto mb-4" />
            <p className="font-tajawal text-white/40 text-sm leading-relaxed max-w-[220px]">
              شريكك الموثوق في التسويق العقاري وإدارة الأملاك
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-tajawal font-bold text-white text-sm mb-5">روابط سريعة</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-tajawal text-white/40 hover:text-teal text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-tajawal font-bold text-white text-sm mb-5">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="font-tajawal text-white/40 text-sm">
                جدة — حي البوادي — شارع قريش
              </li>
              <li>
                <a
                  href="tel:+966555776728"
                  className="font-dm text-white/40 hover:text-teal text-sm transition-colors duration-200"
                  dir="ltr"
                >
                  +966 555 776 728
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jawdahksa.com"
                  className="font-dm text-white/40 hover:text-teal text-sm transition-colors duration-200"
                  dir="ltr"
                >
                  info@jawdahksa.com
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/jwadh_jh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/40 hover:text-teal transition-colors duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="font-dm text-sm">@jwadh_jh</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-tajawal text-white/25 text-xs">
            {new Date().getFullYear()} © جميع الحقوق محفوظة — جودة العقارية
          </p>
          <p className="font-dm text-white/20 text-xs" dir="ltr">
            Jawdah Real Estate — Jeddah, KSA
          </p>
        </div>
      </div>
    </footer>
  )
}
