# nuxt-todo-list

UI：[Figma](https://www.figma.com/file/oH1EtFeZPHl3LQLYtpzdpL/%E5%89%8D%E6%B8%AC?node-id=0%3A1)

## 說明
Todo List 的 CRUD 用 json server 模擬 call api 的行為，所以要 demo 的話必須把專案 clone 到本地端
模擬 call api 行為的函式內故意再加一個 deferTime() 延遲一秒，讓 loading 的畫面出現，承題目需求

## 本地端 run 專案說明
在本地端跑專案要開兩個 terminal，兩個 terminal 各下一段指令
1. npm run dev 跑 nuxt 專案
2. npm run db:serve 跑 json server

## 使用技術
* 使用 Nuxt 2 建構的 SPA
* 使用 Vuex 實作 Todo List 的 CRUD

## 功能介紹
除了下方「題目」的需求外
* 加上 i18n，可切換三國語系（繁中、簡中、英文）
* 加上一套多版型邏輯配置，可在兩種主題色系中切換（原本的 UI 主題、Netflix 主題）
* BEM 命名規則 + OOCSS 設定 global style + SCSS mixin 設定 RWD 斷點
* 應用自製元件庫概念實作簡易版的元件（@/components 裡 C 開頭的元件，e.g. CBtn、CSvgIcon）

## 題目
請使用 Nuxt.js 實作一個 Todo list，需求如下： 
● 請使用 Vuex 實作 Todo list 資料邏輯的部分 
● 排版 UI： 
○ 點我前往 Figma 
■ Tip: 如果要 inspect，需要先登入 
○ 作答請上傳到 GitHub 設置公開並寄回連結 
● 排版請使用 css： flex box 進行排版： 
○ 需要設定 flex-grow, flex-shrink 和 flex-basis 
○ 不可使用 現成的 css 框架 
● UI 各區域邏輯說明： 
Header 
1 請使用 position: fixed 實作 
2 Icon不需要設定任何動作
Input 
1 不一定要綁在最下方，可跟著 Todo list 長 2 可使用鍵盤的 enter 鍵或是點 button 送出
右側送出按鈕 
1 送出時，請顯示出 loading 或 skeleton 後等待數秒後 加上 list 中，模擬新增時使用 API 進行新增的狀況
垃圾桶 
1 需模擬刪除時使用 API 進行刪除的狀況



其他 
● 善用 component 的概念實作內容 
● 加分 
○ 加上 i18n 
○ 將 icon(svg) 加到 components 中 
○ 使用 scss 並使用 mixin 或是 global styles 
○ 任何你覺得可以加分的項目
