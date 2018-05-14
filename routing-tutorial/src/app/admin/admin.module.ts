import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { MainComponent } from './main/main.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [DashboardComponent, ParentComponent, MainComponent]
})
export class AdminModule { }
