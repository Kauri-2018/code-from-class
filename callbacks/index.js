function orderPizza (order, callback) {
  const pizza = {type: order.type}
  console.log('pizza ordered')
  setTimeout(() => {
    callback(pizza)
  }, 3000)
}

function deliver (pizza) {
  console.log('pizza delivered:', pizza.type)
  // answerTheDoor()
  // tipTheDriver()
  // eatThePizza()
}

const order = {type: 'margarita'}
orderPizza(order, deliver)
console.log('all done')
