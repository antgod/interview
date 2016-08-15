function sum(num){
    var cache=num||0;
    function add(append){
        cache+=append;
        return add;
    }

    add.toString=function(){
        return cache;
    };

    return add;
}

console.log(sum(1)(2)(3));

var sum = (function(){
    var cache=0;
    function add(append){
        cache+=append;
        return add;
    }

    add.toString=function(){
        return cache;
    };

    return add;
})();

console.log(sum(1)(2)(3));