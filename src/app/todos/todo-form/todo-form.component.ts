/**
 * External dependencies.
 */
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
/**
 * Internal dependencies.
 */
import { TodoInterface } from '@app/todos/interfaces/todo.interface';
import { Todo } from '@app/models/todo.model';

@Component({
    selector: 'app-todos-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnChanges {
    @Output() protected onSubmit: EventEmitter<TodoInterface> = new EventEmitter<TodoInterface>();
    @Output() protected onCancel: EventEmitter<void> = new EventEmitter<void>();

    @Input() protected todo: Todo = new Todo(-1, '', '', 1, '');

    protected nameData = '';
    protected descriptionData = '';
    protected imageUrlData = '';
    protected timeToReadData = 0;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.nameData = this.todo.getName();
        this.descriptionData = this.todo.getDescription();
        this.timeToReadData = this.todo.getLength();
        this.imageUrlData = this.todo.getImageUrl();
    }

    submitForm(event: Event) {
        event.preventDefault();

        this.onSubmit.emit({
            name: this.nameData,
            description: this.descriptionData,
            imageUrl: this.imageUrlData,
            timeToRead: this.timeToReadData,
        });
    }

    formCanceled(event: Event) {
        event.preventDefault();

        this.onCancel.emit();
    }
}
