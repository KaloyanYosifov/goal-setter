export class Todo {
    constructor(
        protected name: string,
        protected description: string,
        protected length: number,
    ) {
    }

    setName(name: string): Todo {
        this.name = name;

        return this;
    }

    setDescription(description: string): Todo {
        this.description = description;

        return this;
    }

    setLength(length: number): Todo {
        this.length = length;

        return this;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getLength(): number {
        return this.length;
    }
}
