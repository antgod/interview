# 现场编程题

## 1 倒序排列
根据输入的英文句子，实现一个方法，倒序排列所有单词。

Input：
```
We usually talk about past experience,but more importantly:future goals. 
```

Output:
```
goal future:importantly more but,experience past about talk usually We.
```

## 2 排序数组

根据输入的数组中每项的 before/after/first/last 规则，输出一个新排好序的数组或者链表。要求，多解的情况可以只求一解，如果无解要求程序能检测出来。

Input:

```
[
    {id: 1},
    {id: 2, before: 1},
    {id: 3, after: 1},
    {id: 5, first: true},
    {id: 6, last: true},
    {id: 7, after: 8},
    {id: 8},
    {id: 9},
]
```

## 3 根据扁平数据组装树

将输入的数组组装成一颗树状的数据结构，时间复杂度越小越好。要求程序具有侦测错误输入的能力。

Input:

```
[
    {id:1, name: 'i1'},
    {id:2, name:'i2', parentId: 1},
    {id:4, name:'i4', parentId: 3},
    {id:3, name:'i3', parentId: 2},
    {id:8, name:'i8', parentId: 7}
]
```

## 4 构造HTML语法树

实现一个AST解析方法，解析下列输入(AST格式可以自定义)。

Input:
```
<div class="widget-body" data-spm-anchor-id="a1z4o.xxss.i3.14803e15bAFF41">
     <span class="ctr-val g-csscut-more" style="display: inline-block;vertical-align: top;width:200px;”><a target="_blank" href="positionDetail.htm?id=44106" title="欢迎应聘蚂蚁金服支付宝前端工程师-杭州、上海、北京、成都">欢迎应聘蚂蚁金服支付宝前端工程师-杭州、上海、北京、成都</a></span>
</div>
```
