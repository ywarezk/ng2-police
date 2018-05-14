

import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { MainComponent } from '../main/main.component';
import { ParentComponent } from '../parent/parent.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'hello', component: ParentComponent, children: [
                {path: 'dashboard', component: DashboardComponent},
                {path: 'main', component: MainComponent},
                // {path: '', component: WillLoadOnAdminHelloComponent}
            ]}
        ])
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule {}