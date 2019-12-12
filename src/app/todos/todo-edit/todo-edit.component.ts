import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '@app/models/todo.model';
import { TodoInterface } from '@app/todos/interfaces/todo.interface';
import { TodosService } from '@app/services/todos.service';

@Component({
    selector: 'app-todos-todo-edit',
    templateUrl: './todo-edit.component.html',
    styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent implements OnInit {
    protected todo: Todo = null;

    constructor(
        private currentRoute: ActivatedRoute,
        private todosService: TodosService,
    ) {
    }

    ngOnInit() {
        this.currentRoute.data.subscribe(data => {
            this.todo = data.todo;
        });
    }

    public setDataToTodo(
        data: TodoInterface,
    ) {
        //this.todo = new Todo(this.todo.getId(), name, description, timeToRead);
        this.todosService.setTodoData(this.todo.getId(), data);
    }
}
