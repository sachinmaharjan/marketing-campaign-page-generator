import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Flame, Star, Gift, Moon } from 'lucide-react';

export default function Diwali() {
  // SEO, GEO & AEO Implementation
  useEffect(() => {
    document.title = "Diwali Festival of Lights | Glow Collection Marketing Page";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Celebrate the Festival of Lights with the Diwali Edition Glow Collection. Optimized for Unified Commerce Platform (UCP) with agentic shopping features.");

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Diwali Edition Glow Collection",
      "description": "Rich, golden luminescence for festive comfort.",
      "brand": {
        "@type": "Brand",
        "name": "Glow Collection"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'json-ld-diwali';
    
    const existingScript = document.getElementById('json-ld-diwali');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-full bg-[#3D0C11] text-[#F3E5D8] font-serif overflow-x-hidden relative" vocab="https://schema.org/" typeof="WebPage">
      {/* Background Motifs */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5C32.7614 5 35 7.23858 35 10C35 12.7614 32.7614 15 30 15C27.2386 15 25 12.7614 25 10C25 7.23858 27.2386 5 30 5ZM30 45C32.7614 45 35 47.2386 35 50C35 52.7614 32.7614 55 30 55C27.2386 55 25 52.7614 25 50C25 47.2386 27.2386 45 30 45ZM10 25C12.7614 25 15 27.2386 15 30C15 32.7614 12.7614 35 10 35C7.23858 35 5 32.7614 5 30C5 27.2386 7.23858 25 10 25ZM50 25C52.7614 25 55 27.2386 55 30C55 32.7614 52.7614 35 50 35C47.2386 35 45 32.7614 45 30C45 27.2386 47.2386 25 50 25Z' fill='%23FFB800' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` 
      }} />

      <section className="relative z-10 pt-20 pb-24 px-4 border-b border-[#D4AF37]/20 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl"
        >
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            <p className="tracking-[0.2em] uppercase text-xs font-sans text-[#D4AF37]">A Festival of Lights Special</p>
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#FFD700] drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            A Glow For <br/> <i className="font-light text-[#F3E5D8]">Every Generation</i>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#D4AF37]/80 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            As you light the diyas to welcome prosperity, let the Glow Worm bring comfort and wonder to the youngest members of your family.
          </p>

          <button className="px-12 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] text-sm uppercase tracking-widest hover:text-[#3D0C11] font-sans font-bold transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            Discover the Diwali Edition
          </button>
        </motion.div>
      </section>

      <section className="relative z-10 py-24 px-4 bg-[#2A080C]">
        <div className="max-w-4xl mx-auto text-center">
          <Flame className="w-12 h-12 text-[#FFD700] mx-auto mb-8 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-3xl leading-relaxed font-light text-[#F3E5D8] italic"
          >
            "The truest light during Diwali isn't just from the oil lamps; it's the radiant joy and safety a child feels as they drift into dreams."
          </motion.p>
        </div>
      </section>

      <section className="relative z-10 py-24 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: Star, title: "Auspicious Glow", desc: "Warm, golden luminescence that matches the rich ambiance of your festival decor." },
            { icon: Gift, title: "The Perfect Offering", desc: "A thoughtful, meaningful gift that bestows comfort well beyond the five days of celebration." },
            { icon: Moon, title: "Tranquil Nights", desc: "When the fireworks end, the gentle glow remains to ensure peaceful, uninterrupted rest." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="px-8 py-12 text-center border border-[#D4AF37]/20 bg-[#3D0C11]/50 backdrop-blur-sm relative group"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3D0C11] px-4">
                <feature.icon className="w-8 h-8 text-[#D4AF37] group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#FFD700] tracking-wide">{feature.title}</h3>
              <p className="text-[#F3E5D8]/70 leading-relaxed text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-20 px-4 flex justify-center">
        <div className="max-w-3xl w-full p-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent">
          <div className="bg-[#2A080C] p-12 text-center">
            <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Complimentary Festive Wrapping</h2>
            <p className="text-[#F3E5D8] mb-8 font-light text-lg">Every Glow Worm ordered during the Diwali season arrives arriving in premium gold-leaf styled unboxing experience with a personalized card.</p>
            <button className="px-8 py-3 bg-[#D4AF37] text-[#2A080C] font-sans font-bold text-sm tracking-wider uppercase hover:bg-[#FFD700] transition-colors">
              Claim Festive Offer
            </button>
          </div>
        </div>
      </section>

      {/* FAQ / AEO Section */}
      <section className="relative z-10 py-24 px-4 max-w-4xl mx-auto" id="faq">
        <h2 className="text-3xl md:text-5xl font-bold text-[#FFD700] text-center mb-16 tracking-wide drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
          Festive Inquiries (GEO/AEO)
        </h2>
        <div className="space-y-8">
          {[
            { q: "What defines the Diwali Edition?", a: "It features a warm, golden luminescence designed to complement the traditional aesthetic of the festival of lights." },
            { q: "Is the gift wrapping suitable for prospertiy wishes?", a: "Yes, our gold-leaf styled unboxing experience is crafted to symbolize prosperity and joy for the season." },
            { q: "How does AEO improve the shopping experience?", a: "By providing direct answers to specific festive needs within the Unified Commerce ecosystem." }
          ].map((faq, i) => (
            <div key={i} className="bg-[#2A080C] p-8 border border-[#D4AF37]/20 shadow-sm" property="mainEntity" typeof="Question">
              <h3 className="text-xl font-bold text-[#FFD700] mb-3" property="name">{faq.q}</h3>
              <div property="acceptedAnswer" typeof="Answer">
                <p className="text-[#F3E5D8]/80 font-light leading-relaxed" property="text">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-12 border-t border-[#D4AF37]/10 text-center text-[#D4AF37]/60 text-sm font-sans uppercase tracking-[0.15em] mb-20" data-agentic-role="metadata">
        <p>Wishing you a luminous and joyous Diwali.</p>
      </footer>
    </div>
  );
}
