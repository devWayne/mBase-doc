---
title: Best Practice
---

##模块设计最佳实践

一个完整的React Component模块应该包含以下几个部分：   

1. 入口`index.js`，决定了模块内部调用的关系和API。
2. 编译前和编译后的（子）模块源码。
3. 描述模块信息和依赖关系的配置文件:npm中的`package.json`或cortex中的`cortex.json`。
4. 使用文档`readme.md`，应包含：模块的健康状况，完整的API和使用实例。
5. 测试用例。   

</br>
*React v0.13 之后的版本开始，`react-tool`已经支持了原生的ES6 Class，所以推荐使用`react-tool`来进行模块的编译。*   
*推荐使用React addons自带的`React.addons.TestUtils`来编写测试用例。   

###模块实例[MovieTab.rc](https://github.com/devWayne/MovieTab.rc)

##模块目录结构-construction

```
├── LICENSE
├── README.md
├── package.json
├── cortex.json
├── index.js
├── dist
│   ├── maintab.js
│   ├── movietab.js
│   ├── subtab.js
│   └── wrapper.js
└── src
    ├── maintab.js
    ├── movietab.js
    ├── subtab.js
    └── wrapper.js
```

##调用方式-usage

```
var React = require('React'),
    MovieTab = require('movietab.rc'),
    MainTab = require('movietab.rc').MainTab,
    SubTab = require('movietab.rc').SubTab;

/**
 * Use As UI Template 
 */
var movieInfo1 = { },movieInfo2 = {}, movieInfo3 = {}, movieInfo4 ={};
var movieList = [ movieInfo1,movieInfo2,movieInfo3,movieInfo4 ];

//insert into body
React.render( <Menu data={urlList}, document.body/>
React.render( <MainTab data=Obj, document.body/>
React.render( <SubTab data=Obj, document.body/>



/**
 * Use As Widget
 */
var MTWrapper = MovieTab.Wrapper;
var mapi = 'http://app.movie.dianping.com/yourbiz.bin';
//insert into body
React.render(<MTWrapper url="mapi"/>, document.body);

```

##API

### Wrapper

###### props:

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>url</td>
          <td>String</td>
          <th></th>
          <td>mapi url corresponding to current Tab</td>
      </tr>
    </tbody>
</table>


### MovieTab

###### props:

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>data</td>
          <td>List</td>
          <th></th>
          <td>List of Objects for inner moivetab </td>
      </tr>
    </tbody>
</table>

### MainTab

###### props:

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>url</td>
          <td>String</td>
          <th></th>
          <td>href</td>
      </tr>
      <tr>
          <td>Flag</td>
          <td>Int</td>
          <th></th>
          <td>Movie status</td>
      </tr>
      <tr>
          <td>Movie</td>
          <td>Object</td>
          <th></th>
          <td>Info Object contains Name(string),Grade(int) and LargeImage(string)</td>
      </tr>
    </tbody>
</table>

### SubTab

#### props:

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>url</td>
          <td>String</td>
          <th></th>
          <td>href</td>
      </tr>
      <tr>
          <td>Flag</td>
          <td>Int</td>
          <th></th>
          <td>Movie status</td>
      </tr>
      <tr>
          <td>Movie</td>
          <td>Object</td>
          <th></th>
          <td>Info Object contains Name(string),Grade(int) and Image(string)</td>
      </tr>
    </tbody>
</table>

##测试-test

模块的单元测试基于[Jest](http://facebook.github.io/jest/),FaceBook官方的前端测试框架。    

实例可以查看[官方React单元测试教程](http://facebook.github.io/jest/docs/tutorial-react.html#content)


