# 使用Prism的插件

## 配置

```js
window.$docsify={
    docsifyPrism:{
        init:function(){
            //call once when init
        },
        beforeRender:function(code,lang){
            //call every time before rendering code area
            return code
        },
        afterRender:function(code){
            //call every time before will complate
            return code
        }
    }
}
```

## 示例场景 - 类冲突

有时`Prism`高亮过的代码中的类会和原来网页元素的类相同,这样会有一些不必要的麻烦,幸好Prism 的插件`customClass`可以帮助我们解决这个问题

1. 添加`Prism` `customClass`插件 `index.html`
    ```html
    <script src="//unpkg.com/prismjs@1.17.1/plugins/custom-class/prism-custom-class.min.js"></script>
    ```

2. 在`docsify-prism` 插件初始化时设置Prism customClass插件
    ```js
    window.$docsify={
        docsifyPrism:{
            init:function(){
                Prism.plugins.customClass.prefix('prism-')
            }
        }
    }
    ```
!> 使用`customClass` 改变类名将导致Prism提供的主题不可用

!> 已知的docsify版本存在一个类冲突, `body`上的`content` 类 与 `markdown` 代码块链接的`content`冲突, 导致代码块渲染异常<br>如下:
```markdown
[link](/foo)
[otherlink](/bar)
```
位于链接内容的方括号中的内容错位

## 示例场景 - 自动加载

1. 添加 `Prism` `autoloader`插件到`index.html`中
    ```html
    <script src="//unpkg.com/prismjs@1.17.1/plugins/autoloader/prism-autoloader.min.js"></script>
    ```
2. 对应配置
    ```js
    window.$docsify={
        docsifyPrism:{
            init:function(){
                Prism.plugins.autoloader.languages_path = 'https://unpkg.com/prismjs@1.17.1/components/'
            }
        }
    }
    ```

## 其他需要添加 data- 标记的场景

可以配置`afterRender` 函数实现

?> _TODO_ need test