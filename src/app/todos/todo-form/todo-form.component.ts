/**
 * External dependencies.
 */
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
/**
 * Internal dependencies.
 */
import { TodoInterface } from '@app/todos/interfaces/todo.interface';

@Component({
    selector: 'app-todos-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnChanges {
    @Output() protected onSubmit: EventEmitter<TodoInterface> = new EventEmitter<TodoInterface>();

    @Input() protected name = '';
    @Input() protected description = '';
    @Input() protected timeToRead = 0;

    protected nameData = '';
    protected descriptionData = '';
    protected timeToReadData = 0;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.nameData = this.name;
        this.descriptionData = this.description;
        this.timeToReadData = this.timeToRead;
    }

    submitForm(event: Event) {
        event.preventDefault();

        this.onSubmit.emit({
            name: this.nameData,
            description: this.descriptionData,
            timeToRead: this.timeToReadData,
        });
    }
}
