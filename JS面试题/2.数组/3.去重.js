/*
 其中第1种和第3种方法都用到了数组的indexOf方法。
 此方法的目的是寻找存入参数在数组中第一次出现的位置。
 很显然，js引擎在实现这个方法的时候会遍历数组直到找到目标为止。所以此函数会浪费掉很多时间。
 而第2中方法用的是hash表。把已经出现过的通过下标的形式存入一个object内。
 下标的引用要比用indexOf搜索数组快的多。

 为了判断这三种方法的效率如何，我做了一个测试程序，生成一个10000长度的随机数组成的数组，
 然后分别用几个方法来测试执行时间。 结果表明第二种方法远远快于其他两种方法。 但是内存占用方面
 应该第二种方法比较多，因为多了一个hash表。这就是所谓的空间换时间。  就是这个测试页面，你也可以去看看。
 */

Array.prototype.unique1 = function () {
    var n = []; //一个新的临时数组
    for (var i = 0; i < this.length; i++) //遍历当前数组
    {
        //如果当前数组的第i已经保存进了临时数组，那么跳过，
        //否则把当前项push到临时数组里面
        if (n.indexOf(this[i]) == -1) n.push(this[i]);
    }
    return n;
};
Array.prototype.unique2 = function () {
    var n = {}, r = []; //n为hash表，r为临时数组
    for (var i = 0; i < this.length; i++) //遍历当前数组
    {
        if (!n[this[i]]) //如果hash表中没有当前项
        {
            n[this[i]] = true; //存入hash表
            r.push(this[i]); //把当前数组的当前项push到临时数组里面
        }
    }
    return r;
};
Array.prototype.unique3 = function () {
    var n = [this[0]]; //结果数组
    for (var i = 1; i < this.length; i++) //从第二项开始遍历
    {
        //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
        //那么表示第i项是重复的，忽略掉。否则存入结果数组
        if (this.indexOf(this[i]) == i) n.push(this[i]);
    }
    return n;
};
