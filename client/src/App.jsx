import { motion } from "framer-motion"
import { MapPin, Clock, Phone, ArrowRight, MessageCircle } from "lucide-react"
import Navbar from "./components/Navbar"
import MenuCard from "./components/MenuCard"
import sadadosaImg from "./assets/images/sadadosa.png"
import idliImg from "./assets/images/idli.png"
import vadaImg from "./assets/images/vada.png"
import foodImg from "./assets/images/food.png"
import masaladosaImg from "./assets/images/masaladosa.png"
import uttappamImg from "./assets/images/uttappam.png"
import pooriImg from "./assets/images/poori.png"
import dalriceImg from "./assets/images/dalrice.png"
import pongalImg from "./assets/images/pongal.png"
import coffeeImg from "./assets/images/coffee.png"
import gheedosaImg from "./assets/images/gheedosa.png"
import ravadosaImg from "./assets/images/ravadosa.png"
import pulaoImg from "./assets/images/pulao.png"
import sadauttappamImg from "./assets/images/sadauttappam.png"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
}

function SectionHeading({ kicker, title, subtitle, light = false }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="text-center mb-20 max-w-3xl mx-auto"
    >
      <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-5">
        <span className="h-px w-10 bg-orange-400/60" />
        <p className="text-orange-400 uppercase tracking-[5px] text-xs font-semibold">
          {kicker}
        </p>
        <span className="h-px w-10 bg-orange-400/60" />
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className={`font-display text-5xl md:text-6xl font-bold leading-tight ${
          light ? "text-white" : "text-white"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="text-gray-400 mt-6 text-lg leading-relaxed">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

function App() {
  return (
    <div className="bg-[#0a0807] min-h-screen text-white overflow-x-hidden selection:bg-orange-500/40">
      <Navbar />

      {/* ============ HERO ============ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1974&auto=format&fit=crop')",
          }}
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807] via-transparent to-black/60" />
        {/* Warm light */}
        <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-orange-600/20 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto w-full pt-28 md:pt-0">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              <p className="text-orange-300 text-xs tracking-[4px] uppercase font-medium">
                Fresh · Authentic · Healthy
              </p>
            </motion.div>

           <motion.h1
  variants={fadeUp}
  className="font-display text-[64px] md:text-[120px] font-bold leading-[0.95] tracking-tight italic"
>
  <span className="text-orange-400">
    Nellai
  </span>

  <br />

  <span className="text-white">
    Dosa
  </span>
</motion.h1>
          

            <motion.p
              variants={fadeUp}
              className="text-base md:text-xl mt-8 text-gray-300 leading-relaxed max-w-2xl font-light"
            >
              Freshly prepared idli, dosa, and vada served every morning with
              authentic South Indian flavors in the heart of Vashi.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-12">
              <a href="#menu">
                <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-black px-8 py-4 rounded-full text-sm font-semibold tracking-[2px] uppercase transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(255,122,26,0.7)] hover:shadow-[0_15px_60px_-10px_rgba(255,122,26,0.9)] hover:-translate-y-0.5">
                  View Menu
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </a>

              <a href="#contact">
                <button className="inline-flex items-center gap-3 border border-white/20 backdrop-blur-md bg-white/5 px-8 py-4 rounded-full text-sm tracking-[2px] uppercase font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                  Visit Us
                </button>
              </a>
            </motion.div>

            {/* Hero meta */}
            <motion.div
              variants={fadeUp}
              className="mt-16 flex flex-wrap gap-8 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-orange-400" />
                Open 6:30 AM – 11:30 PM
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-orange-400" />
                Sector 19C, Vashi
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-500 text-xs uppercase tracking-[3px]"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-8 w-px bg-gradient-to-b from-orange-400 to-transparent"
          />
        </motion.div>
      </section>

      {/* ============ MENU ============ */}
      <section id="menu" className="relative px-6 md:px-16 lg:px-24 py-32 bg-[#0a0807]">
        {/* Ambient glow */}
        <div className="absolute top-32 right-0 h-[400px] w-[400px] rounded-full bg-orange-600/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <SectionHeading
            kicker="Popular Dishes"
            title="Our Specials"
            subtitle="Traditional South Indian breakfast made fresh every morning with authentic taste and quality ingredients."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <MenuCard title="Masala Dosa" price="70" image={masaladosaImg} />
            <MenuCard title="Sada dosa" price="50" image={sadadosaImg} />
            <MenuCard title="Medu Vada" price="50" image={vadaImg} />
            <MenuCard title="Onion Uttappam" price="80" image={uttappamImg} />
            <MenuCard title="Idli" price="50" image={idliImg} />
            <MenuCard title="Pongal" price="70" image={pongalImg} />
            <MenuCard title="Filter Coffee" price="20" image={coffeeImg} />
            <MenuCard title="Ghee Roast" price="80" image={gheedosaImg} />
            <MenuCard title="Poori Bhaji" price="60" image={pooriImg} />
            <MenuCard title="Rava Dosa" price="70" image={ravadosaImg} />
            <MenuCard title="Pulao" price="60" image={pulaoImg} />
            <MenuCard title="Sada Uttappam" price="60" image={sadauttappamImg} />
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section
        id="about"
        className="relative px-6 md:px-16 lg:px-24 py-32 bg-gradient-to-b from-[#0a0807] via-[#120b08] to-[#0a0807] overflow-hidden"
      >
        <div className="absolute -left-20 top-1/2 h-[400px] w-[400px] rounded-full bg-amber-700/10 blur-[140px]" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
              <img
                src={foodImg}
                alt="South Indian Food"
                className="object-cover h-[520px] w-full hover:scale-105 transition-transform duration-[1500ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 md:-right-10 glass rounded-2xl p-5 px-7 shadow-2xl"
            >
              <p className="text-gradient-warm font-display text-3xl font-bold">4.8★</p>
              <p className="text-xs text-gray-300 uppercase tracking-[2px] mt-1">Customer Rating</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-orange-400/60" />
              <p className="text-orange-400 uppercase tracking-[5px] text-xs font-semibold">
                About Us
              </p>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl font-bold leading-[1.05]"
            >
              Authentic Taste <br />
              <span className="text-gradient-warm italic">Every Morning</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-gray-400 text-lg mt-8 leading-[1.9] font-light">
              At Nellai Dosa, we serve freshly prepared South Indian breakfast made with
              authentic ingredients and traditional recipes. From crispy dosas to soft
              idlis and hot vadas, every dish is prepared fresh daily to bring healthy
              and flavorful mornings to our customers.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-10 mt-12">
              <div className="border-l border-orange-400/40 pl-5">
                <h3 className="font-display text-5xl font-bold text-gradient-warm">10+</h3>
                <p className="text-gray-400 mt-2 text-sm uppercase tracking-[2px]">
                  Years Experience
                </p>
              </div>
              <div className="border-l border-orange-400/40 pl-5">
                <h3 className="font-display text-5xl font-bold text-gradient-warm">1000+</h3>
                <p className="text-gray-400 mt-2 text-sm uppercase tracking-[2px]">
                  Happy Customers
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="relative px-6 md:px-16 lg:px-24 py-32 bg-[#0a0807]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            kicker="Contact Us"
            title="Visit Nellai Dosa"
            subtitle="Fresh South Indian breakfast served daily in Vashi"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  body: (
                    <>
                      Shop No-4, Plot No-58, Sector-19C,<br />
                      Near Satra Plaza,<br />
                      Palm Beach Road, Vashi,<br />
                      Navi Mumbai-400703, Maharashtra.
                    </>
                  ),
                },
                { icon: Clock, title: "Opening Hours", body: "6:30 AM – 11:30 PM" },
                { icon: Phone, title: "Contact", body: "+91 9819930706" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="group flex gap-5 p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-500"
                >
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-orange-500/15 border border-orange-500/30 grid place-items-center text-orange-400 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-orange-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mt-2 leading-8">{item.body}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fadeUp}>
                <a
                  href="https://www.google.com/maps/dir/19.0845385,73.0014038/South+Indian+Dosa+Plaza+Breakfast,+shop+no-4,+Palm+beach+road,+sector-19c,plot+no-58,+near+Satra+Plaza,+Vashi,+Navi+Mumbai,+Maharashtra+400703/@19.083055,72.9987217,1200m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be7c1eacd0aeb8b:0xc35cf18f4ab6a5db!2m2!1d73.0061006!2d19.081758?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-black px-8 py-4 rounded-full text-sm font-semibold tracking-[2px] uppercase transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(255,122,26,0.7)] hover:-translate-y-0.5">
                    Get Directions
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT — MAP */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden h-[500px] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] border border-white/10"
            >
              <iframe
  title="map"
  src="https://www.google.com/maps?q=South+Indian+Dosa+Plaza+Breakfast,+Palm+Beach+Road,+Vashi,+Navi+Mumbai&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0, filter: "grayscale(0.4) contrast(1.1)" }}
  allowFullScreen=""
  loading="lazy"
/>
              <div className="absolute inset-0 ring-1 ring-inset ring-orange-400/10 rounded-3xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="relative border-t border-white/5 bg-[#080605]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-2xl text-gradient-warm font-semibold">
            Nellai Dosa
          </p>
          <p className="text-gray-500 text-sm">
            © 2026 Nellai Dosa. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs uppercase tracking-[2px] text-gray-500">
            <a href="#menu" className="hover:text-orange-400 transition">Menu</a>
            <a href="#about" className="hover:text-orange-400 transition">About</a>
            <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOATING */}
      <motion.a
        href="https://wa.me/919819930706"
        target="_blank"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-4 rounded-full shadow-[0_15px_50px_-10px_rgba(16,185,129,0.7)] text-white font-semibold z-50"
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline text-sm">WhatsApp</span>
      </motion.a>
    </div>
  )
}

export default App
