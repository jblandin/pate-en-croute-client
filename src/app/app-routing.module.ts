import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {
    path: 'display',
    component: DisplayComponent
  },
  {
    path: '4dm1n',
    component: AdminComponent
  },
  { path: '',
    redirectTo: '/display',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/display'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
