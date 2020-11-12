import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ActiveDirective } from './active.directive';
import { HighlightDirective } from './highlight.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './country/list/list.component';
import { DetailComponent } from './country/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActiveDirective,
    HighlightDirective,
    LifecycleComponent,
    RegisterComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
