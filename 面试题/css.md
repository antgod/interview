# 原理
#### css选择器权重
#### css从指定值到最后浏览器解析，经过了哪些步骤
#### 页面reflow/repaint哪些改动会发生，如何减少reflow

- 初步介绍：

  repaint是某个DOM元素进行重绘；reflow是整个页面进行重排，也就是页面所有DOM元素渲染。字面意思来说：repaint就是重绘，reflow就是回流。repaint和reflow的目的是：展示一个新的页面样貌。

- 严重性：
  在性能优先的前提下，性能消耗 reflow大于repaint。

- 如何触发：
  - style变动造成repaint和reflow。
  - 不涉及任何DOM元素的排版问题的变动为repaint，例如元素的color/text-align/text-decoration等等属性的变动。  
  - 除上面所提到的DOM元素style的修改基本为reflow。例如元素的任何涉及长、宽、行高、边框、display等style的修改。

- 减少reflow
  - 尽可能在DOM末梢通过改变class来修改元素的style属性：尽可能的减少受影响的DOM元素。
  - 避免设置多项内联样式：使用常用的class的方式进行设置样式，以避免设置样式时访问DOM的低效率。
  - 设置动画元素position属性为fixed或者absolute：由于当前元素从DOM流中独立出来，因此受影响的只有当前元素，元素repaint。
  - 牺牲平滑度满足性能：动画精度太强，会造成更多次的repaint/reflow，牺牲精度，能满足性能的损耗，获取性能和平滑度的平衡。
  - 避免使用table进行布局：table的每个元素的大小以及内容的改动，都会导致整个table进行重新计算，造成大幅度的repaint或者reflow。改用div则可以进行针对性的repaint和避免不必要的reflow。
  - 避免在CSS中使用运算式：学习CSS的时候就知道，这个应该避免，不应该加深到这一层再去了解，因为这个的后果确实非常严重，一旦存在动画性的repaint/reflow，那么每一帧动画都会进行计算，性能消耗不容小觑。

# 基础
## 层叠上下文
[层叠上下文](http://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)
#### 解释下CSS层叠上下文与块状上下文（BFC），层叠上下文何时会启用z-index属性

每一个盒子处在三维空间中。除了水平轴和垂直轴外，还有一个z轴（z-axis），这三个轴共同决定了盒子在三维空间中的位置。

处于同一子节点并且position不为static且z-index不为auto的节点。

#### 层叠上下文顺序(由上而下)：
- 正z-index
- z-index: auto或z-index: 0
- line/link-block
- float
- block块状盒子
- 负z-index
- background/border

## 其他
#### position使用原理
#### css的盒模型是什么？
- 基础考察点：margin/border/padding/content的理解
- 扩展考察点：box-sizing的设置影响，什么场景需要？浏览器实现的影响
- 现场考察点：画出来

#### 只有一层DIV元素，如何给它设置2个边框颜色？
- 基础考察点：对outline/box-shadow/伪元素的理解
- 扩展考察点：是否还有别的实现方式
- 现场考察点：如果需要圆角怎么做？

#### 什么是浮动？有什么需要注意的吗？
- 基础考察点：对float/clear的理解，Block formatting context（BFC）的理解
- 扩展考察点：典型使用场景
- 现场考察点：实现一个多栏布局

#### position与z-index的作用关系？
- 基础考察点：position的值设置，是否会影响到z-index的生效作用
- 扩展考察点：典型使用场景
- 现场考察点：碰到过的问题

#### 隐藏元素有哪些方法？
- 基础考察点：display/visibility/opacity/hight/width/position
- 扩展考察点：各自的优缺点
- 现场考察点：无

#### 什么情况下会发生margin重叠的情况？如何解决？
- 基础考察点：margin的理解，Block formatting context（BFC）的理解
- 扩展考察点：典型的场景
- 现场考察点：规避方法

#### 不定宽高的对话框，如何实现水平和垂直居中？
- 基础考察点：实现方式的多样性
- 扩展考察点：如果有图片怎么办？
- 现场考察点：无

#### viewport的作用是什么？常用的控制属性有哪些？
- 基础考察点：width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0
- 扩展考察点：viewport-fit=cover
- 现场考察点：无

#### h5的高清方案是怎么做的？有哪些？
- 基础考察点：rem的理解、viewport的理解
- 扩展考察点：典型的场景
- 现场考察点：无

#### 如何实现绝对1px实线和虚线？
- 基础考察点：原理和实现方式
- 扩展考察点：圆角场景
- 现场考察点：虚线怎么做

#### 对弹性盒子模型的理解是什么？什么场景下会考虑使用它？
- 基础考察点：flexbox组合属性的理解（align-items/justify-content/flex/flex-shrink/flex-grow）
- 扩展考察点：浏览器历史兼容性、解决方案
- 现场考察点：典型场景、替代的方案实现

#### 如何实现列数不固定的表格，每一列均匀等宽分布？
- 基础考察点：对于width: 1%的理解
- 扩展考察点：表格的构成元素
- 现场考察点：无

#### 现在有一个页面元素，利用transition/transform实现了从右下角到左上角的动画渐变，但是发现opera有明显卡顿，如何解决？
- 基础考察点：attribute/duration/tranform function/@keyframe
- 扩展考察点：动画的设计思路
- 现场考察点：可能的性能问题、animate.css

#### 有使用过less/sass等工具吗？使用它们会带来什么好处和坏处？
- 基础考察点：如何构建，网格应用
- 扩展考察点：有什么问题，典型抽取函数的场景
- 现场考察点：有哪些好的实践方案

# css3

- flex几个版本，多版本兼容性问题，postcss插件预处理
各阶段草案命名。
```
W3C 2009年第1次草案：display:box;
W3C 2011年第2次草案：display:flexbox | inline-flexbox;
W3C 2012年第5次草案及以后的候选推荐标准：display:flex | inline-flex;
。
```
- 谈谈之前如何做移动端适配和1px实现方法
rem，mediaquery，viewport scale做高清适配的优缺点

- 图片优化
base64的原理、sprite图的使用场景，webp检测

- 动画使用bezier曲线，animation/transition使用


