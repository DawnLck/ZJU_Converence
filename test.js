var cal = counter()
console.log(cal())// num=?
console.log(cal()) // num=?
var cal2 = counter()
console.log(cal())// num=?
console.log(cal2()) // num=?
function counter () {
  var num = 0
  function add () {
    return num++
  }
  return add
}
