const data = require('./data.json')

function getPath () {
  console.log('path:', data.path)
}

function getTotalGreaterThan () {
  const tgt = data.query.totalGreaterThan
  console.log('totalGreaterThan:', tgt)
}

function getFirstResultName () {
  const frn = data.results[0].name
  console.log('name:', frn)
}

function getGstReview () {
  const gst = data.results[1].addOns.gstReview
  console.log('gstReview', gst)
}

function getAllGstReviews () {
  const gsts = data.results.map(function (result) {
    return result.addOns.gstReview
  })
  console.log('gsts:', gsts.join(' & '))
}

getPath()
getTotalGreaterThan()
getFirstResultName()
getGstReview()
getAllGstReviews()
