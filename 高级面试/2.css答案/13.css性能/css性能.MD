1.合理安排selectors

2.高消耗属性:千万不要组合使用

box-shadow border-radius transforms css filters transparency

3.重排元素

width height padding margin display border-width border top
position font-size float text-align overflow-y font-weight
overflow left font-family line-height vertical-align right
clear white-space bottom min-height

4.重绘元素
color border-style visbility background text-decoration
background-* outline-* box-shadow-border-radius

5.
利用gpu,开启gpu加速

6.css will change (http://www.cnblogs.com/yuzhongwusan/p/4186405.html)

.element:hover {
    will-change: transform;
    transition: transform 2s;
    transform: rotate(30deg) scale(1.5);
}

不要优化所有元素

7.requestAnimationFrame

与Page Visibility(http://www.zhangxinxu.com/wordpress/2012/11/page-visibility-api-introduction-extend/)
冲突

8.web animations
http://web.jobbole.com/82106/





































