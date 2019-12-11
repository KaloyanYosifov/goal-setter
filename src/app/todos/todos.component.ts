/**
 * External dependencies.
 */
import { Component, OnInit } from '@angular/core';

/**
 * Internal dependencies.
 */
import { TodosService } from '@app/services/todos.service';

@Component({
    selector: 'app-todos-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {

    constructor(
        private todoService: TodosService,
    ) {
    }

    ngOnInit() {
    }

}
