# 2028 日月潭環潭大賽車官方網站

> Sun Moon Lake Grand Circuit 2028 - When Speed Meets Serenity

亞洲首場環湖公路賽車官方網站，採用 Next.js 15 + Payload CMS 3.0 建置。

## 🏁 專案簡介

這是一個虛構但極度擬真的國際級賽車賽事官方網站，展示了如何使用現代化的技術棧打造高品質的賽事網站。

### 賽事資訊

- **賽事名稱**：2028 日月潭環潭大賽車
- **英文名稱**：2028 Sun Moon Lake Grand Circuit
- **日期**：2028 年 10 月 20-22 日
- **地點**：台灣南投日月潭
- **賽道全長**：33 公里環湖賽道
- **主辦單位**：台灣國際賽車運動協會 (TIMSA)

## 🛠 技術棧

- **前端框架**：Next.js 15 (App Router)
- **CMS**：Payload CMS 3.0 (Headless)
- **樣式**：Tailwind CSS
- **資料庫**：PostgreSQL
- **部署**：Railway
- **TypeScript**：完整型別支援

## 📁 專案結構

```
sunmoonlake-grandcircuit/
├── app/
│   ├── (web)/               # 前台頁面
│   │   ├── page.tsx         # 首頁
│   │   ├── race/            # 賽事資訊
│   │   ├── circuit/         # 賽道介紹
│   │   ├── teams/           # 車隊車手
│   │   ├── tickets/         # 購票資訊
│   │   ├── travel/          # 交通住宿
│   │   ├── news/            # 新聞中心
│   │   ├── fanzone/         # Fan Zone
│   │   └── about/           # 關於我們
│   ├── layout.tsx           # 全域 Layout
│   └── globals.css          # 全域樣式
├── components/              # React 元件
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── CountdownTimer.tsx
├── payload/                 # Payload CMS 配置
│   ├── collections/
│   ├── globals/
│   └── payload.config.ts
└── public/                  # 靜態資源
```

## 🚀 快速開始

### 環境需求

- Node.js 18.17 或更高版本
- PostgreSQL 資料庫

### 安裝步驟

1. Clone 專案
```bash
git clone https://github.com/JoeyVIP/sunmoonlake-grandcircuit.git
cd sunmoonlake-grandcircuit
```

2. 安裝依賴
```bash
npm install
```

3. 設定環境變數
```bash
cp .env.example .env
# 編輯 .env 檔案，填入你的資料庫連線與密鑰
```

4. 啟動開發伺服器
```bash
npm run dev
```

5. 開啟瀏覽器訪問
- 前台：http://localhost:3000
- CMS 後台：http://localhost:3000/admin

## 🎨 設計系統

### 色彩

- **主色 (Lake)**：`#0A2540` - 深湖藍
- **強調色 (Racing)**：`#E63946` - 賽車紅
- **輔助色 (Mist)**：`#D4A574` - 晨霧金
- **背景色 (BG)**：`#0D0D0D` - 極深黑灰
- **文字色**：`#FFFFFF` / `#94A3B8`

### 字體

- **標題**：Archivo Black
- **內文**：Noto Sans TC
- **數據**：JetBrains Mono

### 設計理念

- **Cinematic** - 每個區塊像一張全版海報
- **Immersive** - 深色沈浸式體驗
- **Data-rich but story-driven** - 數據要大，但要有故事
- **台灣在地美學** - 融合地形等高線、水波紋理、霧氣效果

## 📱 響應式設計

- **Mobile First**：從手機版開始設計
- **斷點**：
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **導航**：手機版漢堡選單，桌面版水平導航

## 🗄️ CMS Collections

- **pages** - 靜態頁面
- **news** - 新聞文章
- **teams** - 車隊
- **drivers** - 車手
- **sponsors** - 贊助商
- **users** - 管理員

## 🔐 安全性

- CMS 後台與 Next.js 在 Railway Private Network 內溝通
- CMS 不對外公開
- 環境變數妥善管理

## 📄 授權

此專案為展示用途，所有內容皆為虛構。

## 🙏 致謝

- 設計靈感來自紐柏林、利曼 24 小時、摩納哥大獎賽等國際賽事
- 感謝台灣美麗的日月潭提供絕佳的賽道想像空間

---

© 2028 Sun Moon Lake Grand Circuit. All rights reserved.
