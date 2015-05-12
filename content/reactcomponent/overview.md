---
title: Overview
---

> mBase.react是一套基于React.js开发的UI层组件库，每一个React Component对应一个mapi接口，利用React.js Virtual DOM的特性，实现最快的DOM渲染（render),提升页面的性能。

### 介绍-Introduce

  目前移动端Web的体验不如原生的原因就在于DOM的渲染速度缓慢，容易让人感觉卡顿，而React是一个渲染性能极佳的UI层框架，在页面重绘的过程中会计算出差异最小的DOM改动方式，极大的提高了用户体验。   
`React Component`基于ES6 Class特性开发。每一个`React Component`对应一个mapi接口，实现UI层和数据层的分离，并为将来引入`React Native`或者是同构应用`Isomorphic JavaScript`埋下铺垫。   
*注1：并不是完整的ES6,由于目前的Cortex没有专门的`ES6 loader`,需要使用第三方编译工具(React tools或者babel),会使每一个模块引入大量的ES6垫片(shim),所以不建议使用完整的ES6特性*   
*注2：目前只适用于电影频道*

### 使用方式-Usage

#### 使用Cortex:

```shell
cortex install --save rc-hot-movie
cortex install --save rc-hot-cinema
```

#### 使用mBase-Cli:

1.全局安装`mBase-Cli`

```shell
npm i -g mb-cli

```
  
2.在`package.json`或`cortex.json`中配置要引入的模块

```javascript
  //example
  "mBase.react": [
    "hot-movie",
    "hot-cinema"
  ]
```

3.运行```mBase-Cli```,引入的模块将在当前目录路径上生成`src/react-component`文件夹.




