const thing = 'This is a thing'

const someObject = { thing }

console.log(someObject)
// prints { thing: 'This is a thing' }

const someOtherObject = { thing: thing }
// Why bother when the alternative is so much cleaner?

console.log(someOtherObject)
// prints { thing: 'This is a thing' }

const somefunc = () => {
    const something = 'this sure is something'
    return { something }
}

console.log(somefunc())
// prints { something: 'this sure is something' }

const anotherFunc =
    ({name, smell}) =>
        `Hey ${name} you smell like ${smell}`

console.log(anotherFunc({smell: 'pine cones', name: 'Homestar'}))
// prints Hey Homestar you smell like pine cones

const weirdAdd = ({a: x, b: y}) => x + y
console.log(weirdAdd({a: 2, b: 3}))
//prints 5

const spiderman = {
    name: 'Spider-Man',
    alterEgo: 'Peter Parker',
    powers: [
        'wall crawling',
        'spider sense',
        'spider agility',
        'enhanced strength'
    ]
}

const { powers: spiderPowers } = spiderman
console.log(spiderPowers)
/*
prints
[ 'wall crawling',
  'spider sense',
  'spider agility',
  'enhanced strength' ]
*/

console.log(1, 2, 3)
//prints 1 2 3

console.log(...spiderPowers)
// prints wall crawling spider sense spider agility enhanced strength

const tail = ([head, ...tail]) => tail
const head = ([head, ...tail]) => head

console.log(...tail(spiderPowers))
//prints spider sense spider agility enhanced strength
console.log(head(spiderPowers))
//prints wall crawling

console.log({...spiderman, superHeroFriends: ['Johnny Storm', 'Black Cat', 'Daredevil']})
/*
prints
{ name: 'Spider-Man',
  alterEgo: 'Peter Parker',
  powers:
   [ 'wall crawling',
     'spider sense',
     'spider agility',
     'enhanced strength' ],
  superHeroFriends: [ 'Johnny Storm', 'Black Cat', 'Daredevil' ] }
*/

const adLib =
    ({subject = 'I', pastTenseVerb = 'drank', pronoun = 'their', object = 'milk shake'} = {}) =>
        `${subject} ${pastTenseVerb} ${pronoun} ${object}!`

console.log(adLib())
//prints I drank their milk shake!
