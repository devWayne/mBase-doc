---
title: 元素-Elements
---

> 

### 按键-Buttons

使用方式:   

Normal：

```html
<button class="mb-btn-primary mb-btn-sm">small</button>

<button class="mb-btn-white mb-btn-sm">small</button>
```

输出:   

![banner](../public/img/elements/btn-small.jpg)

```html
<button class="mb-btn-primary mb-btn-md">middle</button>

<button class="mb-btn-white mb-btn-md">middle</button>
```

输出:   

![banner](../public/img/elements/btn-middle.jpg)


```html
<button class="mb-btn-primary mb-btn-lg">large</button>

<button class="mb-btn-white mb-btn-lg">large</button>
```

输出:   

![banner](../public/img/elements/btn-large.jpg)


Disable:

```html
<button class="mb-btn-primary mb-btn-disable mb-btn-md">disable</button>
```

输出:   

![banner](../public/img/elements/btn-disable.jpg)


Awaiting:

```html
<button class="mb-btn-primary mb-btn-awaiting mb-btn-md">awaiting</button>
```

输出:   

![banner](../public/img/elements/btn-awaiting.jpg)


实例:

[点击此处](elements.html#button)


### 星级-Stars

使用方式:   

```html
<!-- 星级1星 -->
<p class="mb-rank rank10"></p>

<!-- 星级2星 -->
<p class="mb-rank rank20"></p>

<!-- 星级3星 -->
<p class="mb-rank rank30"></p>

<!-- 星级3星半 -->
<p class="mb-rank rank35"></p>

<!-- 星级4星 -->
<p class="mb-rank rank40"></p>

<!-- 星级4星半 -->
<p class="mb-rank rank45"></p>

<!-- 星级5星 -->
<p class="mb-rank rank50"></p>
```

输出:   

![banner](../public/img/elements/star.jpg)

实例:

[点击此处](elements.html#star)


### 选择-Selects

使用方式:   

```html
<a href="#" class="b-line anchor">
	Single Select（unbelected）<i class="mb-select single-unselected"></i>
</a>
```

输出:   

![banner](../public/img/elements/sel-unsel.jpg)

```html
<a href="#" class="b-line anchor">
	Single Select（selected）<i class="mb-select single-selected"></i>
</a>
```

输出:   

![banner](../public/img/elements/sel-sel.jpg)

```html
<a href="#" class="b-line anchor">
	Single Select（disable）<i class="mb-select single-disable"></i>
</a>
```

输出:   

![banner](../public/img/elements/sel-dis.jpg)

```html
<a href="#" class="b-line anchor">
	Mutiple Select（unselected）<i class="mb-select mutiple-unselected"></i>
</a>
```

输出:   

![banner](../public/img/elements/mutisel-unsel.jpg)

```html
<a href="#" class="b-line anchor">
	Mutiple Select（selected）<i class="mb-select mutiple-selected"></i>
</a>
```

输出:   

![banner](../public/img/elements/mutisel-sel.jpg)

```html
<a href="#" class="b-line anchor">
	Mutiple Select（disable）<i class="mb-select mutiple-disable"></i>
</a>
```


输出:   

![banner](../public/img/elements/mutisel-dis.jpg)



由于选择是一个内联元素，所有在上面的例子中，引入了一个自定义的样式`(.anchor)`将父元素变成了一个块级元素。   
`(.anchor)`定义如下：   

```css
.anchor {
  padding: 10px 0px;
  display: block;
  text-align: center;
  color: #333333;
  font-size: 14px;
  background-color: #ffffff;
  text-decoration: none;
}
```

实例:

[点击此处](elements.html#select)


### 边框线-Outline

使用方式:   


输出:   

![banner](../public/img/outline.jpg)

实例:

[点击此处](elements.html#outline)


### 箭头-Arrows

使用方式:   

```html
<a href="#" class="b-line anchor">
	Arrow Down<span class="mb-arrow arrow-bottom"></span>
</a>

<a href="#" class="b-line anchor">
	Arrow Up<span class="mb-arrow arrow-top"></span>
</a>

<a href="#" class="b-line anchor">
	Arrow Left<span class="mb-arrow arrow-left"></span>
</a>

<a href="#" class="b-line anchor">
	Arrpw Right<span class="mb-arrow arrow-right"></span>
</a>
```

`(.anchor)`定义如下： 

```css
.anchor {
  padding: 10px 0px;
  display: block;
  text-align: center;
  color: #333333;
  font-size: 14px;
  background-color: #ffffff;
  text-decoration: none;
}
```

输出:   

![banner](../public/img/elements/arrow.jpg)

实例:

[点击此处](elements.html#arrow)


