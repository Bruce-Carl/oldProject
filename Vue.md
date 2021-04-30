## Vue 开发问题记录

1. 出现语法错误，可能是项目引入的依赖包使用了新的语法，但是没有通过babel编译

   ```js
   // 修改vue.config.js文件
   transpileDependencies: ["依赖包名"]
   ```

2. 待续