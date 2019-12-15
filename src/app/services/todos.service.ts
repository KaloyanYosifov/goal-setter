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

    addTodo(data: TodoInterface): Todo {
        const todo = new Todo(this.getNextIdFor(), data.name, data.description, data.timeToRead, data.imageUrl);
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
