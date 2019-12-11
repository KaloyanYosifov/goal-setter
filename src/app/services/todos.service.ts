/**
 * External dependencies.
 */
import { Injectable } from '@angular/core';

/**
 * Internal dependencies.
 */
import { Todo } from '@app/models/todo.model';

@Injectable({
    providedIn: 'root',
})
export class TodosService {
    protected todos: Todo[] = [
        new Todo(1, 'Test', 'Hello World', 30),
    ];

    constructor() {
    }

    getTodos(): Todo[] {
        return this.todos;
    }

    hasTodo(id: number): boolean {
        return !!this.todos.find(todo => todo.getId() === id);
    }
}
