import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { ArrowDown, Menu, X, Globe } from 'lucide-react';
import Privacy from './Privacy';

// Language Context
const LanguageContext = createContext();

// Translations
const translations = {
  ja: {
    hero: {
      subtitle: "Minimalism meets Technology",
      title: "心を鍛え、徳を積み、現代に生きる\"侍\"になる。",
      description: "あなたの中の武士道を呼び起こす。\n今日から始める武士道ジャーナル習慣。\n本物の侍は書くところから始まる。",
      scroll: "Scroll"
    },
    concept: {
      title: "侍には、常に道があった。",
      text1: "多くの人が習慣化に失敗するのは、\"導き手\"がいないから。",
      text2: "現代は、誘惑とノイズに満ちている。",
      text3: "しかし武士たちは、日々の省察・徳・覚悟によって己を磨き続けた。",
      text4: "Bushido Habitは、その精神を現代に再構築。",
      text5: "あなたのジャーナルをAIが読み取り、厳しくも本質的なフィードバックを返します。",
      philosophy: "Philosophy"
    },
    powers: {
      title: "Bushido Habitで身につく力",
      power1: {
        title: '毎日の"侍ジャーナリング"',
        desc: "日々の記録を、7つの武士道の観点でAIが分析。甘くない、核心を突くアドバイス。"
      },
      power2: {
        title: "7つの徳のスキルツリー",
        desc: "誠・義・勇・仁・礼・忠義・名誉。日々の言動があなたの徳を上下させ、キャラクターとして積み上がる。"
      },
      power3: {
        title: "AI師範評価",
        desc: "侍の指南役。曖昧な励ましではなく、成長のための厳しい指摘が届く。"
      },
      power4: {
        title: "ランクアップシステム",
        desc: '農民 → 足軽 → 侍見習い → 侍 → 武士頭 → 大名 → 将軍。習慣化が"戦い"になり、毎日がゲームになる。'
      }
    },
    beforeAfter: {
      title: "迷いの毎日 → 研ぎ澄まされた毎日へ",
      before: "Before",
      after: "After"
    },
    benefit: {
      title: "集中し、深める。",
      description: "デジタルデバイスの時代において、心の静けさを求めること。\n集中すべき瞬間に意識を向ける静寂な美しさで、\nあなたのプロダクティビティと精神的健康に貢献します。",
      align: "整列",
      focus: "集中",
      quiet: "静寂"
    },
    pricing: {
      title: "コーヒー1杯分で、あなたの\"生き方\"が変わる。",
      free: {
        name: "無料プラン",
        price: "無料"
      },
      premium: {
        name: "プレミアム",
        price: "$8.99",
        period: "月額",
        badge: "おすすめ"
      },
      cta: {
        free: "今すぐ始める",
        premium: "プレミアムを始める"
      }
    },
    cta: {
      text: "今すぐに、静寂な体験を始める。\nそして、あなたの「道」を築きましょう。",
      button: "アプリの体験を始める"
    },
    footer: {
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact"
    },
    menu: {
      language: "言語",
      japanese: "日本語",
      english: "English",
      spanish: "Español"
    }
  },
  en: {
    hero: {
      subtitle: "Minimalism meets Technology",
      title: "Train your mind, build virtue, become a modern \"samurai\".",
      description: "Awaken the Bushido within you.\nStart your Bushido journal habit today.\nTrue samurai begin by writing.",
      scroll: "Scroll"
    },
    concept: {
      title: "Samurai always had a path.",
      text1: "Many fail at building habits because they lack a \"guide\".",
      text2: "Modern life is full of temptations and noise.",
      text3: "But samurai continued to refine themselves through daily reflection, virtue, and resolve.",
      text4: "Bushido Habit reconstructs that spirit for the modern age.",
      text5: "AI reads your journal and returns harsh but essential feedback.",
      philosophy: "Philosophy"
    },
    powers: {
      title: "Powers you'll develop with Bushido Habit",
      power1: {
        title: 'Daily "Samurai Journaling"',
        desc: "AI analyzes your daily records from 7 Bushido perspectives. Uncompromising, core-piercing advice."
      },
      power2: {
        title: "7 Virtues Skill Tree",
        desc: "Sincerity, Justice, Courage, Benevolence, Respect, Loyalty, Honor. Your daily words and actions raise or lower your virtue, building your character."
      },
      power3: {
        title: "AI Master Evaluation",
        desc: "A samurai guide. Not vague encouragement, but harsh guidance for growth."
      },
      power4: {
        title: "Rank Up System",
        desc: 'Peasant → Foot Soldier → Samurai Apprentice → Samurai → Warrior Leader → Daimyo → Shogun. Habit-building becomes "battle", every day becomes a game.'
      }
    },
    beforeAfter: {
      title: "Days of confusion → Days of sharpened focus",
      before: "Before",
      after: "After"
    },
    benefit: {
      title: "Focus, deepen.",
      description: "In the age of digital devices, seeking peace of mind.\nThe quiet beauty of directing consciousness to moments that require focus\ncontributes to your productivity and mental health.",
      align: "ALIGN",
      focus: "FOCUS",
      quiet: "QUIET"
    },
    pricing: {
      title: "Change your \"way of life\" for the price of a cup of coffee.",
      free: {
        name: "Free Plan",
        price: "Free"
      },
      premium: {
        name: "Premium",
        price: "$8.99",
        period: "monthly",
        badge: "Recommended"
      },
      cta: {
        free: "Start Now",
        premium: "Start Premium"
      }
    },
    cta: {
      text: "Start your quiet experience now.\nAnd build your \"path\".",
      button: "Start App Experience"
    },
    footer: {
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact"
    },
    menu: {
      language: "Language",
      japanese: "日本語",
      english: "English",
      spanish: "Español"
    }
  },
  es: {
    hero: {
      subtitle: "Minimalismo encuentra Tecnología",
      title: "Entrena tu mente, construye virtud, conviértete en un \"samurái\" moderno.",
      description: "Despierta el Bushido dentro de ti.\nComienza tu hábito de diario Bushido hoy.\nLos verdaderos samuráis comienzan escribiendo.",
      scroll: "Desplazar"
    },
    concept: {
      title: "Los samuráis siempre tuvieron un camino.",
      text1: "Muchos fallan en construir hábitos porque carecen de una \"guía\".",
      text2: "La vida moderna está llena de tentaciones y ruido.",
      text3: "Pero los samuráis continuaron refinándose a través de la reflexión diaria, la virtud y la determinación.",
      text4: "Bushido Habit reconstruye ese espíritu para la era moderna.",
      text5: "La IA lee tu diario y devuelve retroalimentación dura pero esencial.",
      philosophy: "Filosofía"
    },
    powers: {
      title: "Poderes que desarrollarás con Bushido Habit",
      power1: {
        title: '"Diario Samurái" Diario',
        desc: "La IA analiza tus registros diarios desde 7 perspectivas Bushido. Consejos intransigentes que penetran el núcleo."
      },
      power2: {
        title: "Árbol de Habilidades de 7 Virtudes",
        desc: "Sinceridad, Justicia, Coraje, Benevolencia, Respeto, Lealtad, Honor. Tus palabras y acciones diarias elevan o bajan tu virtud, construyendo tu carácter."
      },
      power3: {
        title: "Evaluación del Maestro IA",
        desc: "Una guía samurái. No aliento vago, sino orientación dura para el crecimiento."
      },
      power4: {
        title: "Sistema de Subida de Rango",
        desc: 'Campesino → Soldado de Infantería → Aprendiz Samurái → Samurái → Líder Guerrero → Daimyo → Shogun. Construir hábitos se convierte en "batalla", cada día se convierte en un juego.'
      }
    },
    beforeAfter: {
      title: "Días de confusión → Días de enfoque agudo",
      before: "Antes",
      after: "Después"
    },
    benefit: {
      title: "Enfócate, profundiza.",
      description: "En la era de los dispositivos digitales, buscando paz mental.\nLa belleza silenciosa de dirigir la conciencia a momentos que requieren enfoque\ncontribuye a tu productividad y salud mental.",
      align: "ALINEAR",
      focus: "ENFOQUE",
      quiet: "SILENCIO"
    },
    pricing: {
      title: "Cambia tu \"forma de vida\" por el precio de una taza de café.",
      free: {
        name: "Plan Gratuito",
        price: "Gratis"
      },
      premium: {
        name: "Premium",
        price: "$8.99",
        period: "mensual",
        badge: "Recomendado"
      },
      cta: {
        free: "Comenzar Ahora",
        premium: "Comenzar Premium"
      }
    },
    cta: {
      text: "Comienza tu experiencia silenciosa ahora.\nY construye tu \"camino\".",
      button: "Comenzar Experiencia de App"
    },
    footer: {
      privacy: "Privacidad",
      terms: "Términos",
      contact: "Contacto"
    },
    menu: {
      language: "Idioma",
      japanese: "日本語",
      english: "English",
      spanish: "Español"
    }
  }
};

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

// Language Menu Component
const LanguageMenu = ({ isOpen, onClose, currentLang, onLangChange }) => {
  const t = translations[currentLang] || translations.ja;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#2B2B2B]/80 z-[100] backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-80 bg-[#FCFAF2] z-[101] shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={onClose}
                  className="p-2 text-[#2B2B2B] hover:text-[#165E83] transition-colors"
                  aria-label="閉じる"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              {/* Language Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <Globe size={20} strokeWidth={1.5} className="text-[#2B2B2B]" />
                  <h2 className="text-lg font-serif text-[#2B2B2B]">{t.menu.language}</h2>
                </div>
                
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      onLangChange('ja');
                      onClose();
                    }}
                    className={`w-full text-left px-4 py-3 rounded transition-colors ${
                      currentLang === 'ja'
                        ? 'bg-[#165E83] text-[#FCFAF2]'
                        : 'bg-[#F5F5F0] text-[#2B2B2B] hover:bg-[#E5E5E5]'
                    }`}
                  >
                    {t.menu.japanese}
                  </button>
                  <button
                    onClick={() => {
                      onLangChange('en');
                      onClose();
                    }}
                    className={`w-full text-left px-4 py-3 rounded transition-colors ${
                      currentLang === 'en'
                        ? 'bg-[#165E83] text-[#FCFAF2]'
                        : 'bg-[#F5F5F0] text-[#2B2B2B] hover:bg-[#E5E5E5]'
                    }`}
                  >
                    {t.menu.english}
                  </button>
                  <button
                    onClick={() => {
                      onLangChange('es');
                      onClose();
                    }}
                    className={`w-full text-left px-4 py-3 rounded transition-colors ${
                      currentLang === 'es'
                        ? 'bg-[#165E83] text-[#FCFAF2]'
                        : 'bg-[#F5F5F0] text-[#2B2B2B] hover:bg-[#E5E5E5]'
                    }`}
                  >
                    {t.menu.spanish}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- Sections ---

const Hero = () => {
  const language = useContext(LanguageContext);
  const t = translations[language] || translations.ja;
  const titleWords = language === 'ja' 
    ? ['心', 'を', '鍛', 'え', '、', '徳', 'を', '積', 'み', '、', '現', '代', 'に', '生', 'き', 'る', '"', '侍', '"', 'に', 'な', 'る', '。']
    : t.hero.title.split(' ');

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

      <div className="z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <h2 className="text-sm md:text-base text-[#666666] font-sans tracking-[0.2em] mb-6 uppercase">
            {t.hero.subtitle}
          </h2>
        </motion.div>
        
        {language === 'ja' ? (
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-[#2B2B2B] leading-tight mb-6 md:mb-8 font-medium px-2">
            {titleWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <motion.span 
                  initial={{ y: "100%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1, delay: 0.2 + (i * 0.05), ease: "circOut" }} 
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        ) : (
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-[#2B2B2B] leading-tight mb-6 md:mb-8 font-medium px-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {t.hero.title}
            </motion.span>
          </h1>
        )}

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="text-xs sm:text-sm md:text-lg text-[#666666] font-light max-w-lg mx-auto font-sans leading-relaxed px-4 mt-6 sm:mt-8 md:mt-10"
        >
          {t.hero.description.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < t.hero.description.split('\n').length - 1 && <br className="hidden sm:block" />}
            </React.Fragment>
          ))}
        </motion.p>

        {/* App Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="mt-6 sm:mt-8 md:mt-10 flex justify-center px-4"
        >
          <img 
            src="/page1.png" 
            alt="Bushido Habit App Screenshot" 
            className="max-w-full h-auto rounded-lg shadow-lg w-64 sm:w-72 md:w-80"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 sm:bottom-12 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-[#888888] hidden sm:block">{t.hero.scroll}</span>
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
  const language = useContext(LanguageContext);
  const t = translations[language] || translations.ja;

  return (
    <section className="relative py-20 sm:py-32 md:py-48 px-4 sm:px-6 md:px-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10 md:opacity-15 pointer-events-none z-0 overflow-hidden">
        <img 
          src="/samuraiminarai.png" 
          alt="Samurai background" 
          className="w-full h-full object-cover samurai-bg md:object-center"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between relative z-10">
        
        {/* Vertical Title */}
        <div className="order-1 md:order-1 mb-8 sm:mb-12 md:mb-0 md:mr-24 flex justify-center md:block w-full md:w-auto">
          <FadeIn direction="left">
            {language === 'ja' ? (
              <>
                <div className="md:hidden text-3xl sm:text-4xl font-serif text-[#2B2B2B] text-center mb-6">
                  {t.concept.title}
                </div>
                <VerticalText className="hidden md:block text-4xl md:text-6xl font-serif text-[#2B2B2B] h-[300px] md:h-[400px]">
                  {t.concept.title}
                </VerticalText>
              </>
            ) : (
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2B2B2B] text-center md:text-left mb-6">
                {t.concept.title}
              </div>
            )}
          </FadeIn>
        </div>

        {/* Text Content */}
        <div className="order-2 md:order-2 md:w-1/2 pt-4 sm:pt-10 md:pt-20">
          <FadeIn delay={0.2}>
            <p className="text-sm sm:text-base md:text-lg leading-loose text-[#444] font-serif mb-6 sm:mb-8 text-left sm:text-justify">
              {language === 'ja' ? (
                <>多くの人が習慣化に失敗するのは、<span className="border-b border-[#2B2B2B]/30 pb-1 mx-1">"導き手"</span>がいないから。</>
              ) : (
                t.concept.text1
              )}
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-loose text-[#444] font-serif mb-6 sm:mb-8 text-left sm:text-justify">
              {t.concept.text2}
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-loose text-[#444] font-serif mb-6 sm:mb-8 text-left sm:text-justify">
              {t.concept.text3}
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-loose text-[#444] font-serif mb-6 sm:mb-8 text-left sm:text-justify">
              <span className="font-semibold">Bushido Habit</span>
              {language === 'ja' ? 'は、その精神を現代に再構築。' : ` ${t.concept.text4}`}
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-loose text-[#444] font-serif mb-8 sm:mb-12 text-left sm:text-justify">
              {t.concept.text5}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#2B2B2B]"></div>
              <span className="text-xs tracking-widest uppercase text-[#888888]">{t.concept.philosophy}</span>
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

const BushidoPowers = () => {
  const powers = [
    {
      number: "1",
      title: '毎日の"侍ジャーナリング"',
      desc: "日々の記録を、7つの武士道の観点でAIが分析。甘くない、核心を突くアドバイス。",
      image: "/page3.png"
    },
    {
      number: "2",
      title: "7つの徳のスキルツリー",
      desc: "誠・義・勇・仁・礼・忠義・名誉。日々の言動があなたの徳を上下させ、キャラクターとして積み上がる。",
      image: "/page4.png"
    },
    {
      number: "3",
      title: "AI師範評価",
      desc: "侍の指南役。曖昧な励ましではなく、成長のための厳しい指摘が届く。",
      image: "/page5.png"
    },
    {
      number: "5",
      title: "ランクアップシステム",
      desc: '農民 → 足軽 → 侍見習い → 侍 → 武士頭 → 大名 → 将軍。習慣化が"戦い"になり、毎日がゲームになる。',
      image: "/shogun.png"
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
                <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#2B2B2B] text-[#FCFAF2] rounded-full flex items-center justify-center font-serif font-bold text-lg sm:text-xl">
                    {power.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#2B2B2B] mb-3 sm:mb-4">
                      {power.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#666] font-sans leading-relaxed mb-4">
                      {power.desc}
                    </p>
                    {power.image && (
                      <div className="mt-4 flex justify-center md:justify-start">
                        <img
                          src={power.image}
                          alt={power.title}
                          className="max-w-full h-auto rounded-lg shadow-md w-full sm:w-auto sm:max-w-md md:max-w-lg"
                        />
                      </div>
                    )}
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
  const language = useContext(LanguageContext);
  const t = translations[language] || translations.ja;

  return (
    <section className="py-20 sm:py-32 md:py-48 px-4 sm:px-6 text-center bg-[#FCFAF2]">
      <FadeIn>
        <p className="font-serif text-base sm:text-lg md:text-xl text-[#666666] mb-6 sm:mb-8 px-2">
          {t.cta.text.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < t.cta.text.split('\n').length - 1 && <br className="hidden sm:block" />}
            </React.Fragment>
          ))}
        </p>
        
        <div className="relative inline-block group">
          <button className="relative overflow-hidden px-8 sm:px-12 py-3 sm:py-4 bg-transparent border border-[#2B2B2B] text-[#2B2B2B] font-sans tracking-widest text-xs sm:text-sm transition-all duration-500 ease-out active:bg-[#165E83] active:text-[#FCFAF2] md:group-hover:text-[#FCFAF2] min-h-[44px] touch-manipulation">
            <span className="relative z-10">{t.cta.button}</span>
            <div className="absolute inset-0 bg-[#165E83] transform scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[0.22, 1, 0.36, 1]"></div>
          </button>
        </div>
      </FadeIn>
    </section>
  );
};

const Footer = ({ onPrivacyClick }) => (
  <footer className="py-8 px-6 md:px-20 bg-[#FCFAF2] flex flex-col md:flex-row justify-between items-center text-[10px] text-[#888888] tracking-wider uppercase border-t border-[#E5E5E5]">
    <div className="mb-4 md:mb-0">&copy; 2024 WabiTech Inc.</div>
    <div className="flex gap-6">
      <button onClick={onPrivacyClick} className="hover:text-[#2B2B2B] transition-colors cursor-pointer">Privacy</button>
      <a href="#" className="hover:text-[#2B2B2B] transition-colors">Terms</a>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSczMF-1jaDlX4VRx0erjc3EFjNFosbw0ESn0HFq-HAtTvoysw/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="hover:text-[#2B2B2B] transition-colors">Contact</a>
    </div>
  </footer>
);

// --- Main App ---

const HomePage = ({ onPrivacyClick, language, onLanguageChange }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <LanguageContext.Provider value={language}>
      <div className={`min-h-screen bg-[#FCFAF2] text-[#2B2B2B] selection:bg-[#165E83] selection:text-white transition-opacity duration-1000 overflow-x-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        
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
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 active:opacity-70 md:hover:opacity-70 transition-opacity touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <Menu strokeWidth={1} size={20} className="sm:w-6 sm:h-6" />
          </button>
        </nav>

        <LanguageMenu 
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          currentLang={language}
          onLangChange={onLanguageChange}
        />

        <main className="relative z-10">
          <Hero />
          <Concept />
          <BushidoPowers />
          <BeforeAfter />
          <Benefit />
          <Pricing />
          <CTA />
        </main>

        <Footer onPrivacyClick={onPrivacyClick} />
      </div>
    </LanguageContext.Provider>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('ja');

  if (currentPage === 'privacy') {
    return <Privacy onBackClick={() => setCurrentPage('home')} />;
  }

  return (
    <HomePage 
      onPrivacyClick={() => setCurrentPage('privacy')}
      language={language}
      onLanguageChange={setLanguage}
    />
  );
}

