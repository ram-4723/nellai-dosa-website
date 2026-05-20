function MenuCard({ image, title, price }) {
  return (
    <div className="group bg-[#111] rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition duration-500">

      <div className="overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
        />

      </div>

      <div className="p-6">

        <h2 className="text-3xl font-semibold">
          {title}
        </h2>

        <div className="flex items-center justify-between mt-4">

          <p className="text-orange-400 text-2xl font-bold">
            ₹{price}
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full transition duration-300">
            Order
          </button>

        </div>

      </div>

    </div>
  )
}

export default MenuCard