// 加入两个nextTick()的回调函数
//process.nextTick(function () {
//    console.log('nextTick 执行1');
//});
//process.nextTick(function () {
//    console.log('nextTick 执行2');
//});
// 加入两个setImmediate()的回调函数
setImmediate(function () {
    console.log('setImmediate 执行1');
    // 进入下次ْ循环
    process.nextTick(function () {
        console.log('强势势֭入');
    });
});
setImmediate(function () {
    console.log('setImmediate 执行2');
});

console.log('正常执行'); 