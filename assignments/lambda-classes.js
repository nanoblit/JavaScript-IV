class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    speak() {
        console.log(
            `Hello my name is ${this.name}, I am from ${this.location}`
        );
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.speciality = props.speciality;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.grade = props.grade;
    }

    listsSubjects() {
        console.log(this.favSubjects.join(", "));
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel) {
        console.log(
            `${this.name} announces to ${channel}, @channel standy times!​​​​​`
        );
    }

    debugCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

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
    favInstructor: "Gabe"
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
    favInstructor: "fred"
});

filip.debugCode(emily, "JavaScript");