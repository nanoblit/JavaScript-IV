import { Person, PersonProps } from "Person";
import { Student } from "Student";

export interface InstructorProps extends PersonProps {
    specialty: string;
    favLanguage: string;
    catchPhrase: string;
}

export class Instructor extends Person {
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
