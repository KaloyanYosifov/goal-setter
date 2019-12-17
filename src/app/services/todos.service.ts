/**
 * External dependencies.
 */
import { Injectable } from '@angular/core';

/**
 * Internal dependencies.
 */
import { Todo } from '@app/models/todo.model';
import { TodoInterface } from '@app/todos/interfaces/todo.interface';

@Injectable({
    providedIn: 'root',
})
export class TodosService {
    protected todos: Todo[] = [
        new Todo(1, 'Test', 'Hello World', 30, 'https://picsum.photos/id/659/400/400'),
    ];
    protected latestAvailableId = 1;

    constructor() {
    }

    getTodos(): Todo[] {
        return this.todos;
    }

    hasTodo(id: number): boolean {
        return !!this.todos.find(todo => todo.getId() === id);
    }

    getTodo(id: number): Todo | null {
        return this.todos.find(todo => todo.getId() === id);
    }

    setTodoData(id: number, data: TodoInterface): void {
        if (
            !data.name ||
            !data.imageUrl
        ) {
            throw new Error('No data has been passed!');
        }

        if (!this.hasTodo(id)) {
            return;
        }

        this.todos = this.todos.map(todo => {
            if (todo.getId() === id) {
                return new Todo(todo.getId(), data.name, data.description, data.timeToRead, data.imageUrl);
            }

            return todo;
        });
    }

    addTodo(
        { name, description, timeToRead, imageUrl }: TodoInterface,
    ): Todo {
        if (!name || !imageUrl) {
            throw new Error('Invalid data passed! Please make sure that name and imageUrl are not empty');
        }

        const todo = new Todo(this.getNextIdFor(), name, description, timeToRead, imageUrl);
        this.todos = [
            ...this.todos,
            todo,
        ];

        return todo;
    }

    protected getNextIdFor(): number {
        let todoId = this.latestAvailableId;

        while (true) {
            if (!this.hasTodo(todoId)) {
                break;
            }

            todoId++;
        }

        this.latestAvailableId = todoId;

        return todoId;
    }
}
