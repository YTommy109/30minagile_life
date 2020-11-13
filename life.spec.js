// 1 オリジン
// ステートレス (オブジェクト指向は使わないつもり)

const sumHash = (objs) => {
  return objs.reduce((acm, it) => {
    Object.entries(it).forEach(([k,v])=>{
      acm[k] = (acm[k] || 0) + v
    })
    return acm
  }, {})
}

const neighbor = (x, y) => {
  return [
    [x-1,y-1],[x,y-1],[x+1,y-1],
    [x-1,y],          [x+1,y],
    [x-1,y+1],[x,y+1],[x+1,y+1]
  ]
}

const notice = (pos) => {
  return neighbor(pos[0],pos[1])
    .reduce((acm, it) => {
      acm[it] = 1
      return acm
  }, {})
}

const noticeAll = (lifes) => {
  const temp = lifes.map(it => notice(it))
  console.log(temp)
  return {
              [[1,0]]:1,[[2,0]]:1,[[3,0]]:1,
    [[0,1]]:1,[[1,1]]:2,[[2,1]]:1,[[3,1]]:1,
    [[0,2]]:1,[[1,2]]:1,[[2,2]]:2,[[3,2]]:1,
    [[0,3]]:1,[[1,3]]:1,[[2,3]]:1
  }
}

describe('初期処理ができること', () => {
})
describe('活性、不活性の状態変更ができること', () => {
  it.todo('座標を指定したら、活性すること')
})
describe('八近傍に活性通知のインクリメントができること', () => {
  it('1-2 の八近傍の座標を取得できること', () => {
    const exp = [
      [0,1],[1,1],[2,1],
      [0,2],      [2,2],
      [0,3],[1,3],[2,3]
    ]
    expect(neighbor(1,2)).toEqual(exp)
  })
  it('2-1 の八近傍の座標を取得できること', () => {
    const exp = [
      [1,0],[2,0],[3,0],
      [1,1],      [3,1],
      [1,2],[2,2],[3,2]
    ]
    expect(neighbor(2,1)).toEqual(exp)
  })
  it('2-1 の八近傍に生存通知ができること', () => {
    const exp = {
      [[1,0]]:1,[[2,0]]:1,[[3,0]]:1,
      [[1,1]]:1,          [[3,1]]:1,
      [[1,2]]:1,[[2,2]]:1,[[3,2]]:1
    }
    expect(notice([2,1])).toEqual(exp)
  })
  it('1-2 の八近傍に生存通知ができること', () => {
    const exp = {
      [[0,1]]:1,[[1,1]]:1,[[2,1]]:1,
      [[0,2]]:1,          [[2,2]]:1,
      [[0,3]]:1,[[1,3]]:1,[[2,3]]:1
    }
    expect(notice([1,2])).toEqual(exp)
  })
  it('連想配列の足し算ができること-1', () => {
    const org1 = {'a': 1}
    const org2 = {'a': 3, 'b':1}
    const exp = {'a':4, 'b':1}
    expect(sumHash([org1, org2])).toEqual(exp)
  })
  it('連想配列の足し算ができること-2', () => {
    const org1 = {'a': 1, 'c': 1}
    const org2 = {'a': 3, 'b':1}
    const org3 = {'c': 1}
    const exp = {'a':4, 'b':1, 'c':2}
    expect(sumHash([org1, org2, org3])).toEqual(exp)
  })
  xit('1-2 の八近傍に生存通知ができること', () => {
    const exp = {
      [[0,1]]:1,[[1,1]]:1,[[2,1]]:1,
      [[0,2]]:1,          [[2,2]]:1,
      [[0,3]]:1,[[1,3]]:1,[[2,3]]:1
    }
    expect(noticeAll([[1,2]])).toEqual(exp)
  })
  it('1-2, 2-1 の八近傍に生存通知ができること', () => {
    const exp = {
                [[1,0]]:1,[[2,0]]:1,[[3,0]]:1,
      [[0,1]]:1,[[1,1]]:2,[[2,1]]:1,[[3,1]]:1,
      [[0,2]]:1,[[1,2]]:1,[[2,2]]:2,[[3,2]]:1,
      [[0,3]]:1,[[1,3]]:1,[[2,3]]:1
    }
    expect(noticeAll([[1,2],[2,1]])).toEqual(exp)
  })
})

describe('次世代の判定ができること', () => {
  it.todo('過疎')
  it.todo('生存')
  it.todo('誕生')
  it.todo('過密')
})
describe('出力できること', () => {
  it.todo('コンソールに出力できること')
})
