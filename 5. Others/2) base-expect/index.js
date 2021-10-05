/*
  Задача написать функцию baseExpect которая будет работать следующим образом
  Пример
  baseExpect(4).toBe(4) === true
  baseExpect(5).toBe(4) === false
  baseExpect(5).toBe.not(4) === true
  baseExpect(5).toBe.not(5) === false
  Примечание: Должно работать только с числами
 */
function baseExpect(a) {
    if(Number.isInteger(a)){
        return a;
    }
}
Object.prototype.toBe = function (b) {
    return b === baseExpect(4);
}
Object.prototype.not = function (c) {
    return c !== baseExpect(4);
}

window.baseExpect = baseExpect;

export default baseExpect.toBe.not;
