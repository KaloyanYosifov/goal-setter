export class Todo {
    constructor(
        protected id: number,
        protected name: string,
        protected description: string,
        protected length: number,
        protected imageUrl: string,
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

    setImageUrl(imageUrl: string): Todo {
        this.imageUrl = imageUrl;

        return this;
    }

    getId(): number {
        return this.id;
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

    getImageUrl(): string {
        return this.imageUrl;
    }
}
