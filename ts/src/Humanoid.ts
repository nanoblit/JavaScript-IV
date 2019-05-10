import { CharacterStats, CharacterStatsProps } from "./CharacterStats";

export interface HumanoidProps extends CharacterStatsProps {
    team: string;
    weapons: string[];
    language: string;
}

export class Humanoid extends CharacterStats {
    team: string;
    weapons: string[];
    language: string;

    constructor(props: HumanoidProps) {
        super(props);
        this.team = props.team;
        this.weapons = props.weapons;
        this.language = props.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}
