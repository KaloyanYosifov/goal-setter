/**
 * External dependencies.
 */
import { Component, OnInit } from '@angular/core';

/**
 * Internal dependencies.
 */
import { TodosService } from '@app/services/todos.service';
import { Todo } from '@app/models/todo.model';

@Component({
    selector: 'app-todos-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
    protected todos: Todo[] = [];

    constructor(
        private todoService: TodosService,
    ) {
    }

    ngOnInit() {
        this.todos = this.todoService.getTodos();
    }

}
