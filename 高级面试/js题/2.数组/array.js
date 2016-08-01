var numbers = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers.every(function(item, index, array){   //每一项满足条件
    return item ;
});
console.log(everyResult); //false
var someResult = numbers.some(function(item, index, array){     //有一项满足条件
    return (item > 4);
});
console.log(someResult); //true

