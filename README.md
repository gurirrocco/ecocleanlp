# エコ・クリーン 換気ダクトLP

SWELL子テーマ用 換気ダクト清掃ランディングページ

---

## フォルダ構成

```
ecocleanlp/
├── style.css                  # テーマ宣言（必須）
├── kanki_dakuto_lp.php        # LPページテンプレート
├── css/
│   └── kanki_dakuto_lp.css    # LPスタイルシート + アニメーション
├── js/
│   └── kanki_dakuto_lp.js     # アニメーションスクリプト
└── images/                    # 画像ファイル（WebP形式）
```

---

## WordPressへの設置手順

### 1. FTPアップロード

このリポジトリをダウンロードし、フォルダごとサーバーにアップロードします。

```
/wp-content/themes/ecocleanlp/
```

### 2. テーマ有効化

WordPress管理画面 → 外観 → テーマ → `ecocleanlp` を有効化

### 3. 固定ページ作成

1. WordPress管理画面 → 固定ページ → 新規追加
2. タイトルを入力（例：換気ダクト清掃）
3. 右サイドバーの「テンプレート」で **LPページ** を選択
4. 公開

---

## ローカルプレビュー（確認用）

> ⚠️ `index.html` は**デザイン確認専用**です。本番環境では使用しないでください。
> 画像パスが相対パスのため、WordPressサーバー上では正しく動作しません。

`index.html` をブラウザで開くとローカルで表示確認できます。
本番用ファイルは `kanki_dakuto_lp.php` です。

---

## 公開情報

**公開URL：** https://eco-clean-osaka.com/kanki_dakuto/

**公開日：** 2026年3月21日

---

## トラブルシューティング記録（2026年3月21日）

### 症状
子テーマ有効化後、固定ページの公開ボタンを押すと固まる。F12コンソールにREST APIへの403エラーが大量に発生。

### 原因
1. **サーバーWAF（不正アクセス防御機能）** がWordPressのREST API（`/wp-json/`）への通信をブロックしていた
2. **ブラウザの古いセッションCookie** が残っており、子テーマ有効化後に生成された新しいnonceと不一致になっていた

### 解決策
1. ロリポップ管理画面のWAF設定をOFFにする
2. ブラウザのCookieとキャッシュをクリアしてWordPressに再ログインする

---

## 親テーマ

**SWELL**
https://swell-theme.com/

---

## コンテンツ幅

| セクション | 幅 |
|---|---|
| メインコンテンツ（各セクション） | 1000px（デスクトップはzoom 0.9で実質900px） |
| お悩みエリア | 1100px（実質990px） |

---

## アニメーション

`css/kanki_dakuto_lp.css` と `js/kanki_dakuto_lp.js` で実装。

| アニメーション | 対象 | 実装方法 |
|---|---|---|
| ヒーロースライドイン | 「毎日吸っている空気」タグ・「本当にキレイですか？」・バナー | CSS `@keyframes`（ページ読み込み時） |
| スクロールフェードイン | 各カード・セクション全体 | `IntersectionObserver` + `.fade-in` / `.visible` クラス |
| 数字カウントアップ | リスクセクションの「最大30%」「約7割」 | `IntersectionObserver` + `setInterval` |
| ボタンホバー | 「無料でご相談」「今すぐ無料診断する」 | CSS `transition` + `transform` |
| リップル（波紋） | 全ボタン（クリック時） | JS で `<span>` を動的生成 |

### アニメーションのカスタマイズ

**フェードインの速度を変更する（CSS）**
```css
.fade-in {
  transition: opacity 0.7s ease, transform 0.7s ease; /* 0.7s を変更 */
}
```

**ボタンの浮き上がり量を変更する（CSS）**
```css
.btn-consult:hover,
.btn-diagnosis:hover {
  transform: translateY(-4px); /* -4px を変更 */
}
```

**フェードインの対象要素を追加する（JS）**
```js
const fadeTargets = [
  '.benefits-white-card',
  // ここに追加したいCSSセレクタを記述
];
```

---

## 画像一覧

※ すべての画像はWebP形式（`.webp`）です。

| ファイル名 | 用途 |
|---|---|
| logo.webp | ヘッダーロゴ |
| hero-photo-left.webp | ヒーロー左写真 |
| hero-photo-right.webp | ヒーロー右写真 |
| hero-machine.webp | ヒーロー機械写真 |
| hero-duct.webp | ヒーローダクト写真 |
| benefit-icon-1.webp | ベネフィットアイコン（風量） |
| benefit-icon-2.webp | ベネフィットアイコン（音） |
| benefit-icon-3.webp | ベネフィットアイコン（トイレ） |
| benefit-icon-4.webp | ベネフィットアイコン（部屋） |
| what-is-duct.webp | 換気ダクトとは説明画像 |
| arrow-down.svg | 下向き矢印（SVG） |
| underline-deco.svg | 下線デコレーション（SVG） |
| customer-home.webp | 一般家庭アイコン |
| customer-restaurant.webp | 飲食店アイコン |
| dirt-silicone-fan.webp | 汚れ写真（換気扇シリコンファン） |
| dirt-range-hood.webp | 汚れ写真（レンジフード） |
| dirt-toilet-room.webp | 汚れ写真（トイレ・部屋） |
| risk-health-1.webp | 健康リスク写真1 |
| risk-health-2.webp | 健康リスク写真2 |
| risk-cost-1.webp | 経済リスク写真1 |
| risk-cost-2.webp | 経済リスク写真2 |
| risk-fire-1.webp | 火災リスク写真1 |
| risk-fire-2.webp | 火災リスク写真2 |
| service-high-pressure.webp | サービス（高圧洗浄） |
| service-all-types.webp | サービス（全種類対応） |
| service-schedule.webp | サービス（都合に合わせて対応） |
| service-replacement.webp | サービス（ダクト交換） |
| map-osaka.webp | 対応エリアマップ（大阪府） |
| map-hyogo.webp | 対応エリアマップ（兵庫県） |
| step1-before.webp | 清掃STEP1（清掃前） |
| arrow-step.webp | STEPの矢印 |
| step2-cleaning.webp | 清掃STEP2（除菌） |
| step3-after.webp | 清掃STEP3（清掃後） |
| movie-thumbnail.webp | 動画サムネイル |
| staff-person.webp | スタッフ写真 |
| review-photo-1.webp | 口コミ写真1 |
| review-photo-2.webp | 口コミ写真2 |
| review-photo-3.webp | 口コミ写真3 |
| pricing-table.webp | 料金表 |
