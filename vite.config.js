import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // すべてのネットワークインターフェースでリッスン
    port: 5173, // ポート番号（必要に応じて変更可能）
    strictPort: false, // ポートが使用中の場合は別のポートを自動選択
  },
})

