var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const thing = 'This is a thing';

const someObject = { thing };

console.log(someObject);
// prints { thing: 'This is a thing' }

const someOtherObject = { thing: thing };
// Why bother when the alternative is so much cleaner?

console.log(someOtherObject);
// prints { thing: 'This is a thing' }

const somefunc = () => {
    const something = 'this sure is something';
    return { something };
};

console.log(somefunc());
// prints { something: 'this sure is something' }

const anotherFunc = ({ name, smell }) => `Hey ${ name } you smell like ${ smell }`;

console.log(anotherFunc({ smell: 'pine cones', name: 'Homestar' }));
// prints Hey Homestar you smell like pine cones

const weirdAdd = ({ a: x, b: y }) => x + y;
console.log(weirdAdd({ a: 2, b: 3 }));
//prints 5

const spiderman = {
    name: 'Spider-Man',
    alterEgo: 'Peter Parker',
    powers: ['wall crawling', 'spider sense', 'spider agility', 'enhanced strength']
};

const { powers: spiderPowers } = spiderman;
console.log(spiderPowers);
/*
prints
[ 'wall crawling',
  'spider sense',
  'spider agility',
  'enhanced strength' ]
*/

console.log(1, 2, 3);
//prints 1 2 3

console.log(...spiderPowers);
// prints wall crawling spider sense spider agility enhanced strength

const tail = ([head, ...tail]) => tail;
const head = ([head, ...tail]) => head;

console.log(...tail(spiderPowers));
//prints spider sense spider agility enhanced strength
console.log(head(spiderPowers));
//prints wall crawling

console.log(_extends({}, spiderman));
