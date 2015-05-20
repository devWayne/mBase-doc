---
title: Overview
---

> mBase.css基于less开发，为解决在移动端垂直频道开发中，样式不统一，重复，冗余等问题，同时以提升开发效率为目标，不断自我完善中。


### 介绍-Introduce

mBase使用`less`开发，引入的基础库包括`normalize-css`,使用`postcss`进行打包，前缀修正等。   

发布有2个版本`mBase.css`和`mBase.lite.css`,`mBase.css`支持所有的功能和样式，`mBase.lite.css`在`mBase.css`进行删减，除去了专用的业务模板，来减小模块大小。   

### 使用方式-Usage

<br />

#### 全局方式引入:

`mb.css`和`mb.lite.css`的文件可以在[项目源码](https://github.com/devWayne/mBasa.css)中的dist文件夹下找到

```html
<!--  引入完整版 -->
<link href="css/mb.css" rel="stylesheet" type="text/css">
<!--  引入精简版 -->
<link href="css/mb.lite.css" rel="stylesheet" type="text/css">
```

<br />

#### 通过Bower引入:

```shell
cd yourProject
#引入完整版
bower install mBase.css
#引入精简版
bower install mBase.lite.css
```
<br />

#### 通过Cortex引入:

```shell
cd yourProject
cortex install --save mBase.base.css
cortex install --save mBase.banner.css
cortex install --save mBase.bbutton.css
```

<br />

#### 通过mBase-Cli引入(推荐):

[mBase-Cli](https://github.com/devWayne/mBase-Cli)是一个专门为`mBase`设计的Cli工具，用于提供原子级别的模块引入，真正做到用到多少引入多少，避免不必要的资源占用。

使用方式:

1.全局安装`mBase-Cli`

```shell
npm i -g mb-cli

```
  

2.在`package.json`或`cortex.json`中配置要引入的模块

```javascript
  //example
  "mBase.css": [
    "components/banner.less",
    "elements/arrow.less",
    "elements/button.less"
  ]

```

3.运行```mBase-Cli```,引入的模块将在当前目录路径上生成less文件夹


### 编译-Compile


