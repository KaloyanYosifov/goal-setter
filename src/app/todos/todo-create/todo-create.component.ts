/**
 * External dependencies.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Internal dependencies.
 */
import { TodosService } from '@app/services/todos.service';
import { TodoInterface } from '@app/todos/interfaces/todo.interface';

@Component({
    selector: 'app-todo-create',
    templateUrl: './todo-create.component.html',
    styleUrls: ['./todo-create.component.scss'],
})
export class TodoCreateComponent implements OnInit {

    constructor(
        private router: Router,
        private todosService: TodosService,
    ) {
    }

    ngOnInit() {
    }

    public setDataToTodo(
        data: TodoInterface,
    ) {
        this.todosService.addTodo(data);
        this.router.navigate(['/todos']);
    }
}
