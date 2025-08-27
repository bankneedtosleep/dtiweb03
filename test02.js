// แบบ commonJS
let {score, squareArea } = require('./mymodule01.js')
const dti02 = require(`./Mymodule02.js`)
console.log(score)
score = 112

console.log(`สีเหลี่ยมกว้าง 100 ยาว 10 มีพื้นที่ ${squareArea(100,10)}`)
console.log(`สีเหลี่ยมกว้าง 50 ยาว 10 มีพื้นที่ ${squareArea(100,10)}`)
console.log(dti02.score)