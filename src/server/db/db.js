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

function findSpells (params) {
  const query = buildFindSpellsQuery(params)
  const options = {sort: "name"}
  return spellCollection.find(query, options)
}

function buildFindSpellsQuery (params) {
  let query = {}
  Object.keys(params).forEach(param => {
    Object.assign(query, buildFindSpellsQueryParam(param, params[param]))
  })
  if (params.hasOwnProperty('concentration') && params.hasOwnProperty('duration')) {
    query = Object.assign(query, {
      duration: {
        $regex: `Concentration.*${params.duration}|${params.duration}.*Concentration`, $options: "$i"
      }
    })
  }
  return query
}

function buildFindSpellsQueryParam (param, value) {
  switch (param) {
    case "class":
      return {classes: { "$in" : [value]}}
    case "name":
      return {name: {$regex: value, $options: "$i"}}
    case "higher_levels":
      if (value) {
        return {higher_levels: {$exists: true}}
      } else {
        return {}
      }
    case "range":
      return {range: {$regex: value, $options: "$i"}}
    case "casting_time":
      return {casting_time: {$regex: value, $options: "$i"}}
    case "description":
      return {description: {$regex: value, $options: "$i"}}
    case "component_type":
      return {[`components.${value}`]: false}
    case "duration":
      return {duration: {$regex: value, $options: "$i"}}
    case "concentration":
      if (value) {
        return {duration: {$regex: "concentration", $options: "$i"}}
      } else {
        return {}
      }
    default:
      return {[param]: value}
  }
}

module.exports = {
  connect: connect,
  findSpells: findSpells
}
