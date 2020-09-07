# 轻轻愉快的话题作为面试开场
- 自我介绍+温暖问候
  - 你好，我是商家与开放组的名风。我们是做支付宝商家（对B的业务的），PC中台项目和nodejs应用比较多。
  
- 面试目的陈述
  - 聪明、乐观、同理心、皮实

- 提醒注意事项

# 常规非技术性问题(HR\HRBP\技术\经理)

- 挑选一个你认为最出色\成就感的项目介绍一下项目中你完成的亮点，你工作遇到最大的挑战以及解决方案
    - 技术栈，问题与解决方案。
    - 对技术的探索以及在团队中的影响力。
    - 不要说一些很简单的技术点或者众所周知的技术细节，可以说一些前端公认的技术难题

- 你最擅长哪些技术方向，你有哪些优点或者特长？
    - 说出这些语言的本质区别与优缺点、使用场景

- 常关注哪些技术、社区或者网站、APP；读过哪些书
    - 活跃在npm上的git人物
    - 社区、博客
    - 书籍

- 从上家公司离职的原因是什么?
    - 切记不要说你对公司不满意或者工作不好，工资低、学不到东西之类。给人感觉心浮气躁，不能适应环境而且独立学习能力较差。建议以正能量或者前途为导向

# JS
## 概念
- 详细描述浏览器输入url到渲染页面结束，经历了哪些步骤
- 什么是同源策略，然后和实现跨域
  - post跨域如何实现
  - jsonp实现原理
- 介绍浏览器盒子模型
  - 盒子模型的种类
  - background是覆盖到哪一层的
- 介绍下模块化的演进方案，什么是amd,cmd,umd规范。
    - CommonJS规范的差异
    - module.export与exports区别是什么
- websocket与sockit.io，浏览器兼容性，sockit如何降级

## 基础
- 作用域链、执行环境、活动对象的概念和联系。如果让你实现执行环境与作用域链，你分别会选择哪种数据结构
- 描述下事件的捕获和冒泡的原理
- 描述下的JS垃圾回收有几种机制
- null 和undefined的区别

## 异步
- promise与promise a+规范的区别，如何实现多个promise串行、并行处理，如何实现promise
- 如何实现promise
- promise和setTimeout的区别
  - 涉及到microTask和macroTask
- 如何实现多个promise串行、并行处理
- 描述下fetch,generator,co,async的区别

## 规范
- JS中模块化方法有哪些种？介绍下你熟知的几种方案
- 解释amd,cmd,umd的区别，CMD规范和AMD规范，CommonJS规范的差异;module.export与exports区别是什么
- 现在ES有多套规范，有ES6、ES2015、ES2016等，你知道ES6 和 ES2015有什么区别吗？
- websocket与sockit.io，浏览器兼容性，sockit如何降级
- webcomponent规范，哪些框架实现了这个规范

## 请求
- 常用状态码，缓存策略，请求头和返回头，POST数据格式，MIME协议，Set-Cookie。
- 简述缓存原理
- dns查找过程
- HTTP/2.0相对于HTTP/1/1有什么改进？ 如何开启HTTP/2.0
- http1.1和https，描述下ssl和长连接
- 为什么window.onerror回调有时候只能拿到'Script Error.'，没有详细的报错信息
- 对称加密和非对称加密的区别是什么？ 列举几个常用的加密算法
- 简述三次握手的过程，最后一次请求是否可以省略，为什么？
- ping一个网站100ms，http请求返回多少ms
- https协议抓包如何做？

## Node
- 为什么用Nodejs,它有哪些特性和缺点？
- nodejs的模块是如何实现的，为什么会有module、exports、global等变量
- node是单线程的，如何防止单线程报错退出程序
- 请阐述下node的事件机制与浏览器事件机制区别
- node导出模块有哪2种方式，说说它们的区别？
- 请介绍一下require的模块加载机制
- next tick和setImmediate的区别是什么
- webSocket与传统的http有什么优势
- node环境的工具webpack/babel调试，express/koa服务器的调试
- 谈一下对 koa、express 等框架中间件思想的理解
- 请说出常见的前端攻击类型，Cookies如何防范XSS攻击？
  
### 前端与加密
- 浏览器强缓存和协商缓存是通过什么字段来判断的？ 两者之间有什么区别？
  - http://www.cnblogs.com/wonyun/p/5524617.html
- 浏览器的同源策略是什么? 在相同域的情况下，http的页面能跨域请求https的吗？反之呢？ 有哪些跨域方案?
- 在https协议打开的H5页面内，有某些JS或CSS资源会被block，这是什么原因？图片资源会吗？
- 为什么某些cookies服务端有下发，但是JS无法通过document.cookie获取？(httpOnly)
- 为什么某些cookies在https请求时有携带，但是http请求时却没有？(secure)
- 服务端的session登录态会话，一般是如何通过cookie来保持的？ 过期时间？有效域？
- 什么叫混合加密？大致的实现原理是什么？
- 举例说明一个公钥私钥的使用场景，解释一下为什么哪方应该用公钥哪方应该用私钥。(可以用SSL证书的场景来举例)
- 在前端角度描述一下iOS端WKWebview和UIWebview的区别
- 有哪几种方式可以实现JS和Native通讯

## 性能
- 如何优化滚动屏的性能
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

## TS
- js项目如何升级为ts？有何影响？
- ts 基础类型都哪些，他们跟js的区别
- ts为什么会流行？与ECMA新规范的关系？
- tslint都能配置哪些功能？对开发流程有何影响？
- 如何使用js实现类型约束，枚举等特性么？
- 如何理解接口，泛型?

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
## jquer
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