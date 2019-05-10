import { Person } from "./Person";
import { Instructor } from "./Instructor";
import { Student } from "./Student";
import { ProjectManager } from "./ProjectManager";

const jon = new Person({
    name: "Jon",
    location: "Burningfyre",
    age: 20,
    gender: "male"
});

jon.speak();

const adam = new Person({
    name: "Adam",
    location: "Flup",
    age: 28,
    gender: "male"
});

adam.speak();

const emily = new Student({
    name: "Emily",
    location: "Fundrom",
    age: 19,
    gender: "female",
    previousBackground: "shopkeeper",
    className: "CS54665",
    favSubjects: ["CSS", "JS"],
    grade: 56
});

emily.listsSubjects();

const albert = new Student({
    name: "Albert",
    location: "Stumpfield",
    age: 37,
    gender: "male",
    previousBackground: "lumberjack",
    className: "CS12",
    favSubjects: [`JavaScript`],
    grade: 34
});

albert.sprintChallenge("React");
albert.PRAssignment("React");

const fred = new Instructor({
    name: "Fred",
    location: "Bedrock",
    age: 37,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Front-end",
    catchPhrase: `Don't forget the homies`
});

fred.demo("JavaScript");

const gabe = new Instructor({
    name: "Gabe",
    location: "London",
    age: 30,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Front-end",
    catchPhrase: `Ooh, you are awful ... but I like you!`
});

fred.grade(emily, "CSS");

const adrian = new ProjectManager({
    name: "Adrian",
    location: "Bedrock",
    age: 37,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Front-end",
    catchPhrase: `Don't forget the homies`,
    gradClassName: "CS34342",
    favInstructor: gabe
});

adrian.standUp("CS34342");

const filip = new ProjectManager({
    name: "Filip",
    location: "Bedrock",
    age: 37,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Front-end",
    catchPhrase: `Don't forget the homies`,
    gradClassName: "CS42",
    favInstructor: fred
});

filip.debugCode(emily, "JavaScript");
