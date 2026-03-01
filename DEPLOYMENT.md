# Railway 部署指南

由於 Railway CLI token 無效，請使用 Railway Web Console 進行手動部署。

## 部署步驟

### 1. 登入 Railway

前往 [railway.app](https://railway.app) 並登入你的帳戶。

### 2. 建立新專案

1. 點擊 "New Project"
2. 選擇 "Deploy from GitHub repo"
3. 授權 Railway 存取你的 GitHub 帳戶
4. 選擇 `JoeyVIP/sunmoonlake-grandcircuit` repository

### 3. 新增 PostgreSQL 資料庫

1. 在專案中點擊 "+ New"
2. 選擇 "Database" → "PostgreSQL"
3. Railway 會自動建立資料庫並注入 `DATABASE_URL` 環境變數

### 4. 設定環境變數

在 Railway 專案設定中新增以下環境變數：

```
DATABASE_URI=${{Postgres.DATABASE_URL}}
PAYLOAD_SECRET=your-random-secret-key-here
NEXT_PUBLIC_SITE_URL=https://sunmoonlake-grandcircuit-production.up.railway.app
NEXT_PUBLIC_SERVER_URL=https://sunmoonlake-grandcircuit-production.up.railway.app
```

**生成隨機 PAYLOAD_SECRET：**
```bash
openssl rand -base64 32
```

### 5. 設定 Build Command

Railway 會自動偵測 `nixpacks.toml`，但你也可以在 Settings 中確認：

- **Build Command**: `npm install --legacy-peer-deps && npm run build`
- **Start Command**: `npm start`

### 6. 部署

1. 點擊 "Deploy"
2. 等待建置完成（首次建置約 5-10 分鐘）
3. 建置完成後，Railway 會提供一個 `.up.railway.app` 網址

### 7. 更新環境變數

建置完成後，複製 Railway 提供的網址，並更新環境變數：

```
NEXT_PUBLIC_SITE_URL=https://[你的專案名稱].up.railway.app
NEXT_PUBLIC_SERVER_URL=https://[你的專案名稱].up.railway.app
```

儲存後，Railway 會自動重新部署。

### 8. 訪問網站

- **前台**：`https://[你的專案名稱].up.railway.app`
- **CMS 後台**：`https://[你的專案名稱].up.railway.app/admin`

### 9. 建立 CMS 管理員帳號

首次訪問 `/admin` 時，Payload CMS 會引導你建立第一個管理員帳號。

## 自動部署

連接 GitHub 後，每次推送到 `main` branch 都會自動觸發 Railway 重新部署。

## 疑難排解

### 建置失敗：Peer dependency 錯誤

確保 `nixpacks.toml` 中的 install 命令包含 `--legacy-peer-deps`：

```toml
[phases.install]
cmds = ["npm install --legacy-peer-deps"]
```

### 資料庫連線失敗

確認 `DATABASE_URI` 環境變數正確設定為：
```
DATABASE_URI=${{Postgres.DATABASE_URL}}
```

### 頁面載入空白

檢查瀏覽器 Console 是否有錯誤，確認 `NEXT_PUBLIC_SITE_URL` 與實際網址一致。

## Railway CLI 替代方案（未來使用）

如果 Railway token 恢復，可以使用 CLI 快速部署：

```bash
# 安裝 Railway CLI
npm install -g @railway/cli

# 登入
railway login

# 連結專案
railway link

# 部署
railway up
```

---

部署完成後，請將實際的 Railway 網址更新到 README.md 中。
