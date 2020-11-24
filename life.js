
export const life = {
  size: 0,
  sumHash: objs => {
    return objs.reduce((acm, it) => {
      Object.entries(it).forEach(([k,v])=>{
        acm[k] = (acm[k] || 0) + v
      })
      return acm
    }, {})
  },
  neighbor: (x, y) => {
    return [
      [x-1,y-1],[x,y-1],[x+1,y-1],
      [x-1,y],          [x+1,y],
      [x-1,y+1],[x,y+1],[x+1,y+1]
    ]
  },
  notice: pos => {
    return life.neighbor(pos[0],pos[1])
      .reduce((acm, it) => {
        acm[it] = 1
        return acm
    }, {})
  },
  noticeAll: lifes => {
    return life.sumHash(lifes.map(it => life.notice(it)))
  },
  nextCell: (state, pop) => {
    if (pop === 3) return true
    if (pop === 2) return state

    return false
  },
  nextLife: (lifes) => {
    const pops = life.noticeAll(lifes)
    lifes = lifes.map(String)
    return Object.entries(pops).reduce((acm, [pos, pop])=>{
      const state = lifes.includes(pos)
      const isActive = life.nextCell(state, pop)
      if(isActive) acm.push(pos.split(',').map(Number))
      return acm
    }, [])
  },
  getRow: (lifes=[], y=1) => {
    const data = new Array(life.size).fill('□')
    const xs = lifes
    .filter(([xx,yy]) => yy===y)
    .map(([x, y]) => x-1)
    xs.map(it => { data[it] = '■'})

    return data.join('')
  },
  print: (lifes) => {
    let cur = lifes
    for (let tm=0; tm<5; tm++) {
      for (let yy=1; yy<=life.size; yy++) {
        console.log(life.getRow(cur, yy))
      }
      cur = life.nextLife(cur)
      console.log('--- --- ---')
    }
  }
}
