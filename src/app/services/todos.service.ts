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
export class TodoService {
    protected todos: Todo[] = [
        new Todo('Test', 'Hello World', 30),
    ];

    constructor() {
    }

    getTodos(): Todo[] {
        return this.todos;
    }
}
