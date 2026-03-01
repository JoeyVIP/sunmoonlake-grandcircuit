# Render 部署指南

## 自動部署狀態

已透過 API 建立以下資源：
- **Web Service**: `sunmoonlake-grandcircuit` (srv-d6i1d8h5pdvs73dqijn0)
- **PostgreSQL Database**: `sunmoonlake-db` (dpg-d6i1dd450q8c73asiepg-a)
- **部署網址**: https://sunmoonlake-grandcircuit.onrender.com
- **Dashboard**: https://dashboard.render.com/web/srv-d6i1d8h5pdvs73dqijn0

## 目前狀態

⚠️ **建置失敗**：自動部署多次失敗，可能原因：
1. Next.js 15 + PayloadCMS 組合的建置需求較複雜
2. Render 免費方案的資源限制
3. TypeScript/ESM 配置問題

## 手動修正步驟

### 1. 前往 Render Dashboard

開啟 https://dashboard.render.com/web/srv-d6i1d8h5pdvs73dqijn0

### 2. 檢查建置日誌

1. 點擊最新的 Deploy
2. 查看 "Build Logs" 尋找錯誤訊息
3. 常見錯誤：
   - `npm ci` 失敗 → 改用 `npm install --legacy-peer-deps`
   - TypeScript 錯誤 → 檢查 tsconfig.json
   - Memory limit → 可能需要付費方案

### 3. 更新環境變數

在 Environment 頁面確認以下變數已設定：

```
DATABASE_URI=postgresql://sunmoonlake:eTMnpHtONNIm3SZKlmkUxLAS75jdsyNh@dpg-d6i1dd450q8c73asiepg-a/sunmoonlake
PAYLOAD_SECRET=[自動生成]
NEXT_PUBLIC_SITE_URL=https://sunmoonlake-grandcircuit.onrender.com
NEXT_PUBLIC_SERVER_URL=https://sunmoonlake-grandcircuit.onrender.com
NODE_VERSION=18.17.0
```

### 4. 手動觸發部署

點擊 "Manual Deploy" → "Deploy latest commit"

## 替代方案：Railway 部署

由於這是使用 Next.js + PayloadCMS + PostgreSQL 的全端應用，**強烈建議使用 Railway**，更適合此類型專案。

詳見 DEPLOYMENT.md 中的 Railway 手動部署指南。

## Render vs Railway 比較

| 特性 | Render | Railway |
|------|--------|---------|
| Next.js 支援 | 一般 | 優秀 |
| PostgreSQL | 90 天限制（免費） | 持續（免費） |
| 建置速度 | 較慢 | 較快 |
| 日誌存取 | Web only | CLI + Web |
| 自動部署 | 支援 | 支援 |
| **推薦度** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

## 資料庫連接資訊

**內部連接（Web Service 使用）**:
```
postgresql://sunmoonlake:eTMnpHtONNIm3SZKlmkUxLAS75jdsyNh@dpg-d6i1dd450q8c73asiepg-a/sunmoonlake
```

**外部連接（本機開發）**:
```
postgresql://sunmoonlake:eTMnpHtONNIm3SZKlmkUxLAS75jdsyNh@dpg-d6i1dd450q8c73asiepg-a.oregon-postgres.render.com:5432/sunmoonlake
```

⚠️ **注意**: 免費資料庫將於 2026-03-31 過期。

## 本機測試建置

```bash
# 安裝依賴
npm install --legacy-peer-deps

# 建置
npm run build

# 啟動
npm start
```

如果本機建置成功，但 Render 失敗，可能是記憶體限制問題，需要升級到付費方案。
