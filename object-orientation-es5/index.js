const dog = {
  hairColor: 'brown',
  tiredFactor: 0,
  bark: () => {
    console.log('woof!')
    this.tiredFactor += 1
  }
}

function makeDog (hairColor, sound) {
  return {
    hairColor: hairColor,
    tiredFactor: 0,
    bark: function () {
      console.log(sound)
      this.tiredFactor += 1
    }
  }
}

// `this` is the object the function was "on" when the function was called

const d = makeDog('black', 'woof')
d.bark()
console.log(d.tiredFactor)

const b = d.bark
b()
console.log(d.tiredFactor)
