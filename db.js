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

module.exports = {
  connect: connect,
  listAllSpells: listAllSpells
}
