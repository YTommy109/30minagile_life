import {LifeGame} from './lifegame'


const obj = new LifeGame(3, ['1,2', '2,2', '3,2'])
obj.display()
const obj2 = new LifeGame(3, obj.nextLife())
obj2.display()