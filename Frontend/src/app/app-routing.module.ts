import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: '**', redirectTo: '/menu' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
