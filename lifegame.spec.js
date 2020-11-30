import {LifeGame} from './lifegame'

describe('オブジェクト生成時にプロパティーを設定できること', () => {
  it('ボードサイズを設定できること', () => {
    const obj = new LifeGame(3)
    expect(obj.size).toBe(3)
  })
  it('活性セルの座標を設定できること', () => {
    const obj = new LifeGame(3, ['1,1'])
    expect(obj.lifes).toEqual(['1,1'])
  })
})

describe('活性数を求められること', () => {
  it('八近傍の座標を取れること', () => {
    const obj = new LifeGame(3, ['1,2'])
    expect(obj.neighbor('1,2')).toEqual([
      [0,1], [1,1], [2,1],
      [0,2],        [2,2],
      [0,3], [1,3], [2,3]
    ])
  })
  it('全体の活性数を取れること', () => {
    const obj = new LifeGame(3, ['1,1', '1,2'])
    expect(obj.population()).toEqual({
      '0,0':1, '1,0':1, '2,0':1,
      '0,1':2, '1,1':1, '2,1':2,
      '0,2':2, '1,2':1, '2,2':2,
      '0,3':1, '1,3':1, '2,3':1
    })
  })
})

describe('ライフゲームルールに従って、活性/不活性を判定できること', () => {
  const obj = new LifeGame()
  it('活性数が 2 の時、活性のままであること', () => {
    expect(obj.judge(2, true)).toBe(true)
  })
  it('活性数が 2 の時、不活性のままであること', () => {
    expect(obj.judge(2, false)).toBe(false)
  })
  it('活性数が 3 の時、誕生になること', () => {
    expect(obj.judge(3, false)).toBe(true)
  })
  it('活性数が 4 以上の時、過密で不活性になること', () => {
    expect(obj.judge(4, true)).toBe(false)
  })
})

describe('ブリンカーパターンが動作すること', () => {
  const bl1 = ['2,1', '2,2', '2,3']
  const bl2 = ['1,2', '2,2', '3,2']
  it('パターン1からパターン2になること', () => {
    const obj = new LifeGame(3, bl1)
    expect(obj.nextLife()).toEqual(bl2)
  })
  it('パターン2からパターン1になること', () => {
    const obj = new LifeGame(3, bl2)
    expect(obj.nextLife()).toEqual(bl1)
  })
})
