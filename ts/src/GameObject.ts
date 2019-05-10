export interface Dimentions {
    length: number;
    width: number;
    height: number;
}

export interface GameObjectProps {
    createdAt: Date;
    name: string;
    dimentions: Dimentions;
}

export class GameObject {
    createdAt: Date;
    name: String;
    dimentions: Dimentions;

    constructor(props: GameObjectProps) {
        this.createdAt = props.createdAt;
        this.name = props.name;
        this.dimentions = props.dimentions;
    }

    destroy(): string {
        return `${this.name} was removed from the game.`;
    }
}
