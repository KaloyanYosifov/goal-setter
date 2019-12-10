export class Todo {
    constructor(
        protected name: string,
        protected description: string,
    ) {
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }
}
