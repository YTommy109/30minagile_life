import {life} from './life'
// 1 オリジン
// ステートレス (オブジェクト指向は使わないつもり)

describe('ライフゲームのボードサイズを設定できること', () => {
  it('初期値がゼロであること', () => {
    expect(life.size).toEqual(0)
  })
  it('指定したサイズになること', () => {
    life.size = 3
    expect(life.size).toEqual(3)
  })
})
describe('活性セルの周囲の活性数を取れること', () => {
  it('指定セルの八近傍の座標を取れること', () => {
    const exp = [
      [1,0],[2,0],[3,0],
      [1,1],      [3,1],
      [1,2],[2,2],[3,2]
    ]
    expect(life.neighbor(2,1)).toEqual(exp)
  })
  it('すべての活性セルの周囲の生存数を取れること', () => {
    const lifes = [[1, 2], [2, 1]]
    const exp = {
                [[1,0]]:1,[[2,0]]:1,[[3,0]]:1,
      [[0,1]]:1,[[1,1]]:2,[[2,1]]:1,[[3,1]]:1,
      [[0,2]]:1,[[1,2]]:1,[[2,2]]:2,[[3,2]]:1,
      [[0,3]]:1,[[1,3]]:1,[[2,3]]:1
    }
    expect(life.noticeAll(lifes)).toEqual(exp)
  })
})

describe('ライフゲームの活性判定ができること', () => {
  it('不活性セルの周囲のセルが 2 なら、不活性のままであること', () => {
    expect(life.nextCell(false, 2)).toBe(false)
  })
  it('活性セルの周囲のセルが 2 なら、活性のままであること', () => {
    expect(life.nextCell(true, 2)).toBe(true)
  })
  it('活性セルの周囲のセルが 1 なら、過疎により不活性であること', () => {
    expect(life.nextCell(true, 1)).toBe(false)
  })
  it('不活性セルの周囲のセルが 3 なら、誕生であること', () => {
    expect(life.nextCell(false, 3)).toBe(true)
  })
  it('活性セルの周囲のセルが 4 なら、過密により不活性であること', () => {
    expect(life.nextCell(true, 4)).toBe(false)
  })
})

describe('出力できること', () => {
  it('初期状態で1行分が表示されること', () => {
    const exp = '□□□'
    life.size = 3
    expect(life.getRow()).toEqual(exp)
  })
  it('指定行の1行分が取得できること', () => {
    const lifes = [[1,1], [2,1], [3,2]]
    const exp = '□□■'
    life.size = 3
    expect(life.getRow(lifes, 2)).toEqual(exp)
  })
})
