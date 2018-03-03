  IFC(Inline Formatting Context),直译为“行内格式化上下文”，这是什么鬼的翻译啊？反正我对于名词一向采用拿来主义，理解名词背后的含义才是硬道理。
  我们简单理解为每个盒子都有一个FC特性，不同的FC值代表一组盒子不同的排列方式。有的FC值表示盒子从上到下垂直排列，有的FC值表示盒子从左到右水平排列等等。
  而IFC则是表示盒子从左到右的水平排列方式，仅此而已(注意：一个盒子仅且仅有一个FC值)。而inline-level box的FC特性值固定为IFC。
  另外仅处于in-flow的盒子才具有FC特性，也就是positioning scheme必须为Normal flow的盒子才具有FC特性。
  除了IFC外，对于inline-level box排版而言还有另一个重要的对象，那就是line box。line box是一个看不见摸不着的边框，
  但每一行所占的垂直高度其实是指line box的高度，而不是inline-level box的高度。