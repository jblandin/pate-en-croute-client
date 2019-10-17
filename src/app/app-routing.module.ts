import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {
    path: 'display',
    component: DisplayComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'admin',
    component: AdminComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/display',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
