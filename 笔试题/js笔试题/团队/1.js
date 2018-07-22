const input = `Allegoric Alaskans;Blithering Badgers;win
Devastating Donkeys;Courageous Californians;draw
Dragon Team;Courageous Californians;win
Dragon Team;Blithering Badgers;win
Devastating Donkeys;Allegoric Alaskans;win
Courageous Californians;Blithering Badgers;loss
Blithering Badgers;Devastating Donkeys;loss
Allegoric Alaskans;Courageous Californians;win`



function compute(input) {
  const constant = {
    line: '\n',
    team: ';',
    win: 3,
    draw: 1
  }
  const rulesHost = {
    win: score => score + constant.win,
    draw: score => score + constant.draw,
    loss: score => score,
  }
  
  const rulesFellow = {
    win: rulesHost.loss,
    draw: rulesHost.loss,
    loss: rulesHost.win,
  }

  const sessions = input.split(constant.line)
  const results = {}
  sessions.map(session => {
    const [ team1, team2, result ] = session.split(constant.team)
    const current1 = results[team1] || 0
    const current2 = results[team2] || 0
    
    results[team1] = rulesHost[result](current1)
    results[team2] = rulesFellow[result](current2)
  })

  const final = Object.keys(results).map(key => ({ score: results[key], name: key }))

  return final.sort((n1, n2) => {
    const winLos = n2.score - n1.score
    return winLos === 0 ?  n1.name.localeCompare(n2.name)  : winLos 
  })
}

console.log(JSON.stringify(compute(input)))