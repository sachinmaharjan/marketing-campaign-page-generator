import { motion } from 'motion/react';
import { Rocket, Shield, Zap, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function StarWars() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-full bg-black text-white font-sans overflow-x-hidden relative">
      {/* Starfield Background */}
      <div className="absolute inset-0 z-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-1 border border-green-500/30 rounded-full bg-green-500/10 text-green-400 font-mono text-xs uppercase tracking-[0.2em]">
            May 4th Flash Event
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 style-star-wars drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">
            May The <span className="text-green-500">Glow</span><br />
            Be With You
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light">
            Equip your little padawans with the galaxy's brightest companion. The limited edition Lightsaber Glow Worm is here.
          </p>
          <button className="px-10 py-5 bg-green-500 text-black font-bold text-lg uppercase tracking-widest rounded-sm hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-300">
            Claim Your Glow
          </button>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="relative z-10 py-20 px-4 bg-neutral-900/50 border-y border-green-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl leading-relaxed text-neutral-300 font-mono"
          >
            "In a dark room far, far away, bedtime used to be a battle. But with the power of the Glow Worm, peace has been restored to the galaxy. Its soft, guiding light brings comfort to even the bravest young adventurers."
          </motion.p>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="relative z-10 py-24 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl tracking-[0.1em] text-center uppercase font-bold mb-16 text-green-400">Jedi-Level Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Lightsaber Aura", desc: "Emits a soft, continuous neon glow that mimics the hum of a real lightsaber. Perfect for nighttime courage." },
            { icon: Shield, title: "Dark Side Defense", desc: "Constructed with ultra-soft, durable galactic fabric that keeps the monsters under the bed strictly at bay." },
            { icon: Rocket, title: "Hyperdrive Sleep", desc: "Embedded with subtle, rhythmic pulsing light sequences to ease padawans into deep hyper-sleep." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-black border border-green-500/20 p-8 rounded-lg hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all group"
            >
              <feature.icon className="w-12 h-12 text-green-500 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed font-mono text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Offer Countdown */}
      <section className="relative z-10 py-20 px-4 bg-green-950/20 shadow-[0_0_50px_rgba(34,197,94,0.1)_inset]">
        <div className="max-w-4xl mx-auto text-center border-2 border-green-500/30 p-12 rounded-2xl backdrop-blur-sm">
          <h2 className="text-4xl font-black uppercase text-white mb-6 tracking-tight">The Hyperjump Flash Sale</h2>
          <p className="text-xl text-green-400 mb-10 font-mono">Get 30% OFF + Free Intergalactic Shipping</p>
          
          <div className="flex justify-center gap-4 mb-10">
            {[ { label: 'Hours', value: hours }, { label: 'Minutes', value: minutes }, { label: 'Seconds', value: seconds }].map((time, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-black border-2 border-green-500/40 rounded-lg flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <span className="text-4xl font-mono font-bold text-green-400">{time.value.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">{time.label}</span>
              </div>
            ))}
          </div>
          
          <button className="px-12 py-4 bg-green-500 text-black font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-green-600 transition-colors">
            Transmit Code: MAYTHE4TH
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center border-t border-neutral-800">
        <div className="flex justify-center items-center gap-2 mb-6 text-green-500">
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
        </div>
        <p className="text-neutral-400 italic mb-6">"Best co-pilot for dreamland navigation." - Verified Jedi Parent</p>
        <p className="font-mono text-xs text-neutral-600 tracking-widest uppercase mb-4">Glow Worms Intergalactic HQ</p>
        <p className="font-mono text-[10px] text-neutral-700">Not officially affiliated with the Empire or the Rebellion.</p>
      </footer>
    </div>
  );
}
