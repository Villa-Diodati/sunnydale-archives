# The Sunnydale Indicies
An API for D&D characters, monsters, and items.  The vision for this project is to break down all of the mechanics of the game into simple, modular effects.  'Verbs', if you will.  Then, 'noun' objects simply become an array of effects.

## Effect Types
* Typically class / leveling effects
  * Add or remove proficiency
  * Boost or reduce an attribute score
  * Boost or reduce a skill score
  * Boost or reduce profiency bonus
  * Add or remove advantage
  * Add or remove a spell
  * Add or remove a spell slot
* Typically combat / play effects
  * Add or remove an item from inventory
  * Add or remove an attack type
  * Damage or heal a target
  * Charge or deplete a spell slot

## Effect Structure
``` js
{
  type: '',
  target: '',
  modifier: '',
  source: '',
}
```

For instance, let's say an effect changes my dexterity score:
``` js
{
  type: 'Boost or reduce an attribute score',
  target: 'dexterity',
  modifier: () => '+ 1',
  source: 'Lucky Ring',
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
  effects: [{}],
  type: 'Equipment',
}
```

## Stack
* Mongo
* Mongoose
* Node
* Fastify
* 