import { motion } from "framer-motion"

function MenuCard({ image, title, price }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1a1310] to-[#0c0907] border border-white/5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] hover:border-orange-500/30 hover:shadow-[0_30px_80px_-20px_rgba(255,122,26,0.25)] transition-all duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-72">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-[10px] uppercase tracking-[2px] text-orange-300">
          Fresh
        </div>
      </div>

      {/* Body */}
      <div className="p-7 relative">
        <h3 className="font-display text-2xl md:text-[26px] font-semibold text-white">
          {title}
        </h3>

        <div className="mt-3 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-orange-500/40 to-transparent" />
        </div>

        <div className="flex items-center justify-between mt-5">
          <p className="text-gradient-warm text-3xl font-bold font-display">
            ₹{price}
          </p>

          <button className="relative overflow-hidden px-5 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/40 text-orange-300 text-xs uppercase tracking-[2px] font-semibold hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-300">
            Order
          </button>
        </div>
      </div>

      {/* Glow halo on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(600px circle at 50% 0%, rgba(255,122,26,0.12), transparent 40%)" }} />
    </motion.div>
  )
}

export default MenuCard
