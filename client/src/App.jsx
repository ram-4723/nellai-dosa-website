import Navbar from "./components/Navbar"
import MenuCard from "./components/MenuCard"
import sadadosaImg from "./assets/images/sadadosa.png"
import idliImg from "./assets/images/idli.png"
import vadaImg from "./assets/images/vada.png"
import foodImg from "./assets/images/food.png"
import masaladosaImg from "./assets/images/masaladosa.png"
import uttappamImg from "./assets/images/uttappam.png"
function App() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">

      <Navbar />

      {/* HERO SECTION */}

      <section
        id="home"
        className="h-screen bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1974&auto=format&fit=crop')",
        }}
      >

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-10 md:px-20 max-w-4xl">

          <p className="text-orange-400 text-lg mb-4 tracking-[4px] uppercase">
            Fresh • Authentic • Healthy
          </p>

          <h1 className="text-5xl md:text-8xl font-bold leading-tight">
            Nellai <br />
            Dosa
          </h1>

          <p className="text-lg md:text-2xl mt-8 text-gray-200 leading-8 max-w-2xl">
            Freshly prepared idli, dosa, and vada served every morning with authentic South Indian flavors in the heart of Vashi.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a href="#menu">
              <button className="bg-orange-500 hover:bg-orange-400 px-8 py-4 rounded-full text-lg font-semibold transition duration-300 shadow-lg">
                View Menu
              </button>
            </a>

            <a href="#contact">
              <button className="border border-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-black transition duration-300">
                Visit Us
              </button>
            </a>

          </div>

        </div>
      </section>

      {/* MENU SECTION */}

      <section
        id="menu"
        className="px-10 md:px-20 py-32 bg-black"
      >

        <div className="text-center mb-20">

          <p className="text-orange-400 uppercase tracking-[4px] mb-3">
            Popular Dishes
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Our Specials
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Traditional South Indian breakfast made fresh every morning with authentic taste and quality ingredients.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

  <MenuCard
    title="Masala Dosa"
    price="70"
    image={masaladosaImg}
  />

  <MenuCard
    title="Sada dosa"
    price="50"
    image={sadadosaImg}
  />

  <MenuCard
    title="Medu Vada"
    price="50"
    image={vadaImg}
  />

  <MenuCard
    title="Onion Uttappam"
    price="80"
    image={uttappamImg}
  />

  <MenuCard
    title="Idli"
    price="50"
    image={idliImg}
  />

  <MenuCard
    title="Pongal"
    price="80"
    image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1974&auto=format&fit=crop"
  />

  <MenuCard
    title="Filter Coffee"
    price="30"
    image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1974&auto=format&fit=crop"
  />

  <MenuCard
    title="Ghee Roast"
    price="120"
    image="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1974&auto=format&fit=crop"
  />

  <MenuCard
    title="Mini Tiffin"
    price="140"
    image="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1974&auto=format&fit=crop"
  />

  <MenuCard
    title="Rava Dosa"
    price="110"
    image="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1974&auto=format&fit=crop"
  />

  <MenuCard
    title="Poori Bhaji"
    price="90"
    image="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1974&auto=format&fit=crop"
  />

  <MenuCard
    title="Kesari Bath"
    price="40"
    image="https://images.unsplash.com/photo-1464306076886-da185f6a9d05?q=80&w=1974&auto=format&fit=crop"
  />

</div>

      </section>

      {/* ABOUT SECTION */}

      <section
        id="about"
        className="bg-[#111] text-white px-10 md:px-20 py-32"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          <div>
            <img
              src={foodImg}
              alt="South Indian Food"
              className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
            />
          </div>

          <div>

            <p className="text-orange-400 uppercase tracking-[4px] mb-4">
              About Us
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Authentic Taste <br />
              Every Morning
            </h2>

            <p className="text-gray-400 text-lg mt-8 leading-9">
              At Nellai Dosa, we serve freshly prepared South Indian breakfast made with authentic ingredients and traditional recipes.
              From crispy dosas to soft idlis and hot vadas, every dish is prepared fresh daily to bring healthy and flavorful mornings to our customers.
            </p>

            <div className="flex gap-10 mt-10">

              <div>
                <h3 className="text-4xl font-bold text-orange-400">
                  10+
                </h3>

                <p className="text-gray-400 mt-2">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-orange-400">
                  1000+
                </h3>

                <p className="text-gray-400 mt-2">
                  Happy Customers
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section
        id="contact"
        className="bg-black text-white px-10 md:px-20 py-32"
      >

        <div className="text-center mb-20">

          <p className="text-orange-400 uppercase tracking-[4px] mb-3">
            Contact Us
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Visit Nellai Dosa
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Fresh South Indian breakfast served daily in Vashi
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT */}

          <div className="space-y-10">

            <div>
              <h3 className="text-2xl font-semibold text-orange-400">
                Address
              </h3>

              <p className="text-gray-300 mt-3 text-lg leading-8">
                Sector-19c, Plot No-58, Shop No-4, <br />
                Navi Mumbai, Near Satra Plaza,<br />
                Vashi, Palm Beach Road, Vashi,<br />
                Navi Mumbai-400703, Maharashtra
          
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-orange-400">
                Opening Hours
              </h3>

              <p className="text-gray-300 mt-3 text-lg">
                6:30 AM – 11:30 PM
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-orange-400">
                Contact
              </h3>

              <p className="text-gray-300 mt-3 text-lg">
                +91 9819930706
              </p>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition duration-300">
              Get Directions
            </button>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl overflow-hidden h-[450px] shadow-2xl">

            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.194660859855!2d72.9967!3d19.0760"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-[#111] text-center py-8 text-gray-400 border-t border-gray-800">
        © 2026 Nellai Dosa. All Rights Reserved.
      </footer>

      {/* WHATSAPP BUTTON */}

      <a
        href="https://wa.me/919819930706"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 px-5 py-4 rounded-full shadow-2xl text-white font-semibold transition duration-300 z-50"
      >
        WhatsApp
      </a>

    </div>
  )
}

export default App