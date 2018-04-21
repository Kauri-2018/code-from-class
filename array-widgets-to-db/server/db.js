const knex = require('knex')
const config = require('../knexfile').development
const devDb = knex(config)

module.exports = {
  getWidgets,
  saveWidget,
  deleteWidget,
  updateWidget
}

function getWidgets () {
  return devDb('widgets')
    .select('id', 'name', 'price', 'mfg', 'in_stock as inStock')
}

function saveWidget (widget) {
  const newWidget = {
    name: widget.name,
    price: widget.price,
    mfg: widget.mfg,
    in_stock: widget.inStock
  }
  return devDb('widgets').insert(newWidget)
}

function deleteWidget (id) {
  return devDb('widgets')
    .where('id', id)
    .del()
}

function updateWidget (widget) {
  const updatedWidget = {
    name: widget.name,
    price: widget.price,
    mfg: widget.mfg,
    in_stock: widget.inStock
  }
  return devDb('widgets')
    .where('id', widget.id)
    .update(updatedWidget)
}
