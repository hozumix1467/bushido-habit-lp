import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const Privacy = ({ onBackClick }) => {
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

      {/* Header */}
      <header className="border-b border-[#E5E5E5] bg-[#FCFAF2] sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 py-4 sm:py-6">
          <button 
            onClick={onBackClick}
            className="inline-flex items-center gap-2 text-[#2B2B2B] hover:text-[#165E83] transition-colors text-sm sm:text-base cursor-pointer"
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
            <span>ホームに戻る</span>
          </button>
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
          プライバシーポリシー
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
              第1条（情報の収集）
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              本アプリは、ユーザーが入力した情報（ジャーナルエントリ、ユーザー名、アイコン画像等）を、ユーザーのデバイスにローカルに保存します。当方は、ユーザーの個人情報を意図的に収集、保存、または送信することはありません。ただし、ユーザーが本アプリを使用する過程で、デバイスの情報、アプリの使用状況、エラーログ等が自動的に収集される場合があります。
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              第2条（情報の使用）
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              当方が収集した情報（存在する場合）は、本アプリの改善、エラーの修正、サービスの提供のために使用される場合があります。ただし、当方は、収集した情報の使用について、いかなる保証も行いません。
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              第3条（情報の共有）
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              当方は、ユーザーの情報を第三者と意図的に共有することはありません。ただし、以下の場合を除きます：
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4 text-sm sm:text-base">
              <li>法的要求がある場合</li>
              <li>当方の権利または財産を保護する必要がある場合</li>
              <li>ユーザーの安全または他のユーザーの安全を保護する必要がある場合</li>
            </ol>
            <p className="mt-4 text-sm sm:text-base leading-loose">
              当方は、情報の共有により生じた損害について、一切の責任を負いません。
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              第4条（データの安全性に関する免責）
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              当方は、ユーザーのデータの安全性、機密性、または完全性について、いかなる保証も行いません。データの消失、破損、改ざん、不正アクセス、漏洩、またはその他のセキュリティ侵害により生じた損害について、当方は完全に免責されます。ユーザーは、データの保護を完全に自己の責任において行うものとします。
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              第5条（第三者サービス）
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              本アプリは、AI分析機能等のために、第三者のサービス（OpenAI、Supabase等）を使用する場合があります。これらの第三者サービスが収集、使用、または保存する情報については、当方は一切の責任を負いません。ユーザーは、これらの第三者サービスのプライバシーポリシーを確認し、自己の責任において判断するものとします。
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              第6条（課金情報）
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              本アプリの有料機能に関する課金情報は、App Store、Google Play、またはRevenueCat等の決済プロバイダーが処理します。当方は、これらの決済プロバイダーが収集、処理、または保存する課金情報について、一切の責任を負いません。
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              第7条（Cookieおよびトラッキング技術）
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              本アプリは、Cookie、ローカルストレージ、またはその他のトラッキング技術を使用する場合があります。これらの技術の使用により生じた損害について、当方は一切の責任を負いません。
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              第8条（子どものプライバシー）
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              本アプリは、13歳未満の子どもを対象としていません。13歳未満の子どもが本アプリを使用した場合、その保護者の責任において行うものとし、当方は一切の責任を負いません。
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              第9条（プライバシーポリシーの変更）
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              当方は、事前の通知なく、いつでも本プライバシーポリシーを変更することができます。変更後のポリシーは、本アプリ上に表示した時点から効力を生じるものとします。変更後のポリシーに同意できない場合は、本アプリの利用を中止するものとします。
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2B2B] mb-4 sm:mb-6 border-b border-[#E5E5E5] pb-2">
              第10条（完全免責）
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-loose">
              適用される法律が許す最大限の範囲において、当方は、プライバシー、データ保護、情報の取り扱いに関連するあらゆる責任から完全に免責されます。ユーザーは、本アプリの利用により、プライバシーに関するリスクを完全に自己の責任において負うものとします。
            </p>
          </motion.section>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-12 sm:mt-16 pt-8 border-t border-[#E5E5E5] text-sm text-[#888888] text-center"
          >
            最終更新日: 2024年12月1日
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
