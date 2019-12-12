/**
 * External dependencies.
 */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-todos-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
    @Input() protected name = '';
    @Input() protected description = '';
    @Input() protected timeToRead = '';

    @Output() protected nameInput: EventEmitter<string> = new EventEmitter<string>();
    @Output() protected descriptionInput: EventEmitter<string> = new EventEmitter<string>();
    @Output() protected timeToReadInput: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    emitValue(event: Event, typeEvent: string): void {
        const whiteListedEvents = [
            'name',
            'description',
            'timeToRead',
        ];

        if (whiteListedEvents.indexOf(typeEvent) === -1) {
            throw new Error(`Event type "${typeEvent}" unknown!`);
        }

        const inputElement = (event.target as HTMLInputElement);
        const eventEmitter = (this[`${typeEvent}Input`] as EventEmitter<string>);

        eventEmitter.emit(inputElement.value);
    }
}
