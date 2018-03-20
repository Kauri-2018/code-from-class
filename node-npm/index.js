const cowsay = require('cowsay')

function talkToMe (msg) {
  const options = {
    text: msg,
    e: 'oO',
    T: 'U '
  }

  return cowsay.say(options)
}

module.exports = talkToMe

console.log(talkToMe('Amooooozing'))
