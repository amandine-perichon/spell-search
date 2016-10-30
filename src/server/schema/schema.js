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
  description: 'Represents the component types (material, somatic, verbal) and materials in a spell',
  fields: () => ({
    material: {type: GraphQLBoolean},
    somatic: {type: GraphQLBoolean},
    verbal: {type: GraphQLBoolean},
    materials_needed: {type: new GraphQLList(GraphQLString)}
  })
})

// REPLACE WITH NonNull after data clean up
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
  description: 'Represents a Dungeons and Dragons 5th edition spell',
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

// TO DO: Add area of effect boolean to args

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    spells: {
      type: new GraphQLList(Spell),
      args: {
        name: {
          description: 'Text search on name field',
          type: GraphQLString
        },
        class: {
          description: 'Search for spells can can be cast by this class',
          type: Class
        },
        school: {
          description: 'Search for spells from a specific school of magic',
          type: School
        },
        level: {
          description: 'Text search on the level field',
          type: GraphQLString
        },
        higher_levels: {
          description: 'Search for spells for which a description at higher levels is available',
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
          description: 'Search for spells which can be cast as a ritual',
          type: GraphQLBoolean
        },
        concentration: {
          description: 'Search for spells which require concentration',
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
          description: "Search for spells which exclude a specific type of component: verbal, somatic or material",
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
