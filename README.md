# Vellum 官网

VellumDesk + Vellum Toolbox 的静态官网，部署在 GitHub Pages。

- 线上：https://wooozxh.github.io/vellum-site/
- 本地预览：在仓库根目录运行 `python -m http.server 8080`，打开 http://localhost:8080/
- 结构：首页 / `desk/` / `toolbox/` / `updates/` / `download/`
- 部署：push 到 `main`，GitHub Pages 从 `main` 根目录构建（`.nojekyll`）

更新版本时改这些地方：

1. 首页与 `download/` 的版本号、文件大小、下载链接；
2. `updates/` 加一条版本记录；
3. 若换安装包，把新的 `.ccx` 放进 `downloads/` 并更新 SHA256。

截图来源与文案事实见上级目录的 `../product-facts.md`。
