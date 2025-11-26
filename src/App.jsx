import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Sparkles, Activity, Layers, ArrowDown, Menu, X, Wind, Zap, Brain, Smartphone } from 'lucide-react';

/* === WABI-SABI TECH LP ===
  Design System:
  - Colors: Sumi (Black), Kinari (Off-white), Ai (Indigo), Yamabuki (Gold)
  - Fonts: Serif (Mincho) for emotion, Sans for function
  - Motion: Slow, organic, delayed
*/

const COLORS = {
  sumi: '#2B2B2B',
  usuzumi: '#888888',
  kinari: '#FCFAF2',
  ai: '#165E83',
  yamabuki: '#D4AF37', // Slightly muted gold
};

// --- Sub Components ---

const NoiseOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-multiply">
    <svg width="100%" height="100%">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // タッチデバイスの検出
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    // タッチデバイスの場合はカーソルを表示しない
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // タッチデバイスではカーソルを表示しない
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#2B2B2B] rounded-full pointer-events-none z-[60] mix-blend-exclusion hidden md:block"
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[#2B2B2B] rounded-full pointer-events-none z-[60] opacity-50 hidden md:block"
        animate={{ 
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.2 : 0.5
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />
    </>
  );
};

const FadeIn = ({ children, delay = 0, direction = 'up', className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{ duration: 1.2, delay: delay, ease: [0.16, 1, 0.3, 1] }} // Custom cubic-bezier for "delicate" feel
      className={className}
    >
      {children}
    </motion.div>
  );
};

const VerticalText = ({ children, className = "" }) => (
  <div className={`writing-vertical-rl text-orientation-upright tracking-widest leading-loose ${className}`}>
    {children}
  </div>
);

// --- Sections ---

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background Ink Effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-gray-900 to-gray-400 blur-3xl filter" 
        />
      </div>

      <motion.div style={{ y: y1, opacity }} className="z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <h2 className="text-sm md:text-base text-[#666666] font-sans tracking-[0.2em] mb-6 uppercase">
            Minimalism meets Technology
          </h2>
        </motion.div>
        
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-[#2B2B2B] leading-tight mb-6 md:mb-8 font-medium px-2">
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.2, ease: "circOut" }} className="inline-block">心</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.25, ease: "circOut" }} className="inline-block">を</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.3, ease: "circOut" }} className="inline-block">鍛</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.35, ease: "circOut" }} className="inline-block">え</motion.span>
          </span>
          <span className="inline-block overflow-hidden mx-1 sm:mx-2">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.4, ease: "circOut" }} className="inline-block">、</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.45, ease: "circOut" }} className="inline-block">徳</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.5, ease: "circOut" }} className="inline-block">を</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.55, ease: "circOut" }} className="inline-block">積</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.6, ease: "circOut" }} className="inline-block">み</motion.span>
          </span>
          <span className="inline-block overflow-hidden mx-1 sm:mx-2">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.65, ease: "circOut" }} className="inline-block">、</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.7, ease: "circOut" }} className="inline-block">現</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.75, ease: "circOut" }} className="inline-block">代</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.8, ease: "circOut" }} className="inline-block">に</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.85, ease: "circOut" }} className="inline-block">生</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.9, ease: "circOut" }} className="inline-block">き</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.95, ease: "circOut" }} className="inline-block">る</motion.span>
          </span>
          <span className="inline-block overflow-hidden mx-1 sm:mx-2">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1.0, ease: "circOut" }} className="inline-block">"</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1.05, ease: "circOut" }} className="inline-block">侍</motion.span>
          </span>
          <span className="inline-block overflow-hidden mx-1 sm:mx-2">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1.1, ease: "circOut" }} className="inline-block">"</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1.15, ease: "circOut" }} className="inline-block">に</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1.2, ease: "circOut" }} className="inline-block">な</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1.25, ease: "circOut" }} className="inline-block">る</motion.span>
          </span>
          <span className="inline-block overflow-hidden">
            <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1.3, ease: "circOut" }} className="inline-block">。</motion.span>
          </span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="text-xs sm:text-sm md:text-lg text-[#666666] font-light max-w-lg mx-auto font-sans leading-relaxed px-4"
        >
          あなたの中の武士道を呼び起こす。<br className="hidden sm:block" />
          今日から始める武士道ジャーナル習慣。<br className="hidden sm:block" />
          本物の侍は書くところから始まる。
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 sm:bottom-12 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-[#888888] hidden sm:block">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 sm:w-4 sm:h-4 text-[#2B2B2B] opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const Concept = () => {
  return (
    <section className="relative py-20 sm:py-32 md:py-48 px-4 sm:px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between relative z-10">
        
        {/* Vertical Title */}
        <div className="order-1 md:order-1 mb-8 sm:mb-12 md:mb-0 md:mr-24 flex justify-center md:block w-full md:w-auto">
          <FadeIn direction="left">
            <div className="md:hidden text-3xl sm:text-4xl font-serif text-[#2B2B2B] text-center mb-6">
              侍には、常に道があった。
            </div>
            <VerticalText className="hidden md:block text-4xl md:text-6xl font-serif text-[#2B2B2B] h-[300px] md:h-[400px]">
              侍には、常に道があった。
            </VerticalText>
          </FadeIn>
        </div>

        {/* Text Content */}
        <div className="order-2 md:order-2 md:w-1/2 pt-4 sm:pt-10 md:pt-20">
          <FadeIn delay={0.2}>
            <p className="text-sm sm:text-base md:text-lg leading-loose text-[#444] font-serif mb-6 sm:mb-8 text-left sm:text-justify">
              多くの人が習慣化に失敗するのは、<span className="border-b border-[#2B2B2B]/30 pb-1 mx-1">"導き手"</span>がいないから。
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-loose text-[#444] font-serif mb-6 sm:mb-8 text-left sm:text-justify">
              現代は、誘惑とノイズに満ちている。
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-loose text-[#444] font-serif mb-6 sm:mb-8 text-left sm:text-justify">
              しかし武士たちは、日々の省察・徳・覚悟によって己を磨き続けた。
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-loose text-[#444] font-serif mb-6 sm:mb-8 text-left sm:text-justify">
              <span className="font-semibold">Bushido Habit</span>は、その精神を現代に再構築。
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-loose text-[#444] font-serif mb-8 sm:mb-12 text-left sm:text-justify">
              あなたのジャーナルをAIが読み取り、厳しくも本質的なフィードバックを返します。
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#2B2B2B]"></div>
              <span className="text-xs tracking-widest uppercase text-[#888888]">Philosophy</span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 opacity-5 pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 100 100">
           <motion.circle 
             cx="50" cy="50" r="40" 
             stroke="#2B2B2B" strokeWidth="0.5" fill="none"
             initial={{ pathLength: 0, rotate: 0 }}
             whileInView={{ pathLength: 1, rotate: 90 }}
             transition={{ duration: 3, ease: "easeInOut" }}
           />
           <motion.circle 
             cx="52" cy="48" r="38" 
             stroke="#2B2B2B" strokeWidth="0.2" fill="none"
             initial={{ pathLength: 0, opacity: 0 }}
             whileInView={{ pathLength: 1, opacity: 1 }}
             transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
           />
        </svg>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, desc, icon: Icon, index }) => {
  return (
    <FadeIn delay={index * 0.2} direction="up" className="w-full">
      <div className="group relative bg-[#FCFAF2] p-6 sm:p-8 md:p-12 border border-[#E5E5E5] active:border-[#D4AF37]/50 md:hover:border-[#D4AF37]/50 transition-colors duration-700 ease-out h-full">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-20 md:group-hover:opacity-100 md:group-hover:text-[#165E83] transition-all duration-500">
          <Icon size={20} strokeWidth={1} className="sm:w-6 sm:h-6" />
        </div>
        
        <div className="mb-6 sm:mb-8 overflow-hidden">
          <span className="text-xs font-sans tracking-widest text-[#888888] block mb-2">0{index + 1}</span>
          <h3 className="text-xl sm:text-2xl font-serif text-[#2B2B2B]">{title}</h3>
        </div>
        
        <p className="text-[#666] font-sans text-xs sm:text-sm leading-relaxed opacity-80 md:group-hover:opacity-100 transition-opacity duration-500">
          {desc}
        </p>

        {/* Hover Effect Line */}
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#165E83] md:group-hover:w-full transition-all duration-700 ease-in-out" />
      </div>
    </FadeIn>
  );
};

const Features = () => {
  const features = [
    {
      title: "静かなレイヤー",
      desc: "情報を整理する間、AIが自動的に読み取り、分類・整理。あなたは「集中」することだけに集中できます。",
      icon: Layers
    },
    {
      title: "時間軸の流れ",
      desc: "過去、現在、未来を視覚化するタイムライン。禅寺の庭石のように、重要な瞬間を優雅に表現します。",
      icon: Activity
    },
    {
      title: "静寂の空間",
      desc: "雑念のノイズを消し去り、集中のリズムへ。瞑想の静けさに似た、デジタルの温かさを感じてください。",
      icon: Wind
    }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-20 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-20 text-center md:text-left">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2B2B2B] mb-3 sm:mb-4">機能を超え、本質を語る。</h2>
            <p className="text-xs sm:text-sm text-[#888888] font-sans tracking-wide">FUNCTIONALITY IN SILENCE</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BushidoPowers = () => {
  const powers = [
    {
      number: "1",
      title: '毎日の"侍ジャーナリング"',
      desc: "日々の記録を、7つの武士道の観点でAIが分析。甘くない、核心を突くアドバイス。"
    },
    {
      number: "2",
      title: "7つの徳のスキルツリー",
      desc: "誠・義・勇・仁・礼・忠義・名誉。日々の言動があなたの徳を上下させ、キャラクターとして積み上がる。"
    },
    {
      number: "3",
      title: "AI評価（プレミアム）",
      desc: "侍の指南役。曖昧な励ましではなく、成長のための厳しい指摘が届く。"
    },
    {
      number: "4",
      title: '週次の"武士レポート"',
      desc: '7徳の伸び・弱点・改善点を総合分析。あなたの内面の変化を"見える化"。'
    },
    {
      number: "5",
      title: "ランクアップシステム",
      desc: '農民 → 足軽 → 侍見習い → 侍 → 武士頭 → 大名 → 将軍。習慣化が"戦い"になり、毎日がゲームになる。'
    }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-20 bg-[#FCFAF2]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-20 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2B2B2B] mb-3 sm:mb-4">
              Bushido Habitで身につく力
            </h2>
          </FadeIn>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {powers.map((power, i) => (
            <FadeIn key={i} delay={i * 0.15} direction="up">
              <div className="bg-[#F5F5F0] border border-[#E5E5E5] p-6 sm:p-8 md:p-10 hover:border-[#165E83]/30 transition-colors duration-500">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#2B2B2B] text-[#FCFAF2] rounded-full flex items-center justify-center font-serif font-bold text-lg sm:text-xl">
                    {power.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#2B2B2B] mb-3 sm:mb-4">
                      {power.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#666] font-sans leading-relaxed">
                      {power.desc}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const BeforeAfter = () => {
  const beforeItems = [
    "曖昧な目標のまま",
    "続かない日記",
    "行動につながらない反省",
    "誰も叱ってくれない",
    "自己管理ができない"
  ];

  const afterItems = [
    "心が整う",
    "毎日が意味のある行動に",
    "明確な改善点が見える",
    "鬼メンターが伴走",
    "武士道に基づく成長習慣が定着"
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-20 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-20 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2B2B2B] mb-3 sm:mb-4">
              迷いの毎日 → 研ぎ澄まされた毎日へ
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Before */}
          <FadeIn delay={0.2} direction="right">
            <div className="bg-[#FCFAF2] border border-[#E5E5E5] p-6 sm:p-8">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-serif text-[#888888] mb-4">Before</h3>
                <div className="w-16 h-[2px] bg-[#888888]"></div>
              </div>
              <ul className="space-y-4">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#888888] mt-1">×</span>
                    <span className="text-sm sm:text-base text-[#666] font-sans leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* After */}
          <FadeIn delay={0.4} direction="left">
            <div className="bg-[#FCFAF2] border border-[#165E83]/30 p-6 sm:p-8">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4">After</h3>
                <div className="w-16 h-[2px] bg-[#165E83]"></div>
              </div>
              <ul className="space-y-4">
                {afterItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#165E83] mt-1 font-bold">✓</span>
                    <span className="text-sm sm:text-base text-[#2B2B2B] font-sans leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const Benefit = () => {
  return (
    <section className="py-20 sm:py-32 bg-[#1A1A1A] text-[#F5F5F0] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/washi.png')] mix-blend-overlay"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <FadeIn direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-sans font-bold mb-8 sm:mb-12 tracking-tight">
            集中し、<span className="text-[#165E83]">深める。</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <p className="text-base sm:text-lg md:text-xl font-serif leading-loose opacity-80 mb-12 sm:mb-16 max-w-3xl mx-auto px-2">
            デジタルデバイスの時代において、心の静けさを求めること。<br className="hidden sm:block md:hidden"/><br className="hidden md:block"/>
            集中すべき瞬間に意識を向ける静寂な美しさで、<br className="hidden md:block"/>
            あなたのプロダクティビティと精神的健康に貢献します。
          </p>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16">
          {[
            { label: "整列", sub: "ALIGN" },
            { label: "集中", sub: "FOCUS" },
            { label: "静寂", sub: "QUIET" }
          ].map((item, i) => (
            <FadeIn key={i} delay={0.4 + (i * 0.1)} direction="up">
              <div className="flex flex-col items-center group cursor-default">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border border-[#F5F5F0]/20 flex items-center justify-center mb-3 sm:mb-4 md:group-hover:border-[#165E83]/80 md:group-hover:scale-105 transition-all duration-500">
                  <span className="text-xl sm:text-2xl font-serif">{item.label}</span>
                </div>
                <span className="text-[10px] tracking-[0.3em] opacity-50">{item.sub}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechSpec = () => {
  const specs = [
    { title: "Context AI", desc: "文脈を理解する知能", icon: Brain },
    { title: "WebGL Core", desc: "滑らかな動きの実現", icon: Zap },
    { title: "Zero Latency", desc: "無駄のないレスポンス", icon: Smartphone },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-20 border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/3 mb-8 sm:mb-12 md:mb-0">
          <FadeIn direction="right">
            <h2 className="text-2xl sm:text-3xl font-sans font-medium text-[#2B2B2B] mb-4 sm:mb-6">
              見えない技術で、<br />美しさを生む。
            </h2>
            <div className="w-12 sm:w-16 h-[2px] bg-[#165E83]"></div>
          </FadeIn>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {specs.map((s, i) => (
            <FadeIn key={i} delay={i * 0.2} direction="up">
              <div className="flex flex-col items-start p-4 sm:p-6 md:hover:bg-gray-50 transition-colors rounded-sm">
                <s.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#888888] mb-3 sm:mb-4 stroke-1" />
                <h3 className="text-base sm:text-lg font-sans font-bold text-[#2B2B2B] mb-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-[#666666]">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const freePlan = {
    name: "無料プラン",
    price: "無料",
    features: [
      "無制限ジャーナリング",
      "7徳スコアの可視化",
      "基本ステータス表示"
    ]
  };

  const premiumPlan = {
    name: "プレミアム",
    price: "$8.99",
    period: "月額",
    features: [
      'AIによる"武士道評価"',
      "7徳の深掘りコーチング",
      "週次の武士レポート",
      "ランクアップ強化"
    ],
    isPremium: true
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-20 bg-[#FCFAF2]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-20 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2B2B2B] mb-3 sm:mb-4">
              コーヒー1杯分で、あなたの"生き方"が変わる。
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* 無料プラン */}
          <FadeIn delay={0.2} direction="up">
            <div className="bg-[#F5F5F0] border border-[#E5E5E5] p-6 sm:p-8 md:p-10 rounded-sm">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-2">{freePlan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-serif text-[#2B2B2B]">{freePlan.price}</span>
                </div>
                <div className="w-12 h-[2px] bg-[#888888] mt-4"></div>
              </div>
              <ul className="space-y-4 mb-6 sm:mb-8">
                {freePlan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#888888] mt-1">✓</span>
                    <span className="text-sm sm:text-base text-[#666] font-sans leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 sm:py-4 bg-transparent border border-[#2B2B2B] text-[#2B2B2B] font-sans tracking-widest text-xs sm:text-sm transition-all duration-500 ease-out active:bg-[#2B2B2B] active:text-[#FCFAF2] md:hover:bg-[#2B2B2B] md:hover:text-[#FCFAF2] touch-manipulation">
                今すぐ始める
              </button>
            </div>
          </FadeIn>

          {/* プレミアムプラン */}
          <FadeIn delay={0.4} direction="up">
            <div className="bg-[#F5F5F0] border-2 border-[#165E83] p-6 sm:p-8 md:p-10 rounded-sm relative">
              <div className="absolute top-4 right-4 bg-[#165E83] text-[#FCFAF2] px-3 py-1 text-xs font-sans tracking-widest uppercase">
                おすすめ
              </div>
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-2">{premiumPlan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-serif text-[#165E83]">{premiumPlan.price}</span>
                  <span className="text-sm text-[#888888] font-sans">/{premiumPlan.period}</span>
                </div>
                <div className="w-12 h-[2px] bg-[#165E83] mt-4"></div>
              </div>
              <ul className="space-y-4 mb-6 sm:mb-8">
                {premiumPlan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#165E83] mt-1 font-bold">✓</span>
                    <span className="text-sm sm:text-base text-[#2B2B2B] font-sans leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 sm:py-4 bg-[#165E83] text-[#FCFAF2] font-sans tracking-widest text-xs sm:text-sm transition-all duration-500 ease-out active:bg-[#2B2B2B] md:hover:bg-[#2B2B2B] touch-manipulation">
                プレミアムを始める
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 sm:py-32 md:py-48 px-4 sm:px-6 text-center bg-[#FCFAF2]">
      <FadeIn>
        <p className="font-serif text-base sm:text-lg md:text-xl text-[#666666] mb-6 sm:mb-8 px-2">
          今すぐに、静寂な体験を始める。<br className="hidden sm:block" />
          そして、あなたの「道」を築きましょう。
        </p>
        
        <div className="relative inline-block group">
          <button className="relative overflow-hidden px-8 sm:px-12 py-3 sm:py-4 bg-transparent border border-[#2B2B2B] text-[#2B2B2B] font-sans tracking-widest text-xs sm:text-sm transition-all duration-500 ease-out active:bg-[#165E83] active:text-[#FCFAF2] md:group-hover:text-[#FCFAF2] min-h-[44px] touch-manipulation">
            <span className="relative z-10">アプリの体験を始める</span>
            <div className="absolute inset-0 bg-[#165E83] transform scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[0.22, 1, 0.36, 1]"></div>
          </button>
        </div>
      </FadeIn>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 px-6 md:px-20 bg-[#FCFAF2] flex flex-col md:flex-row justify-between items-center text-[10px] text-[#888888] tracking-wider uppercase border-t border-[#E5E5E5]">
    <div className="mb-4 md:mb-0">&copy; 2024 WabiTech Inc.</div>
    <div className="flex gap-6">
      <a href="#" className="hover:text-[#2B2B2B] transition-colors">Privacy</a>
      <a href="#" className="hover:text-[#2B2B2B] transition-colors">Terms</a>
      <a href="#" className="hover:text-[#2B2B2B] transition-colors">Contact</a>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-[#FCFAF2] text-[#2B2B2B] selection:bg-[#165E83] selection:text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Global Styles for Vertical Writing & Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&family=Noto+Serif+JP:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500&display=swap');
        
        body {
          font-family: 'Noto Sans JP', sans-serif;
        }
        .font-serif {
          font-family: 'Noto Serif JP', serif;
        }
        .writing-vertical-rl {
          writing-mode: vertical-rl;
          text-orientation: upright;
        }
      `}</style>

      <NoiseOverlay />
      <CustomCursor />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full px-4 sm:px-6 md:px-12 py-4 sm:py-6 flex justify-end items-center z-40 mix-blend-difference text-[#F5F5F0]">
        <button className="p-2 active:opacity-70 md:hover:opacity-70 transition-opacity touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center">
          <Menu strokeWidth={1} size={20} className="sm:w-6 sm:h-6" />
        </button>
      </nav>

      <main className="relative z-10">
        <Hero />
        <Concept />
        <Features />
        <BushidoPowers />
        <BeforeAfter />
        <Benefit />
        <TechSpec />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

