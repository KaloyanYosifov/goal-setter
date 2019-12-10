/**
 * External dependencies.
 */
import { Component, Input, OnInit } from '@angular/core';

/**
 * Internal dependencies.
 */
import { Todo } from '@app/models/todo.model';
import { Required } from '@app/decorators/required.decorator';

@Component({
    selector: 'app-todos-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
    @Input() @Required protected todo: Todo;

    constructor() {
    }

    ngOnInit() {
    }

}
