import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tela01Component } from './tela01/tela01.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tela01', component: Tela01Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
