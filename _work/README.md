# 陽だまりの森保育園 採用LP

保育園採用LPのHTML/CSS実装（Header / Hero / Message）

## ファイル構成

```
nursery-lp/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js        # 現在は空（今後追加）
├── assets/
│   └── images/
│       ├── hero-main.jpg
│       ├── message-photo-top.png
│       ├── message-photo-left.png
│       └── message-photo-bottom.png
└── README.md
```

## 実装範囲

- **Header**：ロゴ・ナビゲーション・エントリーボタン（sticky）
- **Hero**：メイン写真・緑のblobシェイプ・ドット装飾・キャッチコピー・小規模バッジ・エントリーボタン
- **Message**：3枚の丸写真・黄色の円背景・見出しブロック・本文テキスト（2カラム）

## 使用フォント（Google Fonts）

| 用途 | フォント | ウェイト |
|------|---------|---------|
| 見出し | Zen Maru Gothic | 600 |
| 本文 | Noto Sans JP | 400 |
| 英字ラベル | Montserrat | 600 |

## レイアウト仕様

| 項目 | 値 |
|------|---|
| PCデザイン基準 | 1920px |
| コンテナ最大幅 | 1120px |
| Header高さ | 70px |
| Message section高さ | 720px程度 |
| Message inner | 1120px × 520px |
| Message visual | 520px × 520px |
| Message text幅 | 440px |
| Visual ↔ Text gap | 120px |

## 今後の対応

- スマホ対応（レスポンシブ）
- ナビリンクのアンカー接続
- その他セクション（募集要項・先輩の声 など）の追加
- JavaScriptによるインタラクション追加
