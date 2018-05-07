import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { Error404Component } from '../error404/error404.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'about', component: AboutComponent},
            {path: 'todos', loadChildren: '../todo/todo.module#TodoModule'},
            {path: '**', component: Error404Component},
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}