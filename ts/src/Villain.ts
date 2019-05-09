import { Humanoid, HumanoidProps } from "./Humanoid";

export class Villain extends Humanoid {
    constructor(props: HumanoidProps) {
        super(props);
    }

    runAway() {
        console.log(`${this.name} tries to run away!`);
    }
}