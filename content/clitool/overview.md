---
title: Overview
---

### 介绍-Introduce


在业务开发中，样式表可以说是复用度最高的一种资源，往往一套产品只有一种样式风格，同一种元素，例如按键，箭头，单选复选等，在不同页面使用的都是相同的一个样式表。

在这种情况下，如果将所有得元素，组件全部提取出来打包成一个模块（类似bootstrap)的造成大量的资源浪费。

mBase-Cli 最初是为了解决样式文件引入的问题，将原先的完整引入依赖分解为按模块组引入。

完整引入: 

```javascript
   "dependencies":{
	"mBase.css":"*"
   }
```

*完整引入样式风格文件在通常情况下并不是一种好的选择，尤其是当文件较大的时候，对客户端的加载会带来额外的压力。*

按模块组引入:

```javascript
  "mBase.css": [
    "components/banner.less",
    "elements/arrow.less",
    "elements/button.less"
  ]
```

*按需加载，有效减少客户端加载资源。*

### 快速使用-Usage

<br />

#### Step1:全局安装mBase-cli工具

```shell
$ npm i -g mb-cli

```

<br />

#### Step2:配置模块

在`package.json`或`cortex.json`中配置要引入的模块

```javascript
  //example
  "mBase.react": [
    "menu",
    "hot-cinema",
    "hot-movie"
  ]

```

<br />

#### Step3:执行指令

```
$ mBase-Cli

```

在当前项目目录下生成目录树结构：   

```
├── src
│   ├── components
│   │   ├── hot-cinema-list.js
│   │   ├── hot-cinema-wrapper.js
│   │   ├── hot-cinema.js
│   │   ├── hot-movie-list.js
│   │   ├── hot-movie-main.js
│   │   ├── hot-movie-sub.js
│   │   ├── hot-movie-wrapper.js
│   │   └── menu.js

```
