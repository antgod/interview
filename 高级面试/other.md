  2.ecmascript

   1. 简述es5,es6的变化，介绍es6的解构赋值与异步处理
   1. 说出ecmascript与竞争对手typescript和typescript区别

   	typescript：静态类型，泛型，抽象类等，支持全部的ecmascript特性

   3.模块化与编译

   1. webpack常用的包管理器：npm,bower区别，node模块与bowerify有何区别
   node把模块当作对象存在缓存中，bowerify依赖sourcemap寻找模块路径
   1. babel的常用版本是哪个？做了哪些改进？
   6.5.2

   4.组件化,Web Components
   组件，标签，交互，事件监听

   1. angular和react哪个实现了webcomponents？
   angular2实现了webcomponents

   5.百度地图渲染维度，地图、覆盖物、路线如何实现？

   地图中心+缩放比例，地图由多张img拼接而成，通过地图中心和渲染比例来从后端返回多张图片拼接而成地图，覆盖物再图片上增加绝对定位的span，路线在图片上面增加绝对定位的svg

   6.版本控制

   1. git与svn的区别
   1. .git存什么信息，.svn存什么信息？（.git存对象，包括历史版本，文件变化.svn存储文件）

   7.游戏

   1. 有哪些常见算法：碰撞检测，缓冲运动，决策树，降维，均值，临近
   1. 游戏引擎：白鹭引擎

   8.设计一个组件化，思路如何（架构设计、组件创建、事件监听、组件交互与前后端交互、组件重用等）

   9.node

   1. 你所用过的框架，简述jade和ejs优缺点。

   jade:简洁，面向对象，结构性强，如果编写内容性强的如博客，cms等应该使用md,wiki。缺点编译效率较低，通常会预编译。

   ejs:速度较快，符合html语法，更偏向于前端人员入手

   1. 尽可能说出你知道的node模块和commonjs规范

   common规范：
   	1. 模块
   	1. I/O流
   	1. Buffer
   	1. 包管理
   	1. 文件系统
   	1. Web服务器
   	1. 进程环境
   	1. 二进制
   	1. 套接字
   	1. 单元测试

   1. 请阐述下node的事件机制与浏览器事件机制区别

   node:事件轮询，浏览器:观察者

   1. 如何优化node性能，你使用过什么服务器或者中间件

   node cluser，或挂在到ngnix服务器

   10.后端

   1. linux和mac了解多少，用过vim编辑器嘛
   1. 如何搭建本地DNS服务器
   1. CDN节点搭建以及配置
   1. 如何配置小型服务器
   1. java,php,node说出这三种语言的行业发展动态，你更倾向于哪种语言？
   1. php与node的线程处理方案？（php反向代理与node cluster）
