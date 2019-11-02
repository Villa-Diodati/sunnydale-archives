# The Sunnydale Indicies
An API for D&D characters, monsters, and items.  The vision for this project is to break down all of the mechanics of the game into simple, modular effects.  'Verbs', if you will.  Then, 'noun' objects simply become an array of effects.

## Effect Types
* Typically class / leveling effects
  * Add or remove (proficiency)
  * Boost or reduce max (health)
  * Boost or reduce an (attribute) score
  * Boost or reduce a (skill) score
  * Boost or reduce profiency bonus (probo)
  * Add or remove (advantage)
  * Add or remove a (spell)
  * Add or remove a spell (slot)
  * Add or remove an (ability)
* Typically combat / play effects
  * Add or remove an item from (inventory)
  * Boost or reduce (armor) class
  * Add or remove an (attack) type
  * Damage or heal a target (hp)
  * Charge or deplete a spell slot (ss)
* (Misc)ellaneous (other)

## Effect Structure
``` js
{
  type: '',
  target: '',
  modifier: '',
  source: '',
  relevance: [],
}
```

For instance, let's say an effect changes my dexterity score:
``` js
{
  type: 'attribute',
  target: 'dexterity',
  modifier: () => '+ 1',
  source: 'Lucky Ring',
  description: '',
  notes: '',
}
```

## [x] of [x]
Some effects will allow the player to select one or more targets from a list for an effect.  These selections will be treated as objects, probably something like below.
``` js
{
  options: [],
  count: 1,
  selected: [],
}
```

## Noun structure
Nouns should have fairly simple structures, with names, types, and effects attached.  For instance:
``` js
{
  name: 'Lucky Ring',
  type: 'Equipment',
  effects: [{}],
}
```

## Noun types
* Items
* Spells
* Classes
* Monsters
* Characters
* Other

## Example: the Fighter Class
``` js
{
  name: 'Fighter',
  levels: [
    {
      levelNumber: 1,
      class: 'Fighter,
      effects: [
        {
          type: 'health',
          modifier: (health) => health + 10,
          source: 'Fighter Level 1',
        },
        {
          type: 'proficiency',
          target: {
            selection: [
              'all armor',
              'shields',
              'simple weapons',
              'martial weapons',
              'strength saves',
              'constitution',
            ],
            all: true,
          }
          modifier: (proficiencies) => [...proficiencies, ...this.target.selection ],
          source: 'Fighter Level 1',
        },
        {
          type: 'proficiency',
          target: {
            options: [
              'acrobatics', 'animal handling', 'athletics',
              'history', 'insight', 'intimidation',
              'perception', 'survival',

            ],
            selection: [],
            count: 2,
          }
          modifier: (selection) => this.proficiencies.push(selection),
          source: 'Fighter Level 1',
        },
        {
          type: 'ability',
          target: {
            options: [
              'Archery Fighting Style',
              'Defense Fighting Style',
              'Dueling Fighting Style',
              'Great Weapon Fighting Style',
              'Protection Fighting Style',
              'Two-Weapon Fighting Style',
            ],
            selection: [],
            count: 1,
          },
        },
        {
          type: 'ability',
          target: 'Second wind',
        },
      ]
    },
    {
      levelNumber: 2,
      class: 'Fighter',
      effects: [
        {
          type: 'health',
          modifier: (health) => health + 8,
          source: 'Fighter Level 2',
          valueDie: 8,
        },
        {
          type: 'ability',
          modifier: () => { this.abilities.push('second wind') },
          source: 'Fighter Level 2',
        },
      ],
    },
    {
      levelNumber: 3,
      class: 'Fighter',
      effects: [
        {
          type: 'health',
          modifier: (health) => health + 8,
          source: 'Fighter Level 3',
          valueDie: 8,
        },
        {
          type: 'class',
          target: {
            options: [
              'Champion',
              'Battle Master',
              'Eldrich Knight',
            ],
            selection: [],
            count: 1,
          }
          modifier: (selection) => this.classes.push(selection),
          source: 'Fighter Level 3',
        },
      ],
    },
    {
      levelNumber: 4,
      class: 'Fighter',
      effects: [
           {
          type: 'health',
          modifier: (health) => health + 8,
          source: 'Fighter Level 4',
          valueDie: 8,
        },
      ],
    },
  ]
}
```

## Stack
* Backend / API
  * Mongo
  * Mongoose
  * Node
  * Fastify
* Frontend
  * TBD