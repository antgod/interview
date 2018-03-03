setTimeout(() => console.log(1), 0)
new Promise((res => {
  res(2)
})).then(console.log)

console.log(3)