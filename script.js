const array = [
	{ name: 'N. Armstrong', profession: 'spacecowboy', age: 89 },
	{ name: 'H. de Haan', profession: 'kippen hypnotiseur', age: 59 },
	{ name: 'A. Curry', profession: 'kikvorsman', age: 32 },
	{ name: 'F. Vonk', profession: 'slangenmelker', age: 36 },
	{ name: 'B. Bunny', profession: 'konijnen uitlaatservice', age: 27 },
	{ name: 'Dr.Evil', profession: 'digital overlord', age: 56 }
];
console.log('hello!');
for (let person of array) {
	console.log(person);
	console.log('dit is een naam:', person.name);
	console.log('geboren in: ', 2019 - person.age);
	console.log(person.name, 'is een', person.profession);
}
