import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import logoImg from "../assets/images/logo.png"

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const links = [
    { href: "#home", label: "Home" },
    { href: "#menu", label: "Menu" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10 py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-16 text-white">

        {/* LOGO */}

        <a href="#home" className="group">
          <img
            src={logoImg}
            alt="Nellai Dosa Logo"
            className={`object-contain transition-all duration-500 group-hover:scale-105 ${
              scrolled
                ? "h-16 md:h-20"
                : "h-24 md:h-28"
            }`}
          />
        </a>

        {/* DESKTOP MENU */}

        <ul className="hidden md:flex items-center gap-12 text-xl font-semibold">

          {links.map((link) => (
            <li key={link.href}>

              <a
                href={link.href}
                className="relative text-white hover:text-orange-400 transition duration-300 group"
              >
                {link.label}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a>

            </li>
          ))}

          <li>

            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-400 px-6 py-3 rounded-full text-black font-semibold transition duration-300 shadow-lg hover:scale-105"
            >
              Visit Us
            </a>

          </li>

        </ul>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-black/90 backdrop-blur-xl overflow-hidden border-t border-white/10"
          >

            <ul className="flex flex-col px-8 py-6 gap-5">

              {links.map((link) => (

                <li key={link.href}>

                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-lg text-white hover:text-orange-400 transition duration-300"
                  >
                    {link.label}
                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  )
}

export default Navbar
