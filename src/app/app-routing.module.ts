import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './country/list/list.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'auth',  children : [
      { path: 'login', component: LoginComponent}, // /auth/login
      { path: 'register', component: RegisterComponent}, // /auth/register
  ]},
  { path: 'country', children: [
      { path: 'list',  component: ListComponent}
  ]},
  { path: 'lifecycle', component: LifecycleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
