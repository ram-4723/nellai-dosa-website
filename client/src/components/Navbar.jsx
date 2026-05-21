import logoImg from "../assets/images/logo.png"
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md shadow-lg border-b border-white/10">

      <div className="flex items-center justify-between px-8 md:px-20 py-5 text-white">

        {/* LOGO */}

        <a href="#home">

  <img
    src={logoImg}
    alt="Nellai Dosa Logo"
    className="h-24 md:h-28 object-contain"
  />

</a>

        {/* NAV LINKS */}

        <ul className="flex gap-8 md:gap-14 text-2xl font-semibold">

          <li>
            <a
              href="#home"
              className="hover:text-orange-400 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#menu"
              className="hover:text-orange-400 transition duration-300"
            >
              Menu
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-orange-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-orange-400 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar