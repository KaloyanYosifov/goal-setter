/**
 * External dependencies.
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/**
 * Internal dependencies.
 */
import { TodosService } from '@app/services/todos.service';
import { Observable } from 'rxjs';
import { Todo } from '@app/models/todo.model';

@Injectable()
export class TodoResolverService implements Resolve<Todo> {

    constructor(
        private todosService: TodosService,
    ) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo> | Promise<Todo> | Todo {
        return this.todosService.getTodo(Number(route.params.id));
    }

}
