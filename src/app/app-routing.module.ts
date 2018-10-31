import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { OtpComponent } from './components/otp/otp.component';

export const RoutingComponents = [
  LoginComponent,
  FooterComponent,
  HeaderComponent,
  RegisterationComponent,
  OtpComponent
];


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: RegisterationComponent },
  { path: 'otp', component: OtpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
