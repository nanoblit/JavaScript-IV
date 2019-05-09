import { Instructor, InstructorProps } from "Instructor";
import { Student } from "Student";

export interface ProjectManagerProps extends InstructorProps {
    gradClassName: string;
    favInstructor: Instructor;
}

export class ProjectManager extends Instructor {
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
