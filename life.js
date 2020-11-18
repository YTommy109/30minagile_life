
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
    const ng = Object.entries(pops).map(([pos, pop]) => {
      const state = lifes.some(it => {
        return JSON.stringify(it) === `[${pos}]`
      })
      const temp = life.nextCell(state, pop)
  
      return temp ? pos : ''
    })

    return ng.filter(it => it !== '')
      .map(pos => pos.split(',').map(it => +it))
  }
}
