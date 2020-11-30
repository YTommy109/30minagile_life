import {LifeGame} from './lifegame'

it('', () => {
  expect(true).toBe(true)
})

describe('初期化関係', () => {
  it('', () => {
    const obj = new LifeGame()
    expect(obj.size).toBe(0)
  })
  it('', () => {
    const obj = new LifeGame(3)
    expect(obj.size).toBe(3)
  })
  it('', () => {
    const obj = new LifeGame()
    expect(obj.lifes).toEqual([])
  })
  it('', () => {
    const obj = new LifeGame(3, ['1,1'])
    expect(obj.lifes).toEqual(['1,1'])
  })
})

describe('八近傍', () => {
  it('', () => {
    const obj = new LifeGame(3, ['1,1'])
    expect(obj.neighbor('1,1')).toEqual([
      [0,0], [1,0], [2,0],
      [0,1],        [2,1],
      [0,2], [1,2], [2,2]
    ])
  })
  it('', () => {
    const obj = new LifeGame(3, ['1,2'])
    expect(obj.neighbor('1,2')).toEqual([
      [0,1], [1,1], [2,1],
      [0,2],        [2,2],
      [0,3], [1,3], [2,3]
    ])
  })

  it('', () => {
    const obj = new LifeGame(3, ['1,1'])
    expect(obj.population()).toEqual({
      '0,0':1, '1,0':1, '2,0':1,
      '0,1':1,          '2,1':1,
      '0,2':1, '1,2':1, '2,2':1
    })
  })
  it('', () => {
    const obj = new LifeGame(3, ['1,1', '1,2'])
    expect(obj.population()).toEqual({
      '0,0':1, '1,0':1, '2,0':1,
      '0,1':2, '1,1':1, '2,1':2,
      '0,2':2, '1,2':1, '2,2':2,
      '0,3':1, '1,3':1, '2,3':1
    })
  })
})

describe('ライフゲームルール', () => {
  const obj = new LifeGame()
  it('', () => {
    expect(obj.judge(2, true)).toBe(true)
  })
  it('', () => {
    expect(obj.judge(2, false)).toBe(false)
  })
  it('', () => {
    expect(obj.judge(3, false)).toBe(true)
  })
  it('', () => {
    expect(obj.judge(4, true)).toBe(false)
  })
})

describe('次の世代', () => {
  const bl1 = ['2,1', '2,2', '2,3']
  const bl2 = ['1,2', '2,2', '3,2']
  it('', () => {
    const obj = new LifeGame(3, bl1)
    expect(obj.nextLife()).toEqual(bl2)
  })
  it('', () => {
    const obj = new LifeGame(3, bl2)
    expect(obj.nextLife()).toEqual(bl1)
  })
})
