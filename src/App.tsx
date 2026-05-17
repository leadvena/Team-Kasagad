/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  MessageCircle, 
  CheckCircle2,
  Quote,
  Paintbrush,
  Droplets,
  Hammer,
  LayoutGrid,
  Wrench,
  Construction,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    id: 'skimcoating',
    title: 'Skimcoating',
    description: 'Perfecting wall surfaces for residential and commercial spaces.',
    icon: <Droplets className="w-8 h-8" />,
    longTitle: 'Residential & Commercial Skimcoating'
  },
  {
    id: 'painting-interior',
    title: 'Interior Painting',
    description: 'Transforming your indoor spaces with vibrant, durable colors.',
    icon: <Paintbrush className="w-8 h-8" />,
    longTitle: 'Professional Interior Painting'
  },
  {
    id: 'painting-exterior',
    title: 'Exterior Painting',
    description: 'Protecting and beautifying your home from the outside.',
    icon: <Paintbrush className="w-8 h-8" />,
    longTitle: 'Weather-Resistant Exterior Painting'
  },
  {
    id: 'tiling',
    title: 'Tiling & Flooring',
    description: 'Expert installation of tiles for kitchens, baths, and more.',
    icon: <LayoutGrid className="w-8 h-8" />,
    longTitle: 'Precision Tiling & Flooring'
  },
  {
    id: 'finishing',
    title: 'Construction Finishing',
    description: 'The final touches that make a house feel like a home.',
    icon: <CheckCircle2 className="w-8 h-8" />,
    longTitle: 'General Construction Finishing Works'
  },
  {
    id: 'renovation',
    title: 'Renovation & Repair',
    description: 'Giving old structures new life with honest craftsmanship.',
    icon: <Hammer className="w-8 h-8" />,
    longTitle: 'Full Renovation & Specialized Repair'
  }
];

const WHY_CHOOSE_US = [
  {
    title: 'Maayos na Trabaho',
    description: 'Pulido ang bawat detalye, mula umpisa hanggang turnover.',
    icon: <CheckCircle2 className="w-10 h-10" />
  },
  {
    title: 'On-Time Delivery',
    description: 'Tinutupad ang usapan sa nakatakdang panahon ng pagtatapos.',
    icon: <Clock className="w-10 h-10" />
  },
  {
    title: 'Abot-Kayang Presyo',
    description: 'Makataong singil para sa de-kalidad na serbisyo.',
    icon: <Wrench className="w-10 h-10" />
  },
  {
    title: 'Matapat na Pangkat',
    description: 'Mga manggagawang mapagkakatiwalaan sa loob ng inyong tahanan.',
    icon: <Construction className="w-10 h-10" />
  }
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Free Ocular / Site Visit',
    description: 'Pupuntahan namin ang inyong lokasyon para makita ang aktwal na gagawin.'
  },
  {
    number: '02',
    title: 'Quotation & Agreement',
    description: 'Magbibigay kami ng malinaw na breakdown ng gastos at timeline.'
  },
  {
    number: '03',
    title: 'We Start the Work',
    description: 'Dire-diretsong trabaho na may regular na update para sa inyo.'
  },
  {
    number: '04',
    title: 'Final Inspection & Turnover',
    description: 'Checking ng bawat sulok bago pormal na ibigay ang malinis na proyekto.'
  }
];

const PORTFOLIO_IMAGES = [
  { id: 1, category: 'Interior', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400&h=300' },
  { id: 2, category: 'Painting', url: 'https://images.unsplash.com/photo-1589939705384-5185138a0470?auto=format&fit=crop&q=80&w=402&h=302' },
  { id: 3, category: 'Skimcoating', url: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=404&h=304' },
  { id: 4, category: 'Renovation', url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=406&h=306' },
  { id: 5, category: 'Tiling', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=408&h=308' },
  { id: 6, category: 'Construction', url: 'https://images.unsplash.com/photo-1541888941259-7997a58d4a97?auto=format&fit=crop&q=80&w=410&h=310' }
];

const TESTIMONIALS = [
  {
    name: 'Ate Mariz',
    location: 'Iloilo',
    quote: 'Sobrang linis gumawa ng Team Kasagad. Ang ganda ng pagka-skimcoat ng kwarto namin, parang salamin na sa kakinisan.'
  },
  {
    name: 'Kuya Jojo',
    location: 'Cavite',
    quote: 'Hindi sila yung tipo na basta-basta lang. Detail-oriented talaga. Sulit bawat piso na binayad ko sa kanila.'
  },
  {
    name: 'Maam Elena',
    location: 'Quezon City',
    quote: 'On-time sila lagi at ang bait ng mga tao. Tiwala talaga ako na iwan ang bahay sa kanila habang may inaasikaso ako.'
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavLinks = () => (
    <>
      <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-orange transition-colors">Services</a>
      <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-orange transition-colors">Why Us</a>
      <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-orange transition-colors">Portfolio</a>
      <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-brand-orange text-white px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all">Get Quote</a>
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-navy shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-orange rounded flex items-center justify-center">
              <Construction className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl leading-none">TEAM KASAGAD</span>
              <span className="text-brand-orange text-[10px] font-bold tracking-widest uppercase">Builders</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-white font-medium">
            <NavLinks />
          </div>

          <button onClick={toggleMenu} className="md:hidden text-white p-2">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-brand-navy border-t border-white/10 p-6 flex flex-col gap-6 text-white font-medium items-center md:hidden shadow-xl"
            >
              <NavLinks />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop" 
            alt="Team Kasagad Builders Construction Site"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-navy/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/20 via-transparent to-brand-navy"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-brand-orange font-bold tracking-widest uppercase mb-4 block">Hindi perpekto, pero laging pulido.</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Team Kasagad Builders
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              Skimcoating, Painting & Construction Finishing — Done Right, Every Time. Serving our community with integrity and craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-brand-orange text-white px-8 py-4 rounded font-bold text-lg hover:bg-opacity-90 transition-all text-center flex items-center justify-center gap-2 group"
              >
                Humingi ng Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#gallery" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded font-bold text-lg hover:bg-white/20 transition-all text-center"
              >
                Tingnan ang Aming Gawa
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Social Icons */}
        <div className="absolute right-6 bottom-10 z-10 flex flex-col gap-4">
          <a href="#" className="bg-brand-orange p-4 rounded-full text-white shadow-lg hover:scale-110 transition-transform">
            <MessageCircle size={24} />
          </a>
          <a href="#" className="bg-brand-navy p-4 rounded-full text-white shadow-lg hover:scale-110 transition-transform border border-white/10">
            <Facebook size={24} />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-2">Ang Aming Serbisyo</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy">What We Offer</h3>
            <div className="w-20 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-brand-orange font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Alamin Pa <ChevronRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-24 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-2 text-center lg:text-left">Bakit Kami?</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">Solid, Dependable, and Trustworthy</h3>
              <p className="text-gray-400 mb-10 text-center lg:text-left text-lg">
                Sa Team Kasagad, bawat pader at bawat kulay ay simbolo ng aming dedikasyon. Hindi kami nagpapanggap na perpekto, pero sinisigurado naming ang resulta ay laging pulido at ayon sa gusto ninyo.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {WHY_CHOOSE_US.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="text-brand-orange shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1589939705384-5185138a0470?auto=format&fit=crop&q=80&w=800" 
                  alt="Craftsmanship" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-brand-orange/20 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-orange p-8 rounded-xl shadow-xl max-w-xs">
                <p className="text-white font-bold text-lg italic">"Hindi perpekto, pero laging pulido."</p>
                <p className="text-white/80 text-sm mt-2 font-medium">— Sinned Abetria, Owner</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-2">Paano Itong Gumagana</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy">Our Simple Process</h3>
          </div>

          <div className="relative">
            {/* Connection line (desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-white border-2 border-brand-orange rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-2xl font-black text-brand-navy">{step.number}</span>
                  </div>
                  <h4 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h4>
                  <p className="text-gray-600 px-4">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-2">Portfolio</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-navy">Tingnan ang Aming Gawa</h3>
              <p className="text-gray-600 mt-4">Ang kalidad na ito ang hatid namin sa bawat bahay. Bawat detalye ay pinag-iisipan.</p>
            </div>
            <a href="#contact" className="text-brand-orange font-bold border-b-2 border-brand-orange pb-1 hover:text-brand-navy hover:border-brand-navy transition-all">
              Magsimula na sa inyong proyekto
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {PORTFOLIO_IMAGES.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative rounded-xl overflow-hidden shadow-md aspect-[4/3]"
              >
                <img 
                  src={img.url} 
                  alt={`${img.category} project by Team Kasagad Builders`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-brand-orange text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider shadow-lg">Before</span>
                  <span className="bg-white text-brand-navy text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider shadow-lg">After</span>
                </div>
                
                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-1">{img.category}</p>
                  <p className="text-white font-bold text-lg">Finishing Work</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-brand-navy relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Quote className="text-brand-orange w-12 h-12 mx-auto mb-6 opacity-50" />
            <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-2">Testimonials</h2>
            <h3 className="text-3xl font-bold text-white">Saloobin ng aming mga kliyente</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                <div className="flex gap-1 text-brand-orange mb-6">
                  {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.quote}"</p>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-brand-orange text-sm">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-2">Contact Us</h2>
              <h3 className="text-4xl font-bold text-brand-navy mb-6">Makisuyo na at kumuha ng quote</h3>
              <p className="text-gray-600 mb-10 text-lg">
                Handa kaming tumulong sa inyong renovation, painting, o construction project. Mag-message lang at pupuntahan namin kayo para sa ocular.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-brand-orange shrink-0">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Tumawag o Mag-text</h4>
                    <p className="text-gray-600">+63 9XX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-brand-orange shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Location</h4>
                    <p className="text-gray-600">Philippines (Serving Metro Manila & Nearby Areas)</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-brand-orange shrink-0">
                    <Clock />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Available Hours</h4>
                    <p className="text-gray-600">Mon–Sat, 7AM–6PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-brand-navy rounded-xl text-white">
                <div className="flex gap-4 items-center mb-4">
                  <div className="bg-brand-orange p-2 rounded">
                    <Facebook size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-brand-orange font-bold">Facebook Page</span>
                    <a href="#" className="font-bold hover:text-brand-orange transition-colors">Team Kasagad Builders</a>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100 shadow-xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-brand-navy">Pangalan</label>
                    <input type="text" placeholder="Full Name" className="bg-white border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-brand-navy">Contact Number</label>
                    <input type="text" placeholder="09XX XXX XXXX" className="bg-white border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-brand-navy">Location/Address</label>
                  <input type="text" placeholder="Saan po tayo?" className="w-full bg-white border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-brand-navy">Uri ng Serbisyo</label>
                  <select className="w-full bg-white border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all appearance-none cursor-pointer">
                    <option>Skimcoating</option>
                    <option>Interior Painting</option>
                    <option>Exterior Painting</option>
                    <option>Tiling & Flooring</option>
                    <option>General Finishing</option>
                    <option>Others</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-brand-navy">Maikling Paglalarawan</label>
                  <textarea rows={4} placeholder="Ano po ang aming magagawa para sa inyo?" className="w-full bg-white border border-gray-200 p-4 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all resize-none"></textarea>
                </div>

                <button className="w-full bg-brand-orange text-white font-bold py-5 rounded-lg hover:bg-opacity-90 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  Ipadala ang Request
                  <ArrowRight size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-white pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-orange rounded flex items-center justify-center">
                  <Construction className="text-white w-6 h-6" />
                </div>
                <span className="text-white font-bold text-2xl tracking-tighter uppercase">Team Kasagad</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Hindi perpekto, pero laging pulido. Providing top-tier construction finishing services across the Philippines.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-white/10 rounded flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 border border-white/10 rounded flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-brand-orange transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-brand-orange transition-colors">Our Services</a></li>
                <li><a href="#about" className="hover:text-brand-orange transition-colors">Why Choose Us</a></li>
                <li><a href="#gallery" className="hover:text-brand-orange transition-colors">Portfolio</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex gap-3">
                  <MapPin className="text-brand-orange shrink-0" size={20} />
                  <span>Serving Metro Manila, Cavite, Laguna, & Rizal</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="text-brand-orange shrink-0" size={20} />
                  <span>+63 9XX XXX XXXX</span>
                </li>
                <li className="flex gap-3">
                  <Facebook className="text-brand-orange shrink-0" size={20} />
                  <span>Team Kasagad Builders Messenger</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © 2025 Sinned Abetria. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made with pride in the 🇵🇭
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
