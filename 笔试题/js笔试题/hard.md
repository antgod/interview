// 4选3题，答题1小时，可以提前交卷

### 1.实现 EventEmitter
  
#### 题目
```js
class EventEmitter {

// code goes here

}
```

#### 测试

```js
const ee = new EventEmitter();

ee.on('normal1', (arg1, arg2) => { console.log(`normal event emitted ${arg1}, ${arg2}`); });

ee.once('normal2', () => { console.log('normal event emitted'); });

ee.once('once', () => { console.log('once event emitted'); });

ee.emit('normal1', 'hello', 'world'); // normal event emitted hello, world

ee.emit('once'); // once event emitted

ee.emit('once'); // 不打印

ee.off('normal1');

ee.emit('normal1'); // 不打印

ee.off();

ee.emit('normal2'); // 不打印
```

### 2.判断括号是否正确闭合

#### 题目

给定一些包含单字符括号对的字符串，判断括号是否正确闭合。正确闭合的条件有两个，一是所有

左括号必须对应有右括号，二是括号闭合的顺序要准确

```js
const pairs = [

['(', ')'],

['{', '}'],

['[', ']'],

];

function isAllPairsValid(str) {

// code goes here

}
```

#### 测试

```js
console.log(isAllPairsValid('(([)]')) // false

console.log(isAllPairsValid('[((test)foo)]{bar}{hey}')) // true
```

### 3.寻找特定 IP

#### 题目
IPV4 的 IP 地址是32位的二进制数，为增强可读性，通常我们以8位为1组进行分割，

用十进制来表示每一部分，并用点号连接，譬如 192.168.1.1。显然，存在这样的 IP 地址，

0到9十个数字各出现一次。具备这样特征的 IP 地址里，表示成二进制数时，二进制数左右对称

（也就是“回文”，表示成32位二进制不省略0）的情况有几种，分别是哪些？要求性能尽可能高

```js

function findPalindromeIPAddresses() {

// code goes here

}
```

#### 测试
```js
console.log(findPalindromeIPAddresses());
```

### 4.给定一个字符串，请你找出其中不含有重复字符的最长子串的长度

#### 题目
```js
function lengthOfLongestUniqueSubStr(str) {

// code goes here

}
```

#### 测试
```js
console.log(lengthOfLongestUniqueSubStr('abcabcbb')) // -> 3

console.log(lengthOfLongestUniqueSubStr('bbbbbbbb')) // -> 1
```