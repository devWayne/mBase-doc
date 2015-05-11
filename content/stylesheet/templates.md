---
title: 组件-Components
---

> 

### 导航-NavTpl

使用方式:   

```html
<!--  -->
<header class="mb-navTpl mb-line-b-outline">
	        <span class="item sel">未使用</span>
	        <span class="item">已使用</span>
	        <span class="item">已过期</span>
</header>
```

输出:   

![banner](../public/img/templates/navTpl.jpg)

实例:

[点击此处](components.html#banner)


### 列表页-ListTpl

使用方式:    

```html
<div class="mb-listTpl mb-line-tb-outline">
<ul>
<li class="mb-line-b">
            <aside class="pic">
                <img src="http://i2.dpfile.com/cms/20141204/582833000000.jpg">
            </aside>
            <section>
              <div>
                <p class="title">复仇者联盟预售0505<span class="num">1张</span></p>
                <p class="sub-title">预计2015年05月12日上映</p>         
                <p class="detail">请在线选座后至电影院取票</p>
              </div>
                <a>
                    <button class="mb-btn-primary mb-btn-sm mb-fr">选座</button>
                </a>
            </section>
</li>
<li class="mb-line-b">
            <aside>
                <img src="http://i2.dpfile.com/cms/20141204/582833000000.jpg">
            </aside>
            <section>
	      <div>
                <p class="title">复仇者联盟预售0505<span class="num">1张</span></p>
                <p class="sub-title">预计2015年05月12日上映</p>         
                <p class="detail">请在线选座后至电影院取票</p>
              </div>
                <a>
                    <button class="mb-btn-disable mb-btn-primary mb-btn-sm mb-fr">选座</button>
                </a>
            </section>
</li>
</ul>
</div>
```

输出:   

![tip](../public/img/templates/listTpl.jpg)

