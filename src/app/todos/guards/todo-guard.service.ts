/**
 * External dependencies.
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TodosService } from '@app/services/todos.service';
import { Observable } from 'rxjs';

@Injectable()
export class TodoGuardService implements CanActivate {
    constructor(
        private todosService: TodosService,
        private router: Router,
    ) {
    }

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!this.todosService.hasTodo(Number(route.params.id))) {
            return this.router.parseUrl('/todos');
        }

        return true;
    }
}
