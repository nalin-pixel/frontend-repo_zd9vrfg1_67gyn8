import { useMemo } from 'react'
import { Phone, Mail, MapPin, Droplets, Truck, MessageCircle } from 'lucide-react'

const PHONE_NUMBER = '7972425727'
const WHATSAPP_NUMBER = '917972425727' // with country code for wa.me
const EMAIL = 'amar.gaykwad@gmail.com'

function Stat({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3 text-white/90">
      <div className="p-2 rounded-lg bg-white/15 backdrop-blur">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}

function ServiceCard({ size, description }) {
  const whatsappLink = useMemo(() => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello DAG Water Supply Service, I want to request a ${size} water tanker.`
  )}`,[size])

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm hover:shadow-md transition-all">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="p-6 relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
            <Droplets className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold tracking-wide text-blue-600">Bulk Supply</span>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900">{size}</h3>
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">{description}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition">
            <MessageCircle className="w-4 h-4" /> Book on WhatsApp
          </a>
          <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-200 text-blue-700 text-sm font-semibold hover:bg-blue-50 transition">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      </div>
    </div>
  )
}

function App() {
  const heroImages = [
    'https://images.unsplash.com/photo-1541542684-4a9b5e28eec1?q=80&w=1600&auto=format&fit=crop', // water truck
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop', // water drops
    'https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600&auto=format&fit=crop', // logistics truck
  ]

  const whatsappCta = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello DAG Water Supply Service, I want to request a water supply booking.')}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-gray-800">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-extrabold">D</div>
            <div>
              <p className="text-base leading-tight font-extrabold text-gray-900">DAG Water Supply Service</p>
              <p className="text-[11px] text-gray-500">Nayara Depot, Dahegaon Miskin</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#coverage" className="hover:text-blue-600">Coverage</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={whatsappCta} target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition">
              <MessageCircle className="w-4 h-4" /> Book Now
            </a>
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-200 text-blue-700 text-sm font-semibold hover:bg-blue-50 transition">
              <Phone className="w-4 h-4" /> {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-cyan-100/60 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
              <Truck className="w-4 h-4" /> Bulk Water Delivery
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Pure Water, Reliable Supply – Anytime, Anywhere.
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-xl">
              Clean and dependable bulk water delivery for homes, industries, and agriculture. On-time supply with high purity standards from our facility at Nayara Depot, Dahegaon Miskin.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsappCta} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                <MessageCircle className="w-5 h-5" /> Request Water Supply
              </a>
              <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-blue-700 font-semibold border border-blue-200 hover:bg-blue-50 transition">
                <Droplets className="w-5 h-5" /> View Services
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Stat icon={Droplets} label="High Purity Water" />
              <Stat icon={Truck} label="On-time Delivery" />
              <Stat icon={MapPin} label="Nayara Depot & Nearby" />
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {heroImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="Water supply visual"
                  className={`h-28 sm:h-36 md:h-44 lg:h-52 w-full object-cover rounded-2xl shadow ${idx % 3 === 1 ? 'translate-y-4' : ''}`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-100 to-cyan-100 -z-10" />
              <img src="https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGVhbiUyMHdhdGVyfGVufDB8MHx8fDE3NjI4NzEwODZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Clean water" className="rounded-3xl shadow-lg" loading="lazy" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">About Us</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                DAG Water Supply Service is led by Amard Gaikwad and operates from Nayara Depot, Dahegaon Miskin. We specialize in clean, reliable, and timely delivery of bulk water for residential, industrial, and agricultural needs.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> High purity standards and disciplined operations</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Professional team and well-maintained tankers</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-600" /> Trusted by homes, communities, and industries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Services Offered</h2>
            <p className="mt-3 text-gray-600">Flexible supply options to match your requirement size.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard size="5,000 Liters" description="Fresh water ideal for residential use, small communities, and emergency supply." />
            <ServiceCard size="10,000 Liters" description="Reliable supply suitable for industrial operations and community needs." />
            <ServiceCard size="24,000 Liters" description="Large-scale delivery for farms, construction sites, and bulk requirements." />
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section id="coverage" className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Coverage Area</h2>
              <p className="mt-4 text-gray-600">Based at Nayara Depot, Dahegaon Miskin, serving nearby regions with dependable delivery scheduling.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-blue-100 bg-white">
                  <div className="flex items-center gap-2 text-blue-700 font-semibold"><MapPin className="w-4 h-4" /> Primary Location</div>
                  <p className="mt-2 text-sm text-gray-600">Nayara Depot, Dahegaon Miskin</p>
                </div>
                <div className="p-4 rounded-xl border border-blue-100 bg-white">
                  <div className="flex items-center gap-2 text-blue-700 font-semibold"><Truck className="w-4 h-4" /> Nearby Service Areas</div>
                  <p className="mt-2 text-sm text-gray-600">Surrounding towns, industrial estates, agricultural zones, and community projects.</p>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                  <Phone className="w-4 h-4" /> Call to Schedule
                </a>
                <a href={whatsappCta} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-200 text-blue-700 font-semibold hover:bg-blue-50 transition">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-sm bg-white">
              <iframe
                title="Nayara Depot, Dahegaon Miskin"
                src="https://www.google.com/maps?q=Nayara+Depot,+Dahegaon+Miskin&output=embed"
                width="100%"
                height="360"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Contact</h2>
            <p className="mt-3 text-gray-600">Reach us anytime for bookings, quotes, or urgent supply requests.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <a href={`tel:${PHONE_NUMBER}`} className="p-6 rounded-2xl border border-blue-100 bg-white hover:shadow transition block">
              <div className="flex items-center gap-3 text-blue-700 font-semibold"><Phone className="w-5 h-5" /> Phone</div>
              <p className="mt-2 text-gray-700">{PHONE_NUMBER}</p>
            </a>
            <a href={`mailto:${EMAIL}`} className="p-6 rounded-2xl border border-blue-100 bg-white hover:shadow transition block">
              <div className="flex items-center gap-3 text-blue-700 font-semibold"><Mail className="w-5 h-5" /> Email</div>
              <p className="mt-2 text-gray-700">{EMAIL}</p>
            </a>
            <a href={whatsappCta} target="_blank" rel="noreferrer" className="p-6 rounded-2xl border border-green-200 bg-white hover:shadow transition block">
              <div className="flex items-center gap-3 text-green-700 font-semibold"><MessageCircle className="w-5 h-5" /> WhatsApp</div>
              <p className="mt-2 text-gray-700">Book Now on WhatsApp</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-blue-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">“Pure Water, Reliable Supply – Anytime, Anywhere.”</p>
          <div className="flex items-center gap-4 text-sm">
            <span className="inline-flex items-center gap-1 text-gray-600"><MapPin className="w-4 h-4" /> Nayara Depot, Dahegaon Miskin</span>
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-1 text-blue-700 hover:underline"><Phone className="w-4 h-4" /> {PHONE_NUMBER}</a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1 text-blue-700 hover:underline"><Mail className="w-4 h-4" /> {EMAIL}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
