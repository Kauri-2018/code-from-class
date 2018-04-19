function Mammal (hairColor) {
  this.hairColor = hairColor
}

Mammal.prototype.walk = function () {
  console.log('walking')
}

function Dog (breed) {
  Mammal.call(this, 'brown')
  this.breed = breed
}

Dog.prototype = Object.create(Mammal.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.bark = function () {
  console.log('woof')
}

const lab = new Dog('labrador')

console.log(lab.hairColor)
