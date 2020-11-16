import {life} from './life'
// 1 オリジン
// ステートレス (オブジェクト指向は使わないつもり)

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
    expect(life.neighbor(1,2)).toEqual(exp)
  })
  it('2-1 の八近傍の座標を取得できること', () => {
    const exp = [
      [1,0],[2,0],[3,0],
      [1,1],      [3,1],
      [1,2],[2,2],[3,2]
    ]
    expect(life.neighbor(2,1)).toEqual(exp)
  })
  it('2-1 の八近傍に生存通知ができること', () => {
    const exp = {
      [[1,0]]:1,[[2,0]]:1,[[3,0]]:1,
      [[1,1]]:1,          [[3,1]]:1,
      [[1,2]]:1,[[2,2]]:1,[[3,2]]:1
    }
    expect(life.notice([2,1])).toEqual(exp)
  })
  it('1-2 の八近傍に生存通知ができること', () => {
    const exp = {
      [[0,1]]:1,[[1,1]]:1,[[2,1]]:1,
      [[0,2]]:1,          [[2,2]]:1,
      [[0,3]]:1,[[1,3]]:1,[[2,3]]:1
    }
    expect(life.notice([1,2])).toEqual(exp)
  })
  it('連想配列の足し算ができること-1', () => {
    const org1 = {'a': 1}
    const org2 = {'a': 3, 'b':1}
    const exp = {'a':4, 'b':1}
    expect(life.sumHash([org1, org2])).toEqual(exp)
  })
  it('連想配列の足し算ができること-2', () => {
    const org1 = {'a': 1, 'c': 1}
    const org2 = {'a': 3, 'b':1}
    const org3 = {'c': 1}
    const exp = {'a':4, 'b':1, 'c':2}
    expect(life.sumHash([org1, org2, org3])).toEqual(exp)
  })
  it('1-2, 2-1 の八近傍に生存通知ができること', () => {
    const exp = {
                [[1,0]]:1,[[2,0]]:1,[[3,0]]:1,
      [[0,1]]:1,[[1,1]]:2,[[2,1]]:1,[[3,1]]:1,
      [[0,2]]:1,[[1,2]]:1,[[2,2]]:2,[[3,2]]:1,
      [[0,3]]:1,[[1,3]]:1,[[2,3]]:1
    }
    expect(life.noticeAll([[1,2],[2,1]])).toEqual(exp)
  })
  it('1-2 の八近傍に生存通知ができること', () => {
    const exp = {
      [[0,1]]:1,[[1,1]]:1,[[2,1]]:1,
      [[0,2]]:1,          [[2,2]]:1,
      [[0,3]]:1,[[1,3]]:1,[[2,3]]:1
    }
    expect(life.noticeAll([[1,2]])).toEqual(exp)
  })
})

describe('次世代の判定ができること', () => {
  it('不活性セルの周囲のセルが 2 なら、不活性であること', () => {
    expect(life.nextCell(false, 2)).toBe(false)
  })
  it('活性セルの周囲のセルが 2 なら、活性であること', () => {
    expect(life.nextCell(true, 2)).toBe(true)
  })
  it('活性セルの周囲のセルが 1 なら、不活性であること', () => {
    expect(life.nextCell(true, 1)).toBe(false)
  })
  it('周囲のセルが 3 なら、活性であること', () => {
    expect(life.nextCell(false, 3)).toBe(true)
  })
  it.todo('過密')
})
describe('出力できること', () => {
  it.todo('コンソールに出力できること')
})
