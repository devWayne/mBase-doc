---
title: 常见问题
---

### 如何确认模块组的版本信息(Version)?

在通过mBase CLI引入模块组的时候，mBase CLI会在每个文件的模块头自动注入版本号的注释。   

例：


```javascript
/**
	Version: xxx
	Import Date: xxx
	Package: xxx
**/

```

### 为什么不将模块划分为Package?

单一package维护成本比较高，而且在涉及有依赖关系的模块中，会造成package不同步的问题。   

### 如何处理模块之间的依赖关系(require)?

模块之间往往会依赖关系：例如`elements/button.less`依赖`bass.less`，幸运的是模块之间的关系是静态的，可以通过静态的配置文件来约定。   


