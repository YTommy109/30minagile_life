export class LifeGame {
  constructor(size=0, lifes=[]) {
    this._size = size
    this._lifes = lifes
  }
  get size() {return this._size}
  get lifes() {return this._lifes}

  neighbor(pos) {
    const [x, y] = pos.split(',').map(it=>parseInt(it))
    return [
      [x-1,y-1], [x,y-1], [x+1,y-1],
      [x-1,y],            [x+1,y],
      [x-1,y+1], [x,y+1], [x+1,y+1]
    ]
  }
  population() {
    return this.lifes.reduce((acm, pos) => {
      this.neighbor(pos).map(it => acm[it] = (acm[it]||0) + 1)
      return acm
    }, {})
  }
  judge(pop, state) {
    if (pop === 3) return true
    if (pop === 2) return state
    return false
  }
  nextLife() {
    return Object.entries(this.population()).map(([pos, pop]) => 
      this.judge(pop, this.lifes.includes(pos))?pos:null
    ).filter(it=>it!==null)
  }
  display() {
    for (let y=1; y<=this.size; y++) {
      const row = new Array(this.size).fill('□')
      for (let x=1; x<=this.size; x++) {
        if (this.lifes.includes(`${x},${y}`)) {
          row[x-1] = '■'
        }
      }
      console.log(row.join(''))
    }
  }
}
