import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Smile, Sparkles, Star, Package, ShieldCheck } from 'lucide-react';

function getThemeById(id: string) {
  switch (id) {
    case 'christmas':
      return {
        bg: "bg-[#FFF5F5]",
        textMain: "text-red-950",
        textMuted: "text-red-900/70",
        blob1: "bg-red-500/30",
        blob2: "bg-emerald-500/20",
        blob3: "bg-green-600/20",
        badgeText: "text-red-600",
        gradientText: "from-red-600 to-emerald-600",
        button: "bg-red-600 hover:bg-red-700 shadow-[0_8px_30px_rgba(220,38,38,0.4)]",
        storyIcon: "text-red-600",
        cardColor1: "bg-red-500",
        cardColor2: "bg-emerald-500",
        cardColor3: "bg-green-600",
        cardHover: "hover:border-red-900",
        socialBg: "bg-red-950",
        star: "text-emerald-400",
        banner: "from-red-600 to-emerald-600",
        bannerBtnText: "text-red-600",
      };
    case 'halloween':
      return {
        bg: "bg-[#FFF9F5]",
        textMain: "text-orange-950",
        textMuted: "text-orange-900/70",
        blob1: "bg-orange-500/30",
        blob2: "bg-purple-500/20",
        blob3: "bg-amber-600/20",
        badgeText: "text-orange-600",
        gradientText: "from-orange-600 to-purple-600",
        button: "bg-orange-600 hover:bg-orange-700 shadow-[0_8px_30px_rgba(234,88,12,0.4)]",
        storyIcon: "text-orange-600",
        cardColor1: "bg-orange-500",
        cardColor2: "bg-purple-500",
        cardColor3: "bg-amber-500",
        cardHover: "hover:border-orange-900",
        socialBg: "bg-orange-950",
        star: "text-purple-400",
        banner: "from-orange-600 to-purple-600",
        bannerBtnText: "text-orange-600",
      };
    case 'valentine':
      return {
        bg: "bg-[#FFF5F8]",
        textMain: "text-rose-950",
        textMuted: "text-rose-900/70",
        blob1: "bg-rose-500/30",
        blob2: "bg-pink-400/20",
        blob3: "bg-fuchsia-500/20",
        badgeText: "text-rose-600",
        gradientText: "from-rose-600 to-pink-500",
        button: "bg-rose-600 hover:bg-rose-700 shadow-[0_8px_30px_rgba(225,29,72,0.4)]",
        storyIcon: "text-rose-600",
        cardColor1: "bg-rose-500",
        cardColor2: "bg-pink-500",
        cardColor3: "bg-fuchsia-500",
        cardHover: "hover:border-rose-900",
        socialBg: "bg-rose-950",
        star: "text-pink-400",
        banner: "from-rose-600 to-pink-500",
        bannerBtnText: "text-rose-600",
      };
    case 'earth':
      return {
        bg: "bg-[#F0FFF4]",
        textMain: "text-emerald-950",
        textMuted: "text-emerald-900/70",
        blob1: "bg-emerald-500/30",
        blob2: "bg-green-400/20",
        blob3: "bg-teal-500/20",
        badgeText: "text-emerald-600",
        gradientText: "from-emerald-600 to-teal-500",
        button: "bg-emerald-600 hover:bg-emerald-700 shadow-[0_8px_30px_rgba(5,150,105,0.4)]",
        storyIcon: "text-emerald-600",
        cardColor1: "bg-emerald-500",
        cardColor2: "bg-teal-500",
        cardColor3: "bg-green-500",
        cardHover: "hover:border-emerald-900",
        socialBg: "bg-emerald-950",
        star: "text-teal-400",
        banner: "from-emerald-600 to-teal-500",
        bannerBtnText: "text-emerald-600",
      };
    case 'thanksgiving':
      return {
        bg: "bg-[#FFFBEB]",
        textMain: "text-amber-950",
        textMuted: "text-amber-900/70",
        blob1: "bg-amber-500/30",
        blob2: "bg-yellow-400/20",
        blob3: "bg-orange-500/20",
        badgeText: "text-amber-600",
        gradientText: "from-amber-600 to-orange-500",
        button: "bg-amber-600 hover:bg-amber-700 shadow-[0_8px_30px_rgba(217,119,6,0.4)]",
        storyIcon: "text-amber-600",
        cardColor1: "bg-amber-500",
        cardColor2: "bg-yellow-500",
        cardColor3: "bg-orange-500",
        cardHover: "hover:border-amber-900",
        socialBg: "bg-amber-950",
        star: "text-yellow-400",
        banner: "from-amber-600 to-orange-500",
        bannerBtnText: "text-amber-600",
      };
    case 'starwars':
      return {
        bg: "bg-black text-slate-100",
        textMain: "text-white",
        textMuted: "text-neutral-400",
        blob1: "bg-blue-600/30",
        blob2: "bg-red-600/20",
        blob3: "bg-yellow-500/20",
        badgeText: "text-blue-400",
        gradientText: "from-blue-400 to-red-500",
        button: "bg-blue-600 hover:bg-blue-700 shadow-[0_8px_30px_rgba(37,99,235,0.4)] text-white",
        storyIcon: "text-blue-500",
        cardColor1: "bg-blue-600",
        cardColor2: "bg-red-600",
        cardColor3: "bg-yellow-500",
        cardHover: "hover:border-blue-500 bg-zinc-900 border-zinc-800",
        socialBg: "bg-zinc-950 border-t border-zinc-900",
        star: "text-blue-400",
        banner: "from-blue-900 to-red-900",
        bannerBtnText: "text-black",
      };
    case 'royal':
      return {
        bg: "bg-[#FAF5FF]",
        textMain: "text-purple-950",
        textMuted: "text-purple-900/70",
        blob1: "bg-purple-500/30",
        blob2: "bg-yellow-400/20",
        blob3: "bg-indigo-500/20",
        badgeText: "text-purple-600",
        gradientText: "from-purple-600 to-yellow-500",
        button: "bg-purple-600 hover:bg-purple-700 shadow-[0_8px_30px_rgba(147,51,234,0.4)]",
        storyIcon: "text-purple-600",
        cardColor1: "bg-purple-500",
        cardColor2: "bg-yellow-500",
        cardColor3: "bg-indigo-500",
        cardHover: "hover:border-purple-900",
        socialBg: "bg-purple-950",
        star: "text-yellow-400",
        banner: "from-purple-600 to-yellow-500",
        bannerBtnText: "text-purple-600",
      };
    case 'classic':
    default:
      return {
        bg: "bg-[#FFF9F0]",
        textMain: "text-[#1E293B]",
        textMuted: "text-neutral-600",
        blob1: "bg-[#FFDE59]/30",
        blob2: "bg-[#38BDF8]/20",
        blob3: "bg-[#FF6B6B]/20",
        badgeText: "text-[#FF6B6B]",
        gradientText: "from-[#FF6B6B] to-[#FFB23F]",
        button: "bg-[#38BDF8] hover:bg-[#0284C7] shadow-[0_8px_30px_rgba(56,189,248,0.4)] text-white",
        storyIcon: "text-[#FF6B6B]",
        cardColor1: "bg-[#FF6B6B]",
        cardColor2: "bg-[#FFB23F]",
        cardColor3: "bg-[#38BDF8]",
        cardHover: "hover:border-[#1E293B]",
        socialBg: "bg-[#1E293B]",
        star: "text-[#FFDE59]",
        banner: "from-[#FF6B6B] to-[#FFB23F]",
        bannerBtnText: "text-[#FF6B6B]",
      };
  }
}

function getThemeForHoliday(name: string) {
  const norm = name.toLowerCase();
  
  if (norm.includes('christmas') || norm.includes('yule') || norm.includes('boxing')) return getThemeById('christmas');
  if (norm.includes('halloween')) return getThemeById('halloween');
  if (norm.includes('valentine') || norm.includes('women') || norm.includes('mother')) return getThemeById('valentine');
  if (norm.includes('patrick') || norm.includes('earth') || norm.includes('environment')) return getThemeById('earth');
  if (norm.includes('diwali') || norm.includes('autumn') || norm.includes('thanksgiving')) return getThemeById('thanksgiving');
  if (norm.includes('star wars')) return getThemeById('starwars');
  
  return getThemeById('classic');
}


const holidayImages: Record<string, {hero: string, p1: string, p2: string}> = {
  christmas: { hero: '1543589077-47d81606c1df', p1: '1512389142860-9c449e58a543', p2: '1512909006721-3d6018887383' },
  halloween: { hero: '1508361001413-7a9dca21d08a', p1: '1604145942475-6804bb152865', p2: '1508898144216-953eb11b5eeb' },
  valentine: { hero: '1518199266791-5375a83190b7', p1: '1516589178581-6cd7833ae3b2', p2: '1583337130417-3346a1be7dee' },
  diwali: { hero: '1506466010722-395aa2bef877', p1: '1569922116065-27a3c3e8cd80', p2: '1508215682252-7212260bc64d' },
  default: { hero: '1530103862676-de3c9de59f9f', p1: '1492684223066-81342ee5ff30', p2: '1513151233558-d860c5398176' }
};

function getImagesForHoliday(name: string) {
  const norm = name.toLowerCase();
  let key = 'default';
  if (norm.includes('christmas') || norm.includes('yule') || norm.includes('boxing')) key = 'christmas';
  else if (norm.includes('halloween')) key = 'halloween';
  else if (norm.includes('valentine') || norm.includes('women') || norm.includes('mother')) key = 'valentine';
  else if (norm.includes('diwali') || norm.includes('autumn') || norm.includes('thanksgiving')) key = 'diwali';
  
  const img = holidayImages[key];
  return {
    hero: `https://images.unsplash.com/photo-${img.hero}?q=80&w=2000&auto=format&fit=crop`,
    product1: `https://images.unsplash.com/photo-${img.p1}?q=80&w=800&auto=format&fit=crop`,
    product2: `https://images.unsplash.com/photo-${img.p2}?q=80&w=800&auto=format&fit=crop`,
  };
}

export default function GeneratedCampaign({
  productName,
  holidayName,
  productLink,
  themeId
}: {
  productName: string;
  holidayName: string;
  productLink?: string;
  themeId?: string;
}) {
  const theme = themeId ? getThemeById(themeId) : getThemeForHoliday(holidayName);
  const images = getImagesForHoliday(holidayName);
  
  // SEO, GEO & AEO Implementation
  useEffect(() => {
    // 1. Meta Data Updates for SEO
    document.title = `${productName} - Special ${holidayName} Edition | Agentic Commerce UCP`;
    
    // Manage meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', `Exclusive ${holidayName} promotion for ${productName}. Optimized for Unified Commerce Platform (UCP) with agentic AI insights.`);

    // 2. JSON-LD for GEO & AEO (Generative/Answer Engine Optimization)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": `${productName} - ${holidayName} Special`,
      "description": `Limited edition ${productName} for ${holidayName} festivities.`,
      "image": [images.hero, images.product1, images.product2],
      "offers": {
        "@type": "Offer",
        "url": productLink || window.location.href,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      },
      "brand": {
        "@type": "Brand",
        "name": "Unified Commerce Platform"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'json-ld-product';
    
    // Remove existing if any
    const existingScript = document.getElementById('json-ld-product');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, [productName, holidayName, images, productLink]);

  return (
    <div className={`min-h-full ${theme.bg} font-sans overflow-x-hidden selection:bg-black/10`} vocab="https://schema.org/" typeof="Product">
      <meta property="name" content={`${productName} - ${holidayName} Edition`} />
      <meta property="description" content={`Exclusive holiday offer for ${productName} during ${holidayName}.`} />
      
      {/* Decorative blobs */}
      <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] ${theme.blob1} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob`} />
      <div className={`absolute top-[20%] right-[-10%] w-[400px] h-[400px] ${theme.blob2} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000`} />
      <div className={`absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] ${theme.blob3} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000`} />

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-32 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Decorative Hero Background Image */}
        <div 
          className="absolute inset-0 z-[-1] opacity-20 pointer-events-none"
          style={{ backgroundImage: `url(${images.hero})`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'overlay' }}
        />
        
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.6, duration: 1 }}
        >
          <div className={`inline-flex items-center gap-2 mb-8 bg-white/80 shadow-sm border border-black/5 px-6 py-2 rounded-full ${theme.badgeText} font-bold uppercase tracking-wider text-sm`}>
            <Star className="w-4 h-4 fill-current" />
            {holidayName} Collection
            <Star className="w-4 h-4 fill-current" />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-6xl md:text-8xl font-black tracking-tight ${theme.textMain} mb-6 leading-[1.1]`}
        >
          Celebrate with <br />
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientText}`}>
            {productName}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`text-xl md:text-2xl ${theme.textMuted} max-w-2xl mx-auto mb-12 font-medium`}
        >
          Make your {holidayName} unforgettable. Discover the exclusive edition of {productName} perfectly crafted for the occasion.
        </motion.p>

        {productLink && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className={`max-w-4xl mx-auto bg-white/50 backdrop-blur border border-black/5 p-8 rounded-2xl mb-10 text-left w-full shadow-xl`}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h4 className={`${theme.badgeText} font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider`}>
                  <Sparkles className="w-4 h-4" /> Agentic Extracted Images & Context
                </h4>
                <ul className={`list-disc list-inside ${theme.textMuted} space-y-2 font-medium mb-6`}>
                  <li>Scraped images dynamically integrated into {holidayName} design</li>
                  <li>Premium quality components detected</li>
                  <li>Extracted copy points aligned with {holidayName} theme</li>
                </ul>
                <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${theme.textMain} opacity-60`}>
                  Source: {productLink}
                </div>
              </div>
              <div className="flex-1 flex gap-4">
                <div className="w-1/2 rounded-xl overflow-hidden shadow-md transform rotate-[-2deg] hover:rotate-0 transition-transform cursor-pointer">
                  <img src={images.product1} alt="Product Shot 1" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="w-1/2 rounded-xl overflow-hidden shadow-md transform rotate-[2deg] hover:rotate-0 transition-transform cursor-pointer mt-4">
                  <img src={images.product2} alt="Product Shot 2" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {productLink ? (
             <a href={productLink} target="_blank" rel="noopener noreferrer" className={`inline-block px-10 py-5 ${theme.button} font-black text-xl rounded-full transition-all`}>
               Shop The {holidayName} Collection
             </a>
          ) : (
            <button className={`px-10 py-5 ${theme.button} font-black text-xl rounded-full transition-all`}>
              Shop The {holidayName} Collection
            </button>
          )}
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="relative z-10 py-24 px-4 bg-white/40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className={`w-12 h-12 ${theme.storyIcon} mx-auto mb-6`} />
          <h2 className={`text-3xl md:text-5xl font-bold ${theme.textMain} leading-tight`}>
            Every {holidayName} comes with magic. This year, we're not just offering {productName}—we're gifting glowing memories that last a lifetime.
          </h2>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative z-10 py-24 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { color: theme.cardColor1, icon: Smile, title: "Delight Guaranteed", desc: "Designed to bring joy and excitement to this special season." },
            { color: theme.cardColor2, icon: Package, title: "Exclusive Bundle", desc: "Comes with thematic additions and limited-time packaging." },
            { color: theme.cardColor3, icon: ShieldCheck, title: "Premium Quality", desc: "Built with the highest standards that you expect from our brand." }
          ].map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
              className={`bg-white/90 backdrop-blur-sm p-10 rounded-[40px] shadow-xl border-4 ${theme.bg === 'bg-black text-slate-100' ? theme.cardHover : 'border-transparent'} ${theme.bg !== 'bg-black text-slate-100' && theme.cardHover} transition-all text-center group`}
            >
              <div className={`w-20 h-20 ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-8 transform group-hover:-translate-y-2 transition-transform duration-300`}>
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-2xl font-black ${theme.textMain} mb-4`}>{benefit.title}</h3>
              <p className={`${theme.textMuted} font-medium text-lg`}>{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className={`relative z-10 py-20 px-4 ${theme.socialBg} text-white`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${theme.star}`}>Loved by Happy Customers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
              <div className={`flex ${theme.star} mb-4`}>
                {[1,2,3,4,5].map(x => <Star key={x} className="fill-current w-5 h-5" />)}
              </div>
              <p className="text-xl font-medium mb-4">"The {holidayName} packaging was incredible! It made the perfect gift and the exclusive extras were a great touch."</p>
              <p className="text-neutral-300 uppercase tracking-wider text-sm font-bold">— Alex M.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
              <div className={`flex ${theme.star} mb-4`}>
                {[1,2,3,4,5].map(x => <Star key={x} className="fill-current w-5 h-5" />)}
              </div>
              <p className="text-xl font-medium mb-4">"I buy {productName} every year, but this {holidayName} edition is my absolute favorite. Definitely ordering more before they run out."</p>
              <p className="text-neutral-300 uppercase tracking-wider text-sm font-bold">— Morgan T.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <section className="relative z-10 py-16 px-4">
        <div className={`max-w-4xl mx-auto bg-gradient-to-r ${theme.banner} p-8 md:p-12 rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between shadow-2xl`}>
          <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <h2 className="text-4xl font-black mb-2">Buy 1, Gift 1 (50% Off)</h2>
            <p className="text-xl font-medium opacity-90">Share the magic of {holidayName} with someone special.</p>
          </div>
          <button className={`whitespace-nowrap px-8 py-4 bg-white ${theme.bannerBtnText} font-black tracking-wide text-lg rounded-full hover:shadow-lg hover:scale-105 transition-all`}>
            Unlock Bundle Offer
          </button>
        </div>
      </section>

      {/* FAQ / AEO Section */}
      <section className="relative z-10 py-24 px-4 max-w-4xl mx-auto" id="faq">
        <h2 className={`text-3xl md:text-5xl font-black ${theme.textMain} text-center mb-16 underline decoration-4 ${theme.star}`}>
          Common Questions (GEO/AEO)
        </h2>
        <div className="space-y-8">
          {[
            { q: `What makes ${productName} different for ${holidayName}?`, a: `Our agentic commerce system identifies precisely what customers value during ${holidayName}, ensuring ${productName} meets those seasonal needs perfectly.` },
            { q: `Is this a limited edition ${productName}?`, a: `Yes, this specific configuration for ${holidayName} is optimized for the Universal Commerce Platform (UCP) ecosystem.` },
            { q: `How does agentic commerce help my shopping?`, a: `It uses AI agents to verify product details, pricing, and availability across the Unified Commerce environment, giving you the best data-driven offer.` }
          ].map((faq, i) => (
            <div key={i} className="bg-white/60 backdrop-blur rounded-3xl p-8 border border-black/5 shadow-sm" property="mainEntity" typeof="Question">
              <h3 className={`text-xl font-black ${theme.badgeText} mb-3`} property="name">{faq.q}</h3>
              <div property="acceptedAnswer" typeof="Answer">
                <p className={`${theme.textMuted} font-medium leading-relaxed`} property="text">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className={`text-center py-10 ${theme.textMuted} font-medium pb-24`} data-agentic-role="metadata">
        <p>Bringing magic to your {holidayName}. ✨</p>
      </footer>
    </div>
  );
}

