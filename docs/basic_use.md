# 基础用法

## 通过CDN

1. 将 `docsify-prism`, `Prism` 以及Prism的语法组件 CDN 链接添加到 `index.html`:

    ```html
    <!-- CDN files for docsify-prism -->
    <script src="//cdn.jsdelivr.net/npm/docsify-prism@latest/dist/docsify-prism.min.js"></script>
    <!-- or <script src="//cdn.jsdelivr.net/gh/jianse/docsify-prism@latest/dist/docsify-prism.js"></script> -->

    <!-- CDN files for prism -->
    <script src="//unpkg.com/prismjs@1.17.1/prism.js"></script>
    <!-- javascript language prism component -->
    <script src="//unpkg.com/prismjs@1.17.1/components/prism-javascript.min.js"></script>
    ```
!> 尽管docsify自身使用了Prismjs来高亮代码,但是它使用了一个非常底层的函数,导致Prism的大多数插件不能直接使用.这正是`docsify-prism`要解决的问题.

2. 将 `Prism` 的代码高亮样式表加入 `index.html`
   ```html
   <link rel="stylesheet" href="//unpkg.com/prismjs@1.17.1/themes/prism-okaidia.css" />
   ```