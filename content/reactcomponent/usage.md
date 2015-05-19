---
title: Usage
---

### 引入ReactComponent模块

<br />

#### 使用Cortex引入:

```shell
cortex install --save rc-hot-movie
cortex install --save rc-hot-cinema
```

#### 使用mBase-Cli引入:

<br />

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


### 调用方式-render

<br />

1.引入模块文件：
```javascript
//using cortex
var hot-movie = require('hot-movie');

//using mbase-cli
var hot-movie = require('../src/react-component/hot-movie.js');
```


2.填入mapi参数:
```javascript
//HotMovie 是一个 React Component

//不同的react component需要的参数结构不同，需要查看每一个component的文档

<HotMovie url="http://app.movie.dianping.com/xxx.bin"/>

```

3.Render:
```javascript
 //React render，第二个参数为输出的节点

 var hotMovie = document.getElementById('hot-movie');
 React.render(<HotMovie url="http://app.movie.dianping.com/xxx.bin"/>, hotMovie); 
```
