# 科普启航 · 秦安筑梦 — 社会实践成果展示网站

北京科技大学 2026 暑期社会实践团 · 甘肃天水秦安科普志愿服务

## 快速部署到 GitHub Pages

### 方法一：网页上传（最简单，无需安装任何工具）

1. 登录 [GitHub](https://github.com)，点击右上角 **+** → **New repository**
2. 仓库名填 `qinan-social-practice`，选择 **Public**，点击 **Create repository**
3. 在仓库页面点击 **uploading an existing file** 链接
4. 将 `qinan-deploy` 文件夹里的**所有文件**拖拽上传（包括 `.github` 文件夹）
5. 点击 **Commit changes**
6. 进入仓库 **Settings** → 左侧 **Pages**
7. **Source** 选择 **GitHub Actions**
8. 等待 1-2 分钟，页面顶部会显示你的网站地址：`https://你的用户名.github.io/qinan-social-practice/`

### 方法二：Git 命令行推送

```bash
# 1. 初始化仓库
cd qinan-deploy
git init
git add .
git commit -m "科普启航·秦安筑梦 社会实践成果展示网站"

# 2. 关联远程仓库（替换 YOUR_USERNAME）
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/qinan-social-practice.git
git push -u origin main
```

推送后，进入仓库 **Settings → Pages → Source 选择 GitHub Actions**，等待部署完成即可访问。

## 网站结构

```
qinan-deploy/
├── index.html              # 网站主页面
├── assets/                 # 图片与图表脚本
│   ├── charts.js
│   ├── hero_2560x1440.jpg
│   └── activity_*.jpg
├── _shared/                # 字体与 JS 库
│   ├── fonts/
│   └── js/echarts.min.js
└── .github/workflows/      # GitHub Actions 自动部署
    └── deploy.yml
```

## 自定义内容

- 修改 `index.html` 更新文字、团队信息、活动数据
- 替换 `assets/` 中的图片为真实活动照片
- 修改 `assets/charts.js` 调整图表数据
