# エンクリーン 換気ダクトLP

SWELL子テーマ用 換気ダクト清掃ランディングページ

---

## フォルダ構成

```
ecocleanlp/
├── style.css                  # テーマ宣言（必須）
├── functions.php              # 親テーマ（SWELL）読み込み
├── kanki_dakuto_lp.php        # LPページテンプレート
├── css/
│   └── kanki_dakuto_lp.css    # LPスタイルシート + アニメーション
├── js/
│   └── kanki_dakuto_lp.js     # アニメーションスクリプト
└── images/                    # 画像ファイル（39枚）
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

## ローカルプレビュー

`index.html` をブラウザで開くと確認できます。
（`index.html` はGitHub管理対象外）

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
| ヒーロースライドイン | 「毎日吸ってる空気」タグ・「本当にキレイ？」・バナー | CSS `@keyframes`（ページ読み込み時） |
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

| ファイル名 | 用途 |
|---|---|
| logo.png | ヘッダーロゴ |
| hero-photo-left.jpg | ヒーロー左写真 |
| hero-photo-right.jpg | ヒーロー右写真 |
| hero-machine.jpg | ヒーロー機械写真 |
| hero-duct.jpg | ヒーローダクト写真 |
| benefit-icon-1.png | ベネフィットアイコン（風量） |
| benefit-icon-2.png | ベネフィットアイコン（音） |
| benefit-icon-3.png | ベネフィットアイコン（トイレ） |
| benefit-icon-4.png | ベネフィットアイコン（部屋） |
| what-is-duct.jpg | 換気ダクトとは説明画像 |
| arrow-down.png | 下向き矢印 |
| customer-home.png | 一般家庭アイコン |
| customer-restaurant.png | 飲食店アイコン |
| dirt-silicone-fan.jpg | 汚れ写真（換気扇シリコンファン） |
| dirt-range-hood.jpg | 汚れ写真（レンジフード） |
| dirt-toilet-room.jpg | 汚れ写真（トイレ・部屋） |
| risk-health-1.jpg | 健康リスク写真1 |
| risk-health-2.jpg | 健康リスク写真2 |
| risk-cost-1.jpg | 経済リスク写真1 |
| risk-cost-2.jpg | 経済リスク写真2 |
| risk-fire-1.jpg | 火災リスク写真1 |
| risk-fire-2.jpg | 火災リスク写真2 |
| service-high-pressure.jpg | サービス（高圧洗浄） |
| service-all-types.jpg | サービス（全種類対応） |
| service-schedule.jpg | サービス（都合に合わせて対応） |
| service-replacement.jpg | サービス（ダクト交換） |
| map-osaka.png | 対応エリアマップ（大阪府） |
| map-hyogo.png | 対応エリアマップ（兵庫県） |
| underline-deco.png | 下線デコレーション |
| step1-before.jpg | 清掃STEP1（清掃前） |
| arrow-step.png | STEPの矢印 |
| step2-cleaning.jpg | 清掃STEP2（除菌） |
| step3-after.jpg | 清掃STEP3（清掃後） |
| movie-thumbnail.jpg | 動画サムネイル |
| staff-person.jpg | スタッフ写真 |
| review-photo-1.jpg | 口コミ写真1 |
| review-photo-2.jpg | 口コミ写真2 |
| review-photo-3.jpg | 口コミ写真3 |
| pricing-table.png | 料金表 |
