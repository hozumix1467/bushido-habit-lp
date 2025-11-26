# GitHubへのアップロード手順

## 1. Gitリポジトリの初期化

プロジェクトディレクトリで以下のコマンドを実行してください：

```bash
cd D:\create\LP\bushido-hubit
git init
```

## 2. ファイルをステージング

すべてのファイルをGitに追加します：

```bash
git add .
```

## 3. 初回コミット

```bash
git commit -m "Initial commit: Bushido Habit landing page"
```

## 4. GitHubでリポジトリを作成

1. GitHubにログインして、https://github.com/new にアクセス
2. リポジトリ名を入力（例: `bushido-hubit`）
3. **Public** または **Private** を選択
4. **「Initialize this repository with a README」のチェックを外す**（既にREADMEがあるため）
5. 「Create repository」をクリック

## 5. リモートリポジトリを追加

GitHubで作成したリポジトリのURLをコピーして、以下のコマンドを実行：

```bash
git remote add origin https://github.com/YOUR_USERNAME/bushido-hubit.git
```

（`YOUR_USERNAME`をあなたのGitHubユーザー名に置き換えてください）

## 6. ブランチ名をmainに変更（オプション）

```bash
git branch -M main
```

## 7. GitHubにプッシュ

```bash
git push -u origin main
```

## 注意事項

- GitHubの認証が必要な場合、Personal Access Tokenを使用する必要があります
- 初回プッシュ時に認証情報の入力が求められる場合があります

## トラブルシューティング

### 認証エラーが発生した場合

GitHubのPersonal Access Tokenを使用してください：
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 「Generate new token」をクリック
3. 必要な権限（repo）を選択
4. トークンをコピーして、パスワードの代わりに入力

