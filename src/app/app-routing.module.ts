import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HelpComponent } from './help/help.component';
import { LegalComponent } from './legal/legal.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SupportComponent } from './support/support.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path:'', component: LoginComponent},
  { path:'login', component: LoginComponent},
  { path:'welcome', component: WelcomeComponent},
  { path:'help', component: HelpComponent},
  { path:'support', component: SupportComponent},
  { path:'legal', component: LegalComponent},
  { path:'logout', component: LogoutComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
