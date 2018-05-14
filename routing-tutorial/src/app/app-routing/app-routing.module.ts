import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { Error404Component } from '../error404/error404.component';
import { IsAdminService } from './is-admin.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'about', component: AboutComponent},
            {path: 'todos', loadChildren: '../todo/todo.module#TodoModule'},
            {path: 'admin', loadChildren: '../admin/admin.module#AdminModule'},
            {path: '**', component: Error404Component},
        ])
    ],
    providers: [IsAdminService],
    exports: [RouterModule]
})
export class AppRoutingModule {}