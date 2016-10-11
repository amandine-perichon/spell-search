import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLEnumType,
  GraphQLNonNull
} from 'graphql';

var db = require('./db')

const Spell = new GraphQLObjectType({
  name: 'Spell',
  description: 'Represent a spell',
  fields: () => ({
    _id: {type: GraphQLString},
    name: {type: GraphQLString},
    level: {type: GraphQLInt},
    magicSchool: {type: GraphQLString},
    castingTime: {type: GraphQLString},
    range: {type: GraphQLString},
    self: {type: GraphQLBoolean},
    vComponents: {type: GraphQLBoolean},
    sComponents: {type: GraphQLBoolean},
    mComponents: {type: GraphQLBoolean},
    componentMaterials: {type: GraphQLString},
    concentration: {type: GraphQLBoolean},
    duration: {type: GraphQLString},
    instantaneous: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    spells: {
      type: new GraphQLList(Spell),
      resolve: function() {
        return db.listAllSpells().toArray()
      }
    }
  }
})

const Schema = new GraphQLSchema({
  query: Query
})

export default Schema
