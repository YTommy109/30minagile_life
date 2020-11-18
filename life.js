
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
    return Object.entries(pops).reduce((acm, [pos, pop])=>{
      const state = lifes.includes(pos)
      const isActive = life.nextCell(state, pop)
      if(isActive) acm.push(pos.split(',').map(it => +it))
      return acm
    }, [])
  }
}
