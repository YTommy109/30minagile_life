
export const life = {
  size: 0,
  countNeighbor: neighbors => {
    return neighbors.flat().reduce((acm, it)=>{
      acm[it] = (acm[it] || 0) + 1
      return acm
    }, {})
  },
  neighbor: ([x, y]) => {
    return [
      [x-1,y-1],[x,y-1],[x+1,y-1],
      [x-1,y],          [x+1,y],
      [x-1,y+1],[x,y+1],[x+1,y+1]
    ]
  },
  noticeAll: lifes => {
    return life.countNeighbor(lifes.map(life.neighbor))
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
