/**
 * External dependencies.
 */
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

/**
 * Internal dependencies.
 */
import { TodoInterface } from '@app/todos/interfaces/todo.interface';
import { Todo } from '@app/models/todo.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-todos-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
    @ViewChild('form', { static: false }) protected form: NgForm;

    @Output() protected onSubmit: EventEmitter<TodoInterface> = new EventEmitter<TodoInterface>();
    @Output() protected onCancel: EventEmitter<void> = new EventEmitter<void>();

    @Input() protected todo: Todo = new Todo(-1, '', '', 1, '');

    constructor() {
    }

    submitForm() {
        if (this.form.invalid) {
            return;
        }

        const { name, description, imageUrl, timeToRead } = this.form.value;

        this.onSubmit.emit({
            name,
            description,
            imageUrl,
            timeToRead,
        });
    }

    formCanceled(event: Event) {
        event.preventDefault();

        this.onCancel.emit();
    }
}
