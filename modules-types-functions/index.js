const funcs = require('./functions')
const types = require('./types')

funcs.doWork()
funcs.doRest()

console.log(typeof types.s)
console.log(typeof types.b)
console.log(typeof types.o)
console.log(typeof types.n)
console.log(typeof types.u)
console.log(typeof types.num)
console.log(typeof types.a)
console.log(typeof types.f)

if (types.num === 67) {
  console.log('same!')
} else {
  console.log('not same!')
}
