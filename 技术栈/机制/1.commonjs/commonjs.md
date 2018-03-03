##区别
1. 对于依赖的模块AMD是提前执行，CMD是延迟执行。不过RequireJS从2.0开始，也改成可以延迟执行（根据写法不同，处理方式不通过）。 

1. CMD推崇依赖就近，AMD推崇依赖前置。虽然 AMD 也支持 CMD 的写法，同时还支持将 require 作为依赖项传递，但 RequireJS 的作者默认是最喜欢上面的写法，也是官方文档里默认的模块定义写法。
 
1. AMD 的 API 默认是一个当多个用，CMD 的 API 严格区分，推崇职责单一。比如 AMD 里，require 分全局 require 和局部 require，都叫 require。CMD 里，没有全局 require，而是根据模块系统的完备性，提供 seajs.use 来实现模块系统的加载启动。CMD 里，每个 API 都简单纯粹。
 
1. 还有一些细节差异，具体看这个规范的定义就好，就不多说了。另外，SeaJS 和 RequireJS 的差异，可以参考：https://github.com/seajs/seajs/issues/277

###AMD

1. 第一个参数 id 为字符串类型，表示了模块标识，为可选参数。若不存在则模块标识应该默认定义为在加载器中被请求脚本的标识。如果存在，那么模块标识必须为顶层的或者一个绝对的标识。
1. 第二个参数，dependencies ，是一个当前模块依赖的，已被模块定义的模块标识的数组字面量。
1. 第三个参数，factory，是一个需要进行实例化的函数或者一个对象。
		
		//一个返回函数的异步模块
		define("alpha", [ "a", "b", "c" ], function( a, b, c ){
			return function(num){
				return a.fun(num)+b.fun(num)+c.fun(num);				
			}
		});

		//无依赖模块可以直接使用对象字面量来定义
		define( {
		    add : function( x, y ){
		        return x + y ;
		    }
		} );

		//异步加载
		define( function( require, exports, module){
		    require(['./add'],function(add){
		        add(1,2);
		    })
		} );

		//虽然 AMD也支持CMD写法，但依赖前置是官方文档的默认模块定义写法。 
		define( function( require, exports, module){
		    var add = require('./add');
		
		    exports.add = function(a,b){
		        return add(a,b);
		    };
		} );

		//加载一个模块
		require(["./scripts/util"], function(util) {
            console.log(util.add(1,2));
        });


###CMD

		//一个返回函数的异步模块
		define( function( require, exports, module){
		    var add = require('./add');
		
		    //软依赖 
		    if (status) { 		     
		        var del = requie('./del'); 
		        del.test(); 
		    } 
		
		    exports.add = function(a,b){
		        return add(a,b);
		    };
		} );

		//其与 AMD 规范用法不同。
		define( 'module', ['module1', 'module2'], function( require, exports, module ){
		    //模块代码
		} );

		//require是同步往下执行的，需要的异步加载模块可以使用require.async 来进行加载：
		define( function(require, exports, module) { 
		    require.async('.a', function(a){
		        a.doSomething();
		    });
		});

		//加载一个模块 
		seajs.use('./a');
		//加载模块，加载完成时执行回调
		seajs.use('./a'，function(a){
		    a.doSomething();
		});
		//加载多个模块执行回调
		seajs.use(['./a','./b']，function(a , b){
		    a.doSomething();
		    b.doSomething();
		});


###注意
		//与nodeJS中一样需要注意的是，一下方式是错误的：
		define(function( require, exports ){
		    exports = {
		        foo : 'bar', //向外提供的属性
		        do : function(){} //向外提供的方法
		    }
		});
	
		//需要这么做
		define(function( require, exports, module ){
		    module.exports = {
		        foo : 'bar', //向外提供的属性
		        do : function(){} //向外提供的方法
		    }
		});

		/*传入的对象引用可以添加属性，一旦赋值一个新的对象，那么值钱传递进来的对象引用就会失效了。开始之初，exports 是作为 module.exports 的一个引用存在，一切行为只有在这个引用上 factory 才得以正常运行，赋值新的对象后就会断开引用，exports就只是一个新的对象引用，对于factory来说毫无意义，就会出错。*/

###模块属性
   		//module 是factory的第三个参数，为一个对象，上面存储了一些与当前模块相关联的属性与方法。
        module.id 为模块的唯一标识。
        module.uri 根据模块系统的路径解析规则得到模块的绝对路径。
        module.dependencies 表示模块的依赖。
        module.exports 当前模块对外提供的接口。

###兼容多模块
	;(function(name,definition){
	    //检测上下文环境是否为AMD或CMD
	    var hasDefine = typeof define === 'function',
	        // 检测上下文环境是否为Node
	        hasExports = typeof module !== 'function' && module.exports;
	    if(hasDefine){
	        //AMD环境或CMD环境
	        define(definition);
	    }else if(hasExports){
	        //定义为普通Node模块
	        module.exports = definition();
	    }else{
	        //将模块的执行结果挂在window变量中，在浏览器中this指向window对象
	        this[name] = definition();
	    }
	
	})('hello',function(){
	    var hello = function(){}
	    return hello
	})