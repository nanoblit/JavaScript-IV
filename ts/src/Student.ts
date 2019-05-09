import {Person, PersonProps} from "Person";

export interface StudentProps extends PersonProps {
    previousBackground: string;
    className: string;
    favSubjects: string[];
    grade: number;
}

export class Student extends Person {
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