const input = `(1, 2), (5, 3), (3, 1), (1, 2), (2, 4), (1, 6), (2, 3), (3, 4), (5, 6)`



function compute(input) {
  const constant = {
    group: /, (?=\()/,
    comma: ',',
  }

  const groups = input.split(constant.group)
  const last = groups.reduce((last, group) => {
    let [num1, num2] = group.substring(1, group.length - 1).split(constant.comma)
    num1 = num1.trim()
    num2 = num2.trim()
    last[num1] = (last[num1] || 0) + 1
    last[num2] = (last[num2] || 0) + 1
    return last
  }, {})

  Object.keys(last).forEach(k => {
    const v = last[k]
    if(v % 2 !== 0) {
      throw new Error('数据错误');
    }
  })

  return last
}

console.log(JSON.stringify(compute(input)))