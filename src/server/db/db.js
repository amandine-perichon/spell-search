const Mongo = require('mongodb')
const MongoClient = Mongo.MongoClient
const password = process.env.DBPWD
const url = `mongodb://admin:${password}@ds041924.mlab.com:41924/dd5thed`
let spellCollection = null

function connect () {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function(err, db) {
      if (err) {
        reject(err)
      } else {
        spellCollection = db.collection('spells')
        resolve()
      }
    })
  })
}

function listAllSpells () {
  return spellCollection.find()
}

function findSpells (params) {
  console.log("before transformation", params)
  let query = Object.assign({}, params)
  if (params.class) {
    query = Object.assign({}, query, {classes: { "$in" : [params.class]}})
    delete query.class
  }
  if (params.name) {
    query = Object.assign({}, query, {name: {$regex: params.name, $options: "$i"}})
  }
  if (params.hasOwnProperty('higher_levels')) {
    if (params.higher_levels) {
      query = Object.assign({}, query, {higher_levels: {$exists: true}})
    } else {
      delete query.higher_levels
    }
  }
  if (params.hasOwnProperty('instantaneous')) {
    if (params.instantaneous) {
      query = Object.assign({}, query, {duration: "Instantaneous"})
      delete query.instantaneous
    } else {
      query = Object.assign({}, query, {duration: {$ne: "Instantaneous"}})
      delete query.instantaneous
    }
  }
  if (params.hasOwnProperty('range')) {
    query = Object.assign({}, query, {range: {$regex: params.range, $options: "$i"}})
  }
  if (params.hasOwnProperty('duration')) {
    query = Object.assign({}, query, {duration: {$regex: params.duration, $options: "$i"}})
  }
  if (params.hasOwnProperty('concentration')) {
    query = Object.assign({}, query, {duration: {$regex: "concentration", $options: "$i"}})
    delete query.concentration
  }
  if (params.hasOwnProperty('concentration') && params.hasOwnProperty('duration')) {
    query = Object.assign({}, query, {duration: {$regex: `Concentration.*${params.duration}|${params.duration}.*Concentration`, $options: "$i"}})
    delete query.concentration
  }
  if (params.hasOwnProperty('casting_time')) {
    query = Object.assign({}, query, {casting_time: {$regex: params.casting_time, $options: "$i"}})
  }
  if (params.hasOwnProperty('description')) {
    query = Object.assign({}, query, {description: {$regex: params.description, $options: "$i"}})
  }
  if (params.component_type) {
    const queryParams = {}
    queryParams[`components.${params.component_type}`] = true
    query = Object.assign({}, query, queryParams)
    delete query.component_type
  }
  console.log("after transformation", query)
  return spellCollection.find(query)
}


module.exports = {
  connect: connect,
  listAllSpells: listAllSpells,
  findSpells: findSpells
}
