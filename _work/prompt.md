# 保育園採用LP 実装依頼

Figmaで作成した保育園採用LPのデザインをもとに、HTML/CSSで静的ページを実装してください。

今回は、以下の範囲のみ実装します。

- Header
- Hero
- Message section

## 目的

まずはFigmaからHTML/CSSへ変換する制作フローを確認したいです。  
完全再現よりも、後から修正しやすい構造と、PC表示の大枠再現を優先してください。

## デザイン方針

- 小規模保育園の採用LP
- 先生にも子どもにもやさしい
- あたたかい
- 働きやすい
- 淡い色
- 丸みのある写真
- 水彩・やわらかい印象

## 使用フォント

Google Fontsを使用してください。

- 見出し：Zen Maru Gothic / 600
- 本文：Noto Sans JP / 400
- 英字ラベル：Montserrat / 600

## レイアウト条件

- PC基準デザイン：1920px
- 各sectionは width: 100%
- 共通containerは max-width: 1120px
- Header高さ：70px
- Message section高さ：720px程度
- Message inner：1120px × 520px
- Message visual：520px × 520px
- Message text：440px
- Message visual と Message text のgap：120px

## 使用画像

実装用画像は以下を使ってください。

- assets/images/hero-main.jpg
- assets/images/message-photo-top.png
- assets/images/message-photo-left.png
- assets/images/message-photo-bottom.png

referenceフォルダ内の画像は、見た目の参考として使用してください。

## 希望するファイル構成

以下の構成で作成してください。

- index.html
- css/style.css
- js/main.js
- README.md

## 実装方針

- class名はBEM寄りで分かりやすくしてください
- HTML構造は section / container / block 単位で整理してください
- 画像は assets/images/ から参照してください
- JavaScriptは今は不要なら空でOKです
- まずはPC表示を優先してください
- スマホ対応は後で調整します
- Figmaの完全再現より、後から修正しやすいコードを優先してください

## セクション構造イメージ

### Header

Section / Header
└─ Header / Inner
   ├─ Header / Logo
   ├─ Header / Nav
   └─ Button / Entry

### Hero

Section / Hero
└─ Hero / Inner
   └─ Hero / Visual
      ├─ Photo / Main
      ├─ Bg / Shape Green
      ├─ Hero / Catchcopy
      ├─ Badge / Small Nursery
      └─ Button / Entry

### Message

Section / Message
└─ Message / Inner
   ├─ Message / Visual
   │  ├─ Bg / Circle
   │  ├─ Photo / Top
   │  ├─ Photo / Left
   │  └─ Photo / Bottom
   └─ Message / Text
      ├─ Message / Heading Block
      │  ├─ Label / EN
      │  └─ Heading
      └─ Body

## 出力後に確認したいこと

- Header / Hero / Message が表示されるか
- 画像パスが正しいか
- フォントが反映されているか
- container幅が1120pxになっているか
- Messageが2カラムになっているか