interface PersonProps {
    name: string;
    age: number;
    location: string;
    gender: string;
}

class Person {
    name: string;
    age: number;
    location: string;
    gender: string;

    constructor(props: PersonProps) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    speak(): void {
        console.log(
            `Hello my name is ${this.name}, I am from ${this.location}`
        );
    }
}

interface InstructorProps extends PersonProps {
    specialty: string;
    favLanguage: string;
    catchPhrase: string;
}

class Instructor extends Person {
    specialty: string;
    favLanguage: string;
    catchPhrase: string;

    constructor(props: InstructorProps) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject: string): void {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student: Student, subject: string): void {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

interface StudentProps extends PersonProps {
    previousBackground: string;
    className: string;
    favSubjects: string[];
    grade: number;
}

class Student extends Person {
    previousBackground: string;
    className: string;
    favSubjects: string[];
    grade: number;

    constructor(props: StudentProps) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.grade = props.grade;
    }

    listsSubjects(): void {
        console.log(this.favSubjects.join(", "));
    }

    PRAssignment(subject: string): void {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject: string): void {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }

    graduate(): void {
        if (this.grade > 70) {
            console.log(`${this.name} has graduated!`);
        }
    }
}

interface ProjectManagerProps extends InstructorProps {
    gradClassName: string;
    favInstructor: Instructor;
}

class ProjectManager extends Instructor {
    gradClassName: string;
    favInstructor: Instructor;

    constructor(props: ProjectManagerProps) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel: string): void {
        console.log(
            `${this.name} announces to ${channel}, @channel standy times!​​​​​`
        );
    }

    debugCode({ name }: Student, subject: string) {
        console.log(`${this.name} debugs ${name}'s code on ${subject}`);
    }

    gradeStudent(student: Student) {
        student.grade += Math.round(Math.random() * 20 - 10);
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
