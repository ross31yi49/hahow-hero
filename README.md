# hahow-hero

## Getting Started

1. Clone repo
2. Install 
```bash
yarn install
```
3. Run the development server
```bash
yarn dev
```
4. View
```bash
http://localhost:3000/heroes/
```

## 架構
```
project/
├── apis/
│   ├── fetchers/           # API 呼叫, 根據不同的情境分檔案
│   ├── axiosClients        # axios 的基礎設定, 包含 Error case, 回傳的格式
│   ├── constants           # API 方面的常數
├── app                     # route
│   ├── lib/                # layout 中使用最 root 的設定
├── components/             # UI 元件
├── constants/              # 常數
├── hooks/                  # 各類 hook function, 包含 query
├── layout/                 # 網站的基礎排版, Header, footer 的擺放位置
├── pages/                  # 每個頁面最一開始會 load 進來的元件
├── styles/                 # layout 中會 load 進來的 css
├── public/                 # Static assets
```

## Library

**Framework**
- Next.js 16
- React 19

**Language**
- Javascript

**UI / Styling**
- styled-components

**State Management**
- React Query         

**Utilities / Others**
- Axios
- prop-types


## 註解

1. 元件的 Props 敘述
2. TODO or FIXME
3. 敘述特殊的商業邏輯

## 加分項目
1. 錯誤 ID 的 error handle
2. Update 能力值時的 button disable