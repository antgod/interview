## 常规非技术性问题(HR\HRBP\技术\经理)

1. 介绍下自己\工作经历
1. 挑选一个你认为最出色的项目介绍一下
1. github上长关注哪些人？你的github地址，有写过开源项目吗？
1. 你认为前端有哪些发展方向,你的目标/职业规划是什么
1. 从上家公司离职的原因是什么?
1. 你工作遇到最大的挑战是什么,你是如何解决的?
1. 你在北京工作几年了?结婚了吗?

## CSS基础题

1. 说出你所知道的所有居中方案,越多越好。
1. 解释一下文字顶线\中线\基线\底线,当line-height:20px,font-size:14px时,几条线的位置分别是多少像素.为什么图片与文字不能垂直居中对齐
1. 选择器：请描述一下 :first-child:nth-last-child(n+4)的含义
1. 你所知道的css长度单位,颜色函数与常用关键字有哪些,以及如何使用这些关键字做到低耦合
1. 描述一下flex布局,做左右各15像素外边距元素,元素内部有三个两端对齐的子元素,子元素宽度比为1:2:3,子元素间距5px,如何实现这样的布局
1. 介绍下float/IE6/bfc的bug的解决方案
1. 如何实现珊格\瀑布流布局
1. 描述下sass/less/precss/stylus等最佳实践
1. 描述css计算值与实际值的区别,选择器权重
1. 如何实现宽度为屏幕宽度,高度等于宽度的div
1. 如何实现浮动两端对齐
1. 描述一下css的继承性
1. 预编译的变量没有编译，可能原因是什么？
1. 描述一下贝塞尔曲线，keyframe
1. 描述bfc,场景以及解决方案
1. 实现一个环形loading效果
1. 如何提高css性能

## JS基础题

1. 描述下执行环境\作用域链与活动对象的关系,执行环境与作用域链是用什么数据结构存储,描述运行与销毁的时机与内存分配关系
1. 详细描述闭包的原理,闭包的优点与缺点分别是什么?描述下早期浏览器为什么会产生闭包内存溢出以及如何避免内存溢出
1. 详细描述this指向, var $=document.querySelector;var queryButton=$('#queryButton');运行这句话,会有什么结果?如果修改其中的bug
1. javascript参数是值传递还是引用传递?实参与形参是两个变量还是一个变量?
1. 如何判断属性是否是对象自身的属性,如何判断属性是否是原型链的属性?
1. 如何编写插件,如何无new关键字创建对象,如何实现单例模式,如何实现依赖注入?
1. 如何避免大量使用if,switch判断而导致方法难以维护?
1. Promise是如何实现的?同步与异步如何处理？
1. JQuery动画如何实现?
1. 描述下es6解构赋值,箭头函数,generator,模块化
1. 编写函数add，使得console.log(add(1)(2))输出3，console.log(add(1)(2)(3))输出6
1. 编写函数，实现isType('number')(15)返回true，其中number,15为变量,然后实现生成检测函数的函数，如isNumber(15)返回true
1. 编写"123456789"转化成"$123,456,789"的转换函数

    var re = /(?=(?!\b)(\d{3})+$)/g;
1. 写出你知道的移动端所有事件（PC事件除外），以及触发关系，并且写出如何消除300ms延迟
1. 描述下commonjs,amd,cmd,exports与module.exports区别
1. 写出发布订阅模式
1. 描述下函数式编程/柯里化/泛化
1. 描述下v8引擎的垃圾回收机制
1. 说出(function(){})(),(function(){}())的区别
1. setInterval setTimeout bug
1. 输出什么内容,如果把var换成let会怎样？

	var a=1;
	function f(){
		console.log(this.a+a);
		var a=2;
		console.log(this.a+a);
	}
	f();

2. 输出什么内容？

	function f1(){console.log(this.a);}
	function f2(){this.a=1;}
	f2.prototype.a=2;
	f2.a=3;
	f1.call(f2)
	f1.call(new f2);

3. 问题1：用户点击页面，输出什么内容？问题2：next回调取自于参数，参数fn2已经存在闭包内,应该执行哪个函数，为什么？

	//因为click事件句柄引用了next参数，所以fn函数不会被销毁，内存中生成了两个fn函数的作用域

	var fn=(function(){
		var flag=true;
		function fn(next){
			if(flag){
				flag=false;
				document.body.addEventListener("click",function(){
					next();
				},false);

			}
		}
		return fn;
	})();


	var fn1=function(){
		console.log("Hello");
	}

	var fn2=function(){
		console.log("World");
	}

	fn(fn1);
	fn(fn2);
1. 编写函数，实现isType('number')(15)返回true，其中number,15为变量,然后实现生成检测函数的函数，如isNumber(15)返回true。
类似题：编写函数isnumber(15)返回true,实现类似功能。

    //原题
	var isType=function(type){
	    var temp=function(value){
	        return typeof value==type?true:false;
	    }
	    return temp;
	}

    //扩展题
    var types=['number','string','boolean','object','null','undefined'];
	for(var i in types){
	   (function(type){
	       window['is'+types[i]]=function(value){
	           return  typeof value==type?true:false;
	       }
	   })(types[i])
	}


## Node

1. 描述Node.js的内存泄漏的原因
2. Node.js项目，一般如何保证其正常的运作
3. Node.js中require的机制。
4. 怎么在Node里实现一个类似php里的sleep()函数？
5. Node 自诩异步编程是它的优势，为什么在引用外部包的时候（require()函数）是同步方法，而非异步方法
6. Node 里有readFile和对应的同步方法readFileSync，但http.get() 却没有 http.getSync()，如果要实现一个http.getSync()，怎么做？
7. Node中事件与浏览器中事件的区别
8. Node Web项目中如何做异常处理
9. 描述下node集群?你常用哪些服务器框架
10. 常用的npm包有哪些?

## 移动端

1. 描述下移动端适配
1. 谈谈移动端的坑
1. 移动端低版本
1. 简述Webview,Native和Hybird的异同,在开发与运行两方面做出分析
1. js如何调用native,native如何调用js
1. webview的优缺点，浏览器内核
1. 简述下react native的实现原理

## 性能与其他

1. 常见的性能优化方案，一共分几大类？
1. 你所接触过的性能优化方案以及性能检测工具\平台
1. 移动端效率优化与PC端的不同
1. 如何优化安卓低版本效率，如滚屏，卡屏，webview启动等

## Http

1. Http1.0,Http1.1,Http2和Https，描述下SSL与长连接
1. 跨域的几种方法，如何做到post请求跨域
1. 发起网络请求过程
1. 说出常用的状态码，302与304/502与503/100与101的区别？哪些请求是失败的？
1. 说出常用的头部字段
1. 说出常用的rest请求类型与body类型
1. 描述下CDN与DNS原理， 后台如何设置文件缓存，dns查找怎么设置缓存
1. Webworker与WebSocket应用在哪些场景
1. 加密与网络安全

## 工程化

1. 你常用哪些构建工具？优缺点是什么
1. Webpack作用，webpack模块化与Browerify区别，工程中Webpack中作用
1. guant与gulp的区别？gulp的主要方法有哪些？ 


## MVC框架

1. Angular，React的出现解决了什么问题，优缺点有哪些？
1. angular
   
    1.    目录结构
    1.    api/非api
    1.    mvvm      scope
    1.    apply,脏值检测 实现双向数据绑定
    1.    依赖注入的优点与实现
    1.    如何实现渲染
1. React

    1. 单项数据流与双向数据流的区别是什么？
    1. 描述一下react的服务器端渲染
    1. 如何做组件交互，如何实现数据双向绑定
    1. dom diff算法
    1. 生命周期
1. react,angular,vue哪个实现了webcomponent规范？


## 算法编写

1. 实现堆栈的pop,push,max函数,确保max函数的时间复杂度为O(n)
1. 求连续自然数之和为n的连续自然数并输出，如15=7+8=4+5+6=1+2+3+4+5
1. 25匹马，5跑道，求前三名，设计一种比赛算法，确保时间复杂度为O(n)
1. 设计一个微信红包算法，做到M个人分N元红包，每个人分到的概率相等，保证公平性。
1. 写出一种算法函数，实现M个数字，取出N个，一共有多少种不同的组合方式，并且把组合方式输出






