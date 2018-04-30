# 常规非技术性问题(HR\HRBP\技术\经理)

- 挑选一个你认为最出色\成就感的项目介绍一下项目中你完成的亮点，你工作遇到最大的挑战以及解决方案
    - 技术栈，问题与解决方案。
    - 对技术的探索以及在团队中的影响力。
    - 不要说一些很简单的技术点或者众所周知的技术细节，可以说一些前端公认的技术难题

- 你觉得自己有哪些能力，优点，除了前端使用过或者关注哪些技术/语言，你最擅长做什么，不一定是技术
    - 说出这些语言的本质区别与优缺点、使用场景

- 常关注哪些技术、社区或者网站、APP；读过哪些书
    - 活跃在npm上的git人物
    - 社区、博客
    - 书籍

- git常关注哪些人；看过哪些框架库的源码，是否写过开源项目

- 从上家公司离职的原因是什么?
    - 切记不要说你对公司不满意或者工作不好，工资低、学不到东西之类。给人感觉心浮气躁，不能适应环境而且独立学习能力较差。建议以正能量或者前途为导向

# JS
## 概念
- 详细描述浏览器输入url到渲染页面结束，经历了哪些步骤
- 什么是同源策略
- 解释下BFC以及使用场景
- 介绍盒子模型
- 跨域方案  
    - post跨域如何实现
- 性能优化方案
- 解释闭包的理解，用途以及缺点
- 介绍下模块化的演进方案，什么是amd,cmd,umd规范。
    - CommonJS规范的差异
    - module.export与exports区别是什么
- websocket与sockit.io，浏览器兼容性，sockit如何降级
- webcomponent规范，哪些框架实现了这个规范
- 描述下fetch,generator,co,async的用途

## 基础
- 描述下浏览器执行环境/作用域链与活动对象以及它们的关联
    - 执行环境与作用域链是用什么数据结构存储 
- 描述下的垃圾回收机制
- null 和undefined的区别

## 异步
- promise与promise a+规范的区别，如何实现多个promise串行、并行处理，如何实现promise
- 描述浏览器同源策略以及jsonp实现原理
- promise和setTimeout的区别
  - 涉及到microTask和macroTask

## 性能
- 常见的性能优化方案，一共分几大类
    - 涉及建链接
    - 域名收敛
    - 安全cookie
    - 资源缓存304，cache-control，etag
    - 合并文件、压缩
    - 请求大宝
    - localstorage
    - 图像压缩，sprite，domready，base64,
    - appcache, http2等
    - 你所接触过的性能优化方案以及性能检测工具\平台
    - 移动端效率优化与PC端的不同
    - 如何优化安卓低版本效率，如滚屏，卡屏，webview启动等

## 兼容性
- h5兼容性
scroll ios不响应，/android，UIWebview/WKWebview
click300，双击判定，点透，fastclick，touchstart/end preventDefault，dispatchEvent isTrusted安全性

## 函数式编程
- 函数式编程和面向对象编程本质区别是什么
- 纯函数，尾递归优化

# 样式
## 原理
- css选择器权重计算规则
    - 标签(1)<class(10)<id(100)<style(1000)<js(10000)
    - 答出继承、后者覆盖有加分
- 哪些操作会引起浏览器重绘和重排？如何减少reflow

## 基础
- 解释下CSS层叠上下文），层叠上下文何时会启用z-index属性
    - 每一个盒子处在三维空间中。除了水平轴和垂直轴外，还有一个z轴（z-axis），这三个轴共同决定了盒子在三维空间中的位置。
    - 拥有同一父节点 并且position不为static且z-index不为auto的节点。

- 层叠上下文顺序(由上而下)
    - 正z-index
    - z-index: auto或z-index: 0
    - line/link-block
    - float
    - block块状盒子
    - 负z-index
    - background/border

- 尽可能列出居中方案，越多越好；不定宽高的对话框，如何实现水平和垂直居中？

- h5的高清方案是怎么做的？有哪些？如何实现绝对1px实线和虚线？
    - rem，mediaquery，viewport scale做高清适配的优缺点
## css3
- 对弹性盒子模型的理解是什么？什么场景下会考虑使用它？弹性盒子在w3c各个版本草案有什么变动？
    - W3C 2009年第1次草案：display:box;
    - W3C 2011年第2次草案：display:flexbox | inline-flexbox;
    - W3C 2012年第5次草案及以后的候选推荐标准：display:flex | inline-flex;

# 框架
## 公共
- 读过哪些框架或者了解过哪些原理
- 谈谈框架阅读技巧以及收获、产出的文章
## jquery
- jquery如何实现defer,ready,init
## react
- react的dom diff原理 
- react如何处理事件绑定，解释下高阶组件，有几种方式实现继承组件
- react的batchUpdate更新机制，setState是同步的还是异步的
- react事件机制与事物机制

## vue
- vue的响应式原理中Object.defineProperty分别在set/get时干了什么，vue的Watcher机制，vue的batchUpdate及$nextTick机制
- vue如何实现双向绑定的
- vue 中的 on,emit,off,once如何实现的

## 其他
- lodash & underscore 中 template 方法的使用，如何避免 XSS

# 工程化
## 基本
- babel插件的工作机制，有什么坑（plugin数组的顺序调用坑)
- 如何兼容低版本浏览器，如何做css兼容
- 有过前后端分离或者服务端渲染的经验么，如何实现的
- eslint，日常开发你做过哪些个性化配置，有没有写过规则插件
- 你们构建、部署静态资源是怎么做的？

## git与npm
- 说出git与svn的区别，.git存什么信息，.svn存什么信息？（.git存文件变化，.svn存储文件）
- rebase/merge的区别，merge和rebase的区别
- commit后的代码怎么回滚
- Github上有给三方库提过MR么，举例说明
- npm2与3的区别，npm如何管理文件版本

## 监控埋点
- 前端性能与报错，可以监控哪些项目，如何监控
- 介绍一次你所参与过的紧急回滚流程，发现、修复、回滚操作、后续再次上线，全流程是怎样    