---
title: Overview
---


> mBase.react是一套基于React.js开发的UI层组件库，每一个React Component对应一个mapi接口，利用React.js Virtual DOM的特性，实现最快的DOM渲染（render),提升页面的性能。

### 介绍-Introduce

  目前移动端Web的体验不如原生的原因就在于DOM的渲染速度缓慢，容易让人感觉卡顿，而React是一个性能极佳的UI层框架，将真实的DOM结构抽象成`Virtual DOM`,并在内存中进行维护，当数据更新，页面重绘进行重绘时，VD的diff算法会计算出差异最小的DOM改动方式，极大的提高了用户体验。   
<br /> 
  React本身只是 View，可配合其他类库使用。对于现有的架构侵入性极小，无论是使用传统的开发模式或者是已经使用了使用 `MVC`、`MVVM`框架的前端架构，完全可以把 React 当做其中的 V,即 View, 配合其他类库使用。   
<br />
`React Component`基于ES6 Class特性开发。每一个`React Component`对应一个mapi接口，实现UI层和数据层的分离，并为将来引入`React Native`或者是同构应用`Isomorphic JavaScript`埋下铺垫。   
<br />
*注1：并不是完整的ES6,由于目前的Cortex没有专门的`ES6 loader`,需要使用第三方编译工具(React tools或者babel),会使每一个模块引入大量的ES6垫片(shim),所以不建议使用完整的ES6特性*      
  
*注2：目前只适用于电影频道*   


### React Component实例

<br />
##### 单一模块-Single

```javascript
//导航模块

var urlList=["dianping://url1","dianping://url2","dianping://url3","dianping://url4"];
<Menu data={urlList}/>
```   

输出：   
![menu](../public/img/reactcomponent/menu.jpg)

<br />
##### 嵌套模块-Nesting


###### 外层模块

```javascript
//影院列表

<HotCinemaWrapper url="http://app.movie.dianping.com/xxx.bin"/>
```

输出：   
![hot-cinema-list](../public/img/reactcomponent/hot-cinema-list.jpg)

<br />
###### 内层模块

```javascript
//单一影院

 var result ={};
 <HotCinema data = {result} />
```

输出：   
![hot-cinema](../public/img/reactcomponent/hot-cinema.jpg)

<br />
###### 外层模块

```javascript
//影院列表

<HotMovieWrapper url="http://app.movie.dianping.com/xxx.bin"/>
```

输出：   
![hot-cinema-list](../public/img/reactcomponent/hot-movie-list.jpg)


<br />
###### 内层模块

```javascript
//推荐影片

 var result ={};
 <HotMovieMain data = {result} />
```

输出：    
![hot-movie](../public/img/reactcomponent/hot-movie-main.jpg)

<br />
```javascript
//普通影片

 var result ={};
 <HotMovieSub data = {result} />
```

输出：   
![hot-movie](../public/img/reactcomponent/hot-movie-sub.jpg)


