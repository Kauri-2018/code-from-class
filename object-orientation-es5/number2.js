function makeObj (msg) {
  return {
    message: msg,
    showMsg: function (and, andthen) {
      console.log(this.message, and, andthen)
    }
  }
}

const ro = {
  message: 'yeah?'
}

const o = makeObj('yo!')
o.showMsg()
const sm = o.showMsg
sm('hello', 'good bye')
sm.call(ro, 'hello', 'good bye')
sm.apply(ro, ['hello', 'good bye'])

const fn = sm.bind(ro)
fn('this', 'is super super cool')

const fn2 = sm.bind(ro, 'this')
fn2('is super super cool')

const fn3 = sm.bind(ro, 'this', 'is cool')
fn3()
