import { Humanoid, HumanoidProps } from "./Humanoid";
import { CharacterStats } from "./CharacterStats";

export interface Attack {
    name: string;
    damage: number;
}

export interface HeroProps extends HumanoidProps {
    attack: Attack;
}

export class Hero extends Humanoid {
    attack: Attack;

    constructor(props: HeroProps) {
        super(props);
        this.attack = props.attack;
    }

    attackEnemy(foe: CharacterStats): void {
        console.log(
            `${this.name} uses ${this.attack.name} on ${foe.name} dealing ${
                this.attack.damage
            } damage!`
        );
        console.log(foe.takeDamage(this.attack.damage));
    }
}
