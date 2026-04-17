import Navbar from './components/Navbar'
import Services from './components/Services'
import Trust from './components/Trust'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main>
        <Services />
        <Trust />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
