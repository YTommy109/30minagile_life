export const life = {
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
  }
}
