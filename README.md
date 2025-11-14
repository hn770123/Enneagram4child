# エニアグラム性格診断ゲーム

小学生向けのエニアグラム性格診断ゲームです。

## 特徴

- 🎲 9つの性格タイプの診断
- 📱 PWA対応（オフラインで遊べる）
- 🎨 シンプルで使いやすいUI
- 🚀 GitHub Pagesで公開可能

## 性格タイプ

1. **タイプ1：完璧主義者** - きちんとしていて、正しいことが大好き
2. **タイプ2：助ける人** - やさしくて、みんなを助けるのが好き
3. **タイプ3：がんばり屋** - 目標をもって努力できる
4. **タイプ4：個性的な人** - 自分らしさを大切にする
5. **タイプ5：研究者** - 知りたがり屋さん
6. **タイプ6：安全を求める人** - 慎重で、安心できることを大切にする
7. **タイプ7：楽しいこと大好き** - 明るくて、楽しいことが大好き
8. **タイプ8：リーダー** - 強くて、リーダーシップがある
9. **タイプ9：平和主義者** - おだやかで、みんなが仲良くしてほしい

## 使い方

### ローカルで実行

1. リポジトリをクローン
```bash
git clone https://github.com/hn770123/Enneagram4child.git
cd Enneagram4child
```

2. ローカルサーバーを起動（Python 3の場合）
```bash
python3 -m http.server 8000
```

3. ブラウザで http://localhost:8000 にアクセス

### GitHub Pagesでの公開

1. リポジトリの Settings > Pages に移動
2. Source を `main` ブランチに設定
3. 公開されたURLにアクセス

## ファイル構成

- `index.html` - メインHTMLファイル
- `style.css` - スタイルシート
- `app.js` - ゲームロジック
- `manifest.json` - PWA設定
- `service-worker.js` - オフライン対応
- `icon-192.png`, `icon-512.png` - アプリアイコン

## 技術スタック

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- PWA (Progressive Web App)

## ライセンス

MIT License
