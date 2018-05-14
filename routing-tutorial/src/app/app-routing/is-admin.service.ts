import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from "@angular/router";


@Injectable()
export class IsAdminService implements CanLoad {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return localStorage.getItem('token') === 'hello world';
    }

    canLoad(route: Route): boolean {
        return localStorage.getItem('token') === 'hello world';
    }
}