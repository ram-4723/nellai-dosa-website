function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-5 bg-transparent absolute top-0 text-white">
      <h1 className="text-2xl font-bold text-orange-400">
        Nellai Dosa
      </h1>

      <ul className="flex gap-8 text-lg">
        <li className="cursor-pointer hover:text-orange-400 transition duration-550">Home</li>
        <li className="cursor-pointer hover:text-orange-400 transition duration-550">Menu</li>
        <li className="cursor-pointer hover:text-orange-400 transition duration-700">About</li>
        <li className="cursor-pointer hover:text-orange-400 transition duration-700">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar