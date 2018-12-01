export class Character {
    constructor(public name: string,
        public price: number,
        public flavorText: string,
        public effects: string,
        public type: string,
        public archetype: string,
        public imageUrl: string) {
        this.classes = [this.archetype, this.type.toString()];

    }

    public classes: string[];
}



