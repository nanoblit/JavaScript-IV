import { Humanoid } from "./Humanoid";
import { Hero } from "./Hero";
import { Villain } from "./Villain";

const mage = new Humanoid({
    createdAt: new Date(),
    dimentions: {
        length: 2,
        width: 1,
        height: 1
    },
    healthPoints: 5,
    name: "Bruce",
    team: "Mage Guild",
    weapons: ["Staff of Shamalama"],
    language: "Common Tongue"
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimentions: {
        length: 2,
        width: 2,
        height: 2
    },
    healthPoints: 15,
    name: "Sir Mustachio",
    team: "The Round Table",
    weapons: ["Giant Sword", "Shield"],
    language: "Common Tongue"
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimentions: {
        length: 1,
        width: 2,
        height: 4
    },
    healthPoints: 10,
    name: "Lilith",
    team: "Forest Kingdom",
    weapons: ["Bow", "Dagger"],
    language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimentions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

const allMight = new Hero({
    createdAt: new Date(),
    dimentions: {
        length: 5,
        width: 3,
        height: 10
    },
    healthPoints: 1000,
    name: "All Might",
    team: "UA",
    weapons: ["Fists"],
    language: "Japanese",
    attack: {
        name: "Smash",
        damage: 1000
    }
});

const nomu = new Villain({
    createdAt: new Date(),
    dimentions: {
        length: 10,
        width: 10,
        height: 10
    },
    healthPoints: 10000,
    name: "Nomu",
    team: "Villains",
    weapons: ["Whole Body"],
    language: "None"
});

while (true) {
    allMight.attackEnemy(nomu);
    if (nomu.healthPoints <= 0) break;
    nomu.runAway();
}
