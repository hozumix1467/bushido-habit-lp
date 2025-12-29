import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageContext, translations, LanguageMenu } from './App';

const Terms = ({ onLanguageChange }) => {
  const language = useContext(LanguageContext) || 'en';
  const t = translations[language]?.terms || translations.ja.terms;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-[#FCFAF2] text-[#2B2B2B]">
      {/* Global Styles for Vertical Writing & Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&family=Noto+Serif+JP:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500&display=swap');
        
        body {
          font-family: 'Noto Sans JP', sans-serif;
        }
        .font-serif {
          font-family: 'Noto Serif JP', serif;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 right-0 w-full px-4 sm:px-6 md:px-12 py-4 sm:py-6 flex justify-end items-center z-40">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="p-2 active:opacity-70 md:hover:opacity-70 transition-opacity touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center text-[#2B2B2B]"
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

      {/* Header */}
      <header className="border-b border-[#E5E5E5] bg-[#FCFAF2] sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 py-4 sm:py-6">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-[#2B2B2B] hover:text-[#165E83] transition-colors text-sm sm:text-base cursor-pointer"
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
            <span>{t.back}</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16">
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2B2B2B] mb-8 sm:mb-12 text-center md:text-left"
        >
          {t.title}
        </motion.h1>

        {/* Content */}
        <div className="prose prose-sm sm:prose-base max-w-none font-sans text-[#444] leading-relaxed">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              {t.article1.title}
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              {t.article1.content}
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              {t.article2.title}
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              {t.article2.content}
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              {t.article3.title}
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              {t.article3.content}
            </p>
            {t.article3.items && (
              <ol className="list-decimal list-inside space-y-2 ml-4 text-sm sm:text-base mt-4">
                {t.article3.items.map((item, i) => (
                  <li key={i} className="mb-2">{item}</li>
                ))}
              </ol>
            )}
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              {t.article4.title}
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              {t.article4.content}
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              {t.article5.title}
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              {t.article5.content}
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              {t.article6.title}
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              {t.article6.content}
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              {t.article7.title}
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              {t.article7.content}
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              {t.article8.title}
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              {t.article8.content}
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              {t.article9.title}
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              {t.article9.content}
            </p>
          </motion.section>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-12 sm:mt-16 pt-8 border-t border-[#E5E5E5] text-sm text-[#888888] text-center"
          >
            {t.lastUpdated}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Terms;
