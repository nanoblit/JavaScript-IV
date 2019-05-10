import { GameObject, GameObjectProps } from "./GameObject";

export interface CharacterStatsProps extends GameObjectProps {
    healthPoints: number;
}

export class CharacterStats extends GameObject {
    healthPoints: number;

    constructor(props: CharacterStatsProps) {
        super(props);
        this.healthPoints = props.healthPoints;
    }

    takeDamage(damage = 10): string {
        this.healthPoints -= damage;
        let returnString = `${this.name} took damage.`;
        if (this.healthPoints <= 0) {
            returnString += ` They fainted!`;
        }
        return returnString;
    }
}
