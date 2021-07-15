/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import Person from './person';

export default class Team {
  constructor(...args) {
    this.team = [];
    args.forEach((e) => {
      this.team.push(new Person(e));
    });
  }

  * [Symbol.iterator]() {
    for (const a of this.team) {
      yield a;
    }
  }
}

const team1 = new Team('Bowman', 'Swordsman', 'Demon');

for (const value of team1) {
  console.log(value);
}

console.log('\nПроверка Генератора\n');

const generator = team1[Symbol.iterator]();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
