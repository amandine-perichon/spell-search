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
} from 'graphql'

var db = require('./../db/db')

const School = new GraphQLEnumType({
  name: "School",
  values: {
    abjuration: {value: "abjuration"},
    conjuration: {value: "conjuration"},
    divination: {value: "divination"},
    enchantment: {value: "enchantment"},
    evocation: {value: "evocation"},
    illusion: {value: "illusion"},
    necromancy: {value: "necromancy"},
    transmutation: {value: "transmutation"},
  }
})

const Class = new GraphQLEnumType({
  name: "Class",
  values: {
    bard: {value: "bard"},
    cleric: {value: "cleric"},
    druid: {value: "druid"},
    paladin: {value: "paladin"},
    ranger: {value: "ranger"},
    sorcerer: {value: "sorcerer"},
    warlock: {value: "warlock"},
    wizard: {value: "wizard"}
  }
})

const Components = new GraphQLObjectType({
  name: 'Components',
  description: 'Represent the component types and materials in a spell',
  fields: () => ({
    material: {type: GraphQLBoolean},
    somatic: {type: GraphQLBoolean},
    verbal: {type: GraphQLBoolean},
    materials_needed: {type: new GraphQLList(GraphQLString)}
  })
})
//
// const Spell = new GraphQLObjectType({
//   name: 'Spell',
//   description: 'Represent a spell',
//   fields: () => ({
//     _id: {type: new GraphQLNonNull(GraphQLString)},
//     name: {type: new GraphQLNonNull(GraphQLString)},
//     level: {type: new GraphQLNonNull(GraphQLString)},
//     school: {type: new GraphQLNonNull(School)},
//     casting_time: {type: new GraphQLNonNull(GraphQLString)},
//     range: {type: new GraphQLNonNull(GraphQLString)},
//     components: {type: new GraphQLNonNull(Components)},
//     duration: {type: new GraphQLNonNull(GraphQLString)},
//     description: {type: new GraphQLNonNull(GraphQLString)},
//     ritual: {type: GraphQLBoolean},
//     higher_levels: {type: GraphQLString},
//     classes: {type: new GraphQLNonNull(new GraphQLList(Class))}
//   })
// })

const Spell = new GraphQLObjectType({
  name: 'Spell',
  description: 'Represent a spell',
  fields: () => ({
    _id: {type: GraphQLString},
    name: {type: GraphQLString},
    level: {type: GraphQLString},
    school: {type: School},
    casting_time: {type: GraphQLString},
    range: {type: GraphQLString},
    components: {type: Components},
    duration: {type: GraphQLString},
    description: {type: GraphQLString},
    ritual: {type: GraphQLBoolean},
    higher_levels: {type: GraphQLString},
    classes: {type: new GraphQLList(Class)}
  })
})

// to do: Add area of effect YES NO

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    spells: {
      type: new GraphQLList(Spell),
      args: {
        name: {
          description: 'Name of the spell',
          type: GraphQLString
        },
        class: {
          description: 'Class that can cast the spell',
          type: Class
        },
        school: {
          description: 'School of magic',
          type: School
        },
        level: {
          description: 'Level of the spell',
          type: GraphQLString
        },
        higher_levels: {
          description: 'Indicates whether a description of the spells at higher levels is available',
          type: GraphQLBoolean
        },
        duration: {
          description: 'Text search on duration field',
          type: GraphQLString
        },
        range: {
          description: 'Text search on the range field',
          type: GraphQLString
        },
        ritual: {
          description: 'Spell can be cast as ritual',
          type: GraphQLBoolean
        },
        concentration: {
          description: 'Spell requires concentration',
          type: GraphQLBoolean
        },
        casting_time: {
          description: 'Text search on casting_time field',
          type: GraphQLString
        },
        description: {
          description: 'Text search on description field',
          type: GraphQLString
        },
        component_type: {
          description: "Type of component: verbal, somatic or material",
          type: GraphQLString
        }
      },
      resolve: function(root, params) {
        return db.findSpells(params).toArray()
      }
    }
  }
})

const Schema = new GraphQLSchema({
  query: Query
})

export default Schema
