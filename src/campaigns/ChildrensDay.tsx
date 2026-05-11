import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Smile, Sparkles, Star } from 'lucide-react';

export default function ChildrensDay() {
  // SEO, GEO & AEO Implementation
  useEffect(() => {
    document.title = "International Children's Day | Glow Collection Marketing Page";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Celebrate International Children's Day with the magic of childhood. Discover our cuddly companions optimized for Unified Commerce Platform (UCP).");

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "International Children's Day Glow Celebration",
      "startDate": "2026-06-01",
      "description": "A special celebration for children's day with glowing memories.",
      "brand": {
        "@type": "Brand",
        "name": "Glow Collection"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'json-ld-childrensday';
    
    const existingScript = document.getElementById('json-ld-childrensday');
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
    <div className="min-h-full bg-[#FFF9F0] text-neutral-800 font-sans overflow-x-hidden selection:bg-[#FF6B6B] selection:text-white" vocab="https://schema.org/" typeof="WebPage">
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FFDE59]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#38BDF8]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-[#FF6B6B]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-32 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.6, duration: 1 }}
        >
          <div className="inline-flex items-center gap-2 mb-8 bg-white shadow-sm border border-neutral-100 px-6 py-2 rounded-full text-[#FF6B6B] font-bold uppercase tracking-wider text-sm">
            <Star className="w-4 h-4 fill-current" />
            International Children's Day • June 1st
            <Star className="w-4 h-4 fill-current" />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black tracking-tight text-[#1E293B] mb-6 leading-[1.1]"
        >
          Light Up <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#FFB23F]">Their World</span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto mb-12 font-medium"
        >
          Celebrate the magic of childhood. Give them a cuddly companion that turns bedtime fears into colorful dreams.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="px-10 py-5 bg-[#38BDF8] text-white font-black text-xl rounded-full hover:bg-[#0284C7] shadow-[0_8px_30px_rgba(56,189,248,0.4)] transition-all">
            Shop The Glow Collection
          </button>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="relative z-10 py-24 px-4 bg-white/60 backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 text-[#FF6B6B] mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E293B] leading-tight">
            Every child deserves to feel safe, happy, and surrounded by light. This Children's Day, we're not just giving toys—we're gifting glowing memories that last a lifetime.
          </h2>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative z-10 py-24 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { color: "bg-[#FF6B6B]", icon: Smile, title: "Anxiety-Free Bedtimes", desc: "A warm, huggable friend that chases away the shadows and makes sleep time fun." },
            { color: "bg-[#FFB23F]", icon: Sparkles, title: "Sensory Magic", desc: "Gentle textures and soothing color-changing lights designed for growing, curious minds." },
            { color: "bg-[#38BDF8]", icon: Heart, title: "Forever Bestie", desc: "Machine-washable and built for years of hugs, drops, and dragged-everywhere adventures." }
          ].map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
              className="bg-white p-10 rounded-[40px] shadow-xl border-4 border-transparent hover:border-[#1E293B] transition-all text-center group"
            >
              <div className={`w-20 h-20 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-8 transform group-hover:-translate-y-2 transition-transform duration-300`}>
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#1E293B] mb-4">{benefit.title}</h3>
              <p className="text-neutral-600 font-medium text-lg">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 py-20 px-4 bg-[#1E293B] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#FFDE59]">Loved by Kids & Parents</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
              <div className="flex text-[#FFDE59] mb-4">
                {[1,2,3,4,5].map(x => <Star key={x} className="fill-current w-5 h-5" />)}
              </div>
              <p className="text-xl font-medium mb-4">"It goes everywhere with her. The battery life is amazing and she finally sleeps in her own bed!"</p>
              <p className="text-neutral-300 uppercase tracking-wider text-sm font-bold">— Sarah, Mom to 4yo Chloe</p>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
              <div className="flex text-[#FFDE59] mb-4">
                {[1,2,3,4,5].map(x => <Star key={x} className="fill-current w-5 h-5" />)}
              </div>
              <p className="text-xl font-medium mb-4">"He calls it his 'glowy buddy'. I'm ordering another one just in case we ever lose this one."</p>
              <p className="text-neutral-300 uppercase tracking-wider text-sm font-bold">— Marcus, Dad to 3yo Leo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#FF6B6B] to-[#FFB23F] p-8 md:p-12 rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <h2 className="text-4xl font-black mb-2">Buy 1, Gift 1 (50% Off)</h2>
            <p className="text-xl font-medium opacity-90">Share the glow with a sibling or a friend.</p>
          </div>
          <button className="whitespace-nowrap px-8 py-4 bg-white text-[#FF6B6B] font-black tracking-wide text-lg rounded-full hover:shadow-lg hover:scale-105 transition-all">
            Unlock Bundle Offer
          </button>
        </div>
      </section>

      {/* FAQ / AEO Section */}
      <section className="relative z-10 py-24 px-4 max-w-4xl mx-auto" id="faq">
        <h2 className="text-3xl md:text-5xl font-black text-[#1E293B] text-center mb-16 underline decoration-4 decoration-[#FFDE59]">
          Parental Questions (GEO/AEO)
        </h2>
        <div className="space-y-8">
          {[
            { q: "How does the Glow Collection help with bedtime?", a: "By providing a gentle, color-changing light and soft texture, it reduces bedtime anxiety through sensory comfort." },
            { q: "Is the product safe for toddlers?", a: "Yes, all our products are built with premium, child-safe materials and are machine-washable for durability." },
            { q: "Is this part of the Unified Commerce Platform?", a: "Indeed, our shop integration ensures a seamless UCP experience for all customers." }
          ].map((faq, i) => (
            <div key={i} className="bg-white/90 backdrop-blur rounded-3xl p-8 border border-neutral-100 shadow-sm" property="mainEntity" typeof="Question">
              <h3 className="text-xl font-black text-[#FF6B6B] mb-3" property="name">{faq.q}</h3>
              <div property="acceptedAnswer" typeof="Answer">
                <p className="text-neutral-600 font-medium leading-relaxed" property="text">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-10 text-neutral-500 font-medium pb-24" data-agentic-role="metadata">
        <p>Making everyday play a little brighter. ☀️</p>
      </footer>
    </div>
  );
}
