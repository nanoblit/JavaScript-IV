export interface PersonProps {
    name: string;
    age: number;
    location: string;
    gender: string;
}

export class Person {
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
