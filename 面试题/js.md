# 基础
作用域理解等】ES6方面，const、let的区别，const声明的值能否修改？ 
基础考点：let变量提升、块级作用域的特征，这个必须答出，答不出扣-10分
一阶考点：const声明的值，如果是对象（json、数组等），无法重新赋值，但可以修改内部的引用，答不出扣-5分
二阶考点：可关联的其他考察点，你说了引用/指针/内存等关键词，能和我说说这是什么东西么？
null 和undefined的区别？
基础考点：null是有值，但值是空。undefined是值未定义。
扩展考点：null typeof是 object。一个特殊的对象类型。
高阶考点：null可JSON化；他们都是falsy ，不加!比较，永远是false (Boolean(undefined) ->// false, Boolean(null) ->// false)；
【异步基础】setTimeout(0)，代码是即时执行的么？为什么?
基础题，答不好扣分
【Promise特征】Promise API使用的特征：reject与catch与then执行关系；
基础题，答不好扣分

# 语言
接触过几种语言，说出这些语言的本质区别与优缺点、使用场景

# 异步
- promise与promise a+规范的区别，如何实现多个promise串行、并行处理，如何实现promise
- 描述下fetch,generator,co,async的用途
- ajax1与2的区别
- 描述浏览器同源策略以及jsonp实现原理
- promise和setTimeout的区别
  涉及到microTask和macroTask

# 跨域
- 尽可能描述跨域的几种方法,越多越好
- post跨域如何实现

# 性能
- pc，h5的性能优化问题
涉及建链接，域名收敛，安全cookie，资源缓存304，cache-control，etag，combo打包，localstorage,图像压缩，sprite，domready，base64, appcache, http2等

# 兼容性
- h5兼容性
scroll ios不响应，/android，UIWebview/WKWebview
click300，双击判定，点透，fastclick，touchstart/end preventDefault，dispatchEvent isTrusted安全性

# 函数式编程，纯函数，尾递归优化

# 正则

# 规范
- 解释amd,cmd,umd的区别

6.webwork,websocket

	三种webworker的区别，如何与后端通信？

	websocket用途是什么，优缺点？
  

  【模块化规范】CMD规范和AMD规范，CommonJS规范的差异？他们是什么时候出来的规范，中间有几个版本？
基础考点：分得清这三个东西。
一阶考点：可以说出这三个的经典案例：AMD（requireJS)、CommonJS（NodeJS)、CMD（seaJS）
二阶考点：能侃侃而谈这些规范的，说明对上几年的社区有较好关注
【ES6规范】现在ES有多套规范，有ES6、ES2015、ES2016等，你知道ES6 和 ES2015有什么区别吗？
基础考察点：同一个东西，故意加些误导。对规范的不同叫法有过了解，答好加个分。答不好，说明对社区关注度不太够。
进阶考察点：可以讲出最新规范的一些新动态，说明对社区有较好关注








## 算法编写

1. 实现堆栈的pop,push,max函数,确保max函数的时间复杂度为O(n)
1. 求连续自然数之和为n的连续自然数并输出，如15=7+8=4+5+6=1+2+3+4+5
1. 25匹马，5跑道，求前三名，设计一种比赛算法，确保时间复杂度为O(n)
1. 设计一个微信红包算法，做到M个人分N元红包，每个人分到的概率相等，保证公平性。
1. 写出一种算法函数，实现M个数字，取出N个，一共有多少种不同的组合方式，并且把组合方式输出

## 性能与其他

1. 常见的性能优化方案，一共分几大类？
1. 你所接触过的性能优化方案以及性能检测工具\平台
1. 移动端效率优化与PC端的不同
1. 如何优化安卓低版本效率，如滚屏，卡屏，webview启动等


## 常规非技术性问题(HR\HRBP\技术\经理)

1. 介绍下自己\工作经历
    
    *几乎是每个公司都会问到，每个人都有自己的介绍方式。注意以下几点：*

    1. 不要流水式的直叙业务。给人感觉一直再做重复工作，没有不可替代性。
    1. 如果你做项目的少数模块，最好对项目的整体有所了解，做好充分准备。否则可能难以应对面试官的技术或者业务问题。
    
1. 挑选一个你认为最出色的项目介绍一下
 
    1. 介绍的项目最好有技术亮点。
    1. 可以包含以下几方面：技术栈，issue与fixed。对技术的探索以及在团队中的影响力。
 
1. github上长关注哪些人？你的github地址，有写过开源项目吗？

    *大公司比较在乎这一点，考察你对前端的热爱程度*
    
    1. 活跃在npm上的git人物
    1. 身边的前端git
    
1. 你认为前端有哪些发展方向,你的目标/职业规划是什么

    *最好切合团队的背景，如果不了解团队背景，可以分几个方向介绍。如：*

    1. 资深前端开发\商业业务开发工程师
    1. 全栈工程师（后端语言，网络请求，服务器，网络资源）
    1. 游戏工程师（游戏引擎，游戏算法，面向对象）
    1. 算法工程师（人工智能、机器学习、数据挖掘、检索推荐）
    1. 移动端工程师（混合开发、组件化、单页面）
    1. 前端架构师（网络安全、性能优化）
    1. 前端领队\总监（综合能力）

1. 从上家公司离职的原因是什么?

    *切记不要说你对公司不满意或者工作不好，工资低、学不到东西之类。给人感觉心浮气躁，不能适应环境而且独立学习能力较差。建议以正能量或者前途为导向，如：*

    1. 团队没有过高的技术要求，公司的发展前景不大。
    1. 贵公司有我理想的工作氛围，能让我更快的成长，并且发挥我的技术优势。
    1. 个人能力已经超出公司的业务/技术瓶颈，想寻求更好的发展。

6. 你工作遇到最大的挑战是什么,你是如何解决的?

    *不要说一些很简单的技术点或者众所周知的技术细节，可以说一些前端公认的技术难题:*
				
    1. hybird混合开发
    1. 移动端调试
    1. node服务器瓶颈与异常处理
    1. 性能优化
    1. 后端数据推送
    1. npm与node版本
    1. 项目构建\部署
    1. 状态与组件维护
    1. ...
    
7. 你在北京工作几年了?结婚了吗?

    *主要考察你的稳定性和成熟度，工作年限以及跳槽间隔能体现个人稳定性，切记不要心浮气躁，把理想说的太分散。*
    
    *结婚的人多数追求稳定，不希望频繁换工作，能给予更多的信任和依赖，同样的，结婚的人没有年轻人的拼劲和韧性。*


## CSS基础题

1. 说出你所知道的所有居中方案,越多越好。
1. 解释一下文字顶线\中线\基线\底线,当line-height:20px,font-size:14px时,几条线的位置分别是多少像素.为什么图片与文字不能垂直居中对齐
1. 选择器：请描述一下 :first-child:nth-last-child(n+4)的含义
1. 你所知道的css长度单位,颜色函数与常用关键字有哪些,以及如何使用这些关键字做到低耦合
1. 左右各15像素外边距元素,元素内部有三个两端对齐的子元素,子元素宽度比为1:2:3,子元素间距5px,如何实现这样的布局
1. 如何实现珊格\瀑布流布局
    1. 珊格布局：float+百分比，空隙采用margin-left。响应式只设最小值
    1. 瀑布流布局：多个瀑布，使用js判断每个瀑布的offsetHeight，取值最小的插入新片段。

1. 描述下sass/less/precss/stylus等最佳实践
    1. 层级不要使用过多，以免解析时间过长。
    2. 越往内，使用速度快选择器，越往外，使用速度慢的选择器。因为css是从内向外查找。
    3. 抽取公共样式，例如clear-fix,ellipse,1px等。抽取primary样式以及色调。
    4. 样式重置。
    5. 多使用计算值，多使用em,少使用px。

1. 描述css计算值与实际值的区别,选择器权重
1. 如何实现宽度为屏幕宽度,高度等于宽度的div
1. 如何实现两端对齐
1. 描述一下css的继承性
1. 预编译的变量没有编译，可能原因是什么？

    使用变量的代码导入早于编译变量的代码导入
1. 介绍下float/IE6/bfc/ifc的bug的解决方案
1. 如何提高css性能


## JS基础题

1. 描述下执行环境\作用域链与活动对象的关系,执行环境与作用域链是用什么数据结构存储,描述运行与销毁的时机与内存分配关系
1. 详细描述闭包的原理,闭包的优点与缺点分别是什么?描述下早期浏览器为什么会产生闭包内存溢出以及如何避免内存溢出
1. 详细描述this指向, var $=document.querySelector;var queryButton=$('#queryButton');运行这句话,会有什么结果?如果修改其中的bug
1. javascript参数是值传递还是引用传递?实参与形参是两个变量还是一个变量?
1. 如何判断属性是否是对象自身的属性,如何判断属性是否是原型链的属性?

    ```
    function hasPrototypeProperty(object,name){
        return !object.hasOwnProperty(name)&&(name in object);
    }
    ```
1. 描述下的垃圾回收机制
1. Promise是如何实现的?同步与异步如何处理？

    ```
    Promise.all,Promise.reduce,使用发布订阅实现
    ```
1. 写出你知道的移动端所有事件（PC事件除外），以及触发关系，并且写出如何消除300ms延迟

    1. touchstart->touchmove->touchend->click
    1. 原生：使用touchstart事件代替click事件
    1. 使用fastclick,tap事件（处理点击穿透）

1. 描述下es6解构赋值,箭头函数,generator,模块化
    口述即可
1. 如何编写插件,如何无new关键字创建对象
1. 描述下commonjs,amd,cmd,exports与module.exports区别
1. 说出(function(){})(),(function(){}())的区别
1. Object与Function的关系
1. setInterval执行时机，为什么会出现时间不准的问题

    因为每次执行都是等cpu空闲才执行，所以每次都会有一定的延迟
1. JQuery,domready,动画如何实现?

## 设计模式
1. 如何实现单例模式,如何实现依赖注入,写出发布订阅模式
1. 描述下函数式编程/柯里化/泛化
1. 如何避免大量使用if,switch判断而导致方法难以维护?

## JS编码题
1. 编写函数add，使得console.log(add(1)(2))输出3，console.log(add(1)(2)(3))输出6
1. 编写"123456789"转化成"$123,456,789"的转换函数

    ```
    var re = /(?=(?!\b)(\d{3})+$)/g;
    ```
1. 输出什么内容,如果把var换成let会怎样？

    ```
	var a=1;
	function f(){
		console.log(this.a+a);
		var a=2;
		console.log(this.a+a);
	}
	f();
    ```
1. 输出什么内容？

    ```
	function f1(){console.log(this.a);}
	function f2(){this.a=1;}
	f2.prototype.a=2;
	f2.a=3;
	f1.call(f2)
	f1.call(new f2);
	```

1. 输出什么内容

    ```
    var F=(function(){
		var self;
		function A(name){
			if(!self){
				self=this;
			}

			self.name=name;
			return self;
		}

		A.prototype.say=function(name){
			document.write(this.name+":"+name+"<br/>");
		}

		return A;
	});

	var A=F();
	var a=new A("A");
	var b=new A("B");
	a.say("A");		//this.name=a对象.name=self.name=B
	b.say("B");		//this.name=b对象.name=self.name=B
	document.write(a==b);	//a对象=b对象=self

	```

1. 问题1：用户点击页面，输出什么内容？问题2：next回调取自于参数，参数fn2已经存在闭包内,应该执行哪个函数，为什么？

    ```
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
	```

1. 编写函数，实现isType('number')(15)返回true，其中number,15为变量,然后实现生成检测函数的函数，如isNumber(15)返回true。
类似题：编写函数isnumber(15)返回true,实现类似功能。

    ```
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
    ```

## Node

1. 描述Node.js的内存泄漏的原因
1. Node作为后端的项目，一般如何保证其正常的运作

    1. 服务器负载以及down掉重启
    2. 日志系统：完备的请求以及异常日志
    3. 良好的结构分层与路由系统设计
    4. 注意中间件的使用时机
    5. 不要出现全局进程处理
1. 怎么在Node里实现一个类似php里的sleep()函数？

    ```
    function sleep(sleepTime) {
        for(var start = +new Date; +new Date - start <= sleepTime; )         { }
    }
    ```
1. Node 自诩异步编程是它的优势，为什么在引用外部包的时候（require()函数）是同步方法，而非异步方法

    如果是异步方法，不能保证加载顺序，使用时候，可能没有加载完毕导致使用变量报错。
1. Node 里有readFile和对应的同步方法readFileSync，但http.get() 却没有 http.getSync()，如果要实现一个http.getSync()，怎么做？

    http.get采用EventEmitter实现。复制http.get函数，不采用事件发射器而返回一个闭包函数，函数参数传递req,res对象即可。
1. Node中事件与浏览器中事件的区别
1. Node require机制
1. 常用的npm包有哪些?

    config,tiny-cookie,csv,delegates,injecting,minimist,noflux,readline,request,restify_client,restify_server,superagent,moment,vinyl-fs等

## 移动端

1. 描述下移动端适配
    字体：
    1. 固定像素
    1. 响应式+设置像素
    1. rem（不建议使用,会出现如13,15或者小数等情况）

    布局：
    1. 基础rem布局：淘宝Flexible自适应方案
    1. 宽度百分比布局
    1. 通过C3的Flex\Column等布局
    1. 固定像素布局(设置width=320px,两侧留白)

1. 谈谈移动端的坑
    1. 1px bug
    1. 部分事件与pc端有差异，点击穿透300ms延迟
    1. fixed定位与transform、input冲突
    1. 单击无法冒泡到body标签
    1. 滚动（屏）卡顿
    1. 样式不要忘记重置（如电话号码识别，高亮等）

1. 简述H5,Native和Hybird的优缺点
    1. Native:效率最高，用户体验最好，但开发与发版也最慢。
    2. H5:开发最快，难度最小。内存占用率较高，效率与用户体验最差，无法调用原生app功能。
    3. Hybird:结合两者的优点，使开发效率、功能与用户体验、运行流畅度上均有良好表现。缺点是技术复杂性过高，多app版本兼容性以及很难同时找到二者都熟悉的人。

1. js如何调用native,native如何调用js
    1. JS调用java
        1.Java调用JS
    ```
    webView.addJavascriptInterface(new JsInteration(), “androidNative”);//注册JSInterface
    window.androidNative.helloJS(); //使用JSInterface
    ```

    1. Java调用JS
    ```
    webView.loadUrl(“javascript:code...”)
    ```

1. 浏览器内核有哪些？

    Trident,Gecko,Webkit,Blink,X5,Chromium

## Http

1.跨域
    1. cors以及如何确保安全性
    1. 如何做到post请求跨域
    1. jsonp在js和jq实现有何区别
    1. Flash跨域原理
    1. H5跨域原理
    1. Iframe如何跨域

1. 描述下加密与身份验证
    1. 对称加密：服务端与客户端采用同一个加密算法进行加密解密。
    2. 非对称加密（rsa）：加密密钥（即公开密钥）PK是公开信息，而解密密钥（即秘密密钥）SK是需要保密的。加密算法E和解密算法D也都是公开的。虽然解密密钥SK是由公开密钥PK决定的，但却不能根据PK计算出SK。
    3. 签名算法
        两端根据密钥-随机字符串与加密算法生成相同的身份字符串，通过对比身份字符串验证身份，不解密。该算法在一段时间内生成的随机字符串产生的身份字符串相同。
    4. 数字证书
        传输证书包含一个公开密钥、证书版本号、序列号、签名算法、颁发者、有效期等信息，需要与服务端信息校验通过后方可使用。只在指定时间内生效。

1. 发起网络请求过程
1. 说出常用的状态码，302与304/502与503/100与101的区别？哪些请求是失败的？

    301:永久转发
    302:临时转发
    304:客户端重定向

    502:服务器暂时维护
    503:服务器过载\维护\down掉

    100——客户必须继续发出请求
    101——客户要求服务器根据请求转换HTTP协议版本

1. 说出常用的头部字段

    Content-type
    Content-length
    Accept
    Accept-language
    Connection
    Cache-control
    Cookie与Set-Cookie
    Authenticate
    ...

1. 说出常用的rest请求类型与body类型
    1. get,post,put,delete,head,trace,options等
    2. form-data,urlencode,raw(text,json,xml等),bin(二进制文件)

1. 描述下CDN与DNS，后台如何设置文件缓存，dns查找怎么设置缓存
    1. dns：域名解析，把域名解析成IP地址。顺序：浏览器-操作系统-代理服务器-网关-根服务器
    2. cdn: 实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。
    2. 通过cache-control机制设置缓存，具体参考《缓存》
    3. <link rel="dns-prefetch" href="//host/"> 缓存域名
1. Webworker与WebSocket应用在哪些场景
    1. webworker：前端需要耗时计算，又不影响界面的异步任务。
    2. websocket：需要与服务器保持长连接与后端推送。

1.Http1.1,Https，描述下SSL与长连接

    Http1.1 中请求头有connection:keep-alive字段，代表tcp连接不关闭，当建立里一个tcp连接以后，可以处理多个http请求，通过把建立和释放TCP连接的开销分摊到多个请求上。

    Https,在http与tcp加了一层ssl

    1. 客户端将它所支持的算法列表和一个用作产生密钥的随机数发送给服务器
    1. 服务器从算法列表中选择一种加密算法，并将它和一份包含服务器公用密钥的证书发送给客户端；该证书还包含了用于认证目的的服务器标识，服务器同时还提供了一个用作产生密钥的随机数；
    1. 客户端对服务器的证书进行验证，并抽取服务器的公用密钥；然后，再产11. 生一个称作pre_master_secret的随机密码串，并使用服务器的公用密钥对1. 其进行加密，并将加密后的信息发送给服务器
    1. 客户端与服务器端根据pre_master_secret以及客户端与服务器的随机数值1. 独立计算出加密和MAC密钥
    1. 客户端将所有握手消息的MAC值发送给服务器
    1. 服务器将所有握手消息的MAC值发送给客户端


## 工程化

1. 你常用哪些构建工具？优缺点是什么
    1. fis：模块化、发布部署、资源定位等集成解决方案，0配置即可使用
    2. gulp：基于流的快速的文件操作功能，主要用来代码检查，构建，编译，可以定制任务。过于依赖插件，除了构建，其他方面几乎没有。
    3. webpack：模块化、服务器、编译、打包、部署等功能。缺点是模块化代码过于复杂，没用的代码较多，需借助sourcemap工具调试。
    4. yeoman：结合了grunt,bower,yo的工具，用来生成项目结构、编译、图片优化、单元测试等。

1. webpack模块化与browerify区别，工程中Webpack中作用
    1. webpack大而全，缺点是生成文件太烂，底层设计不透明。
    2. 作为服务器热启动相关配置复杂。

1. guant与gulp的区别？gulp的主要方法有哪些？
    1. grunt操作文件而gulp操作流数据，最后统一生成文件。
    2. src,dest,pipe,task,watch等


## MVC框架

1. Angular，React的出现解决了什么问题，优缺点有哪些？

    1. 页面dom大量交互，需要批量更新修改页面结构。
    2. 大量重复业务难以维护。
    3. 页面出现批量的dom与数据交互。

    1. angular：mvc框架，强大的模板与双向数据绑定，依赖注入等能很轻松的实现复杂业务交互。缺点就是大量dom更新时候效率较低。组件化也不是很完善。
    2. react:v框架，虚拟节点+dom diff渲染速度快。易实现组件化。缺点是功能不够完善，缺乏数据处理，校验与双向绑定等。

1. React

    1. 单向数据流与双向数据流的区别是什么？
        1. 单向数据流：数据驱动界面。优点：数据流动方向可以跟踪，追查问题的时候可以跟快捷。缺点：就是写起来不太方便，要使UI发生变更就必须创建各种action来维护对应的state。
        2. 双向流动：值与界面双绑定，优点：方便。缺点：由于各种数据相互依赖相互绑定，导致数据问题的源头难以被跟踪到。

    1. 描述一下react的服务器端渲染
        1. 在node端渲染react模板生成html字符串，包括页面结构返回到前端，前端页面渲染时发起js请求返回react.js与react-dom.js文件后重新渲染页面并添加事件，页面发生了两次渲染。由于第二次js渲染通过dom-diff对比节点与后端返回的html节点的差异，所以第二次渲染没有任何变化。

    1. 如何做组件交互，如何实现数据双向绑定
        1. 父组件调用子组件可以通过refs调用。
        2. 子组件获取父组件可以通过传递参数调用，也可以直接传递状态。
        3. 如果父子组件层级过多，可以直接操作全局state（noflux）更新所有组件。

    1. 生命周期
        实例化

            getDefaultProps
            getInitialState
            componentWillMount
            render
            componentDidMount

        存在期

            componentWillReceiveProps
            shouldComponentUpdate
            componentWillUpdate
            render
            componentDidUpdate

        销毁&清理期

            componentWillUnmount

    1. dom diff算法

        1. 两个相同组件产生类似的DOM结构，不同的组件产生不同的DOM结构。
        1. 对于同一层次的一组子节点，它们可以通过唯一的id进行区分。
        1. 当在树中的同一位置前后输出了不同类型的节点，React直接删除前面的节点，然后创建并插入新的节点。
        1. 当只有属性改变时，只改变节点属性。

1. react,angular,vue哪个实现了webcomponent规范？

    1. 都没有实现webcomponent规范
    2. angular2实现了webcomponent规范
    3. 更多关于webcomponent，请参考http://fex.baidu.com/blog/2014/05/web-components-future-oriented/







