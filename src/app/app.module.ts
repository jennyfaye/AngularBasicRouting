import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { LandingpageComponent } from "./components/landingpage/landingpage.component";
import { FormsModule } from "@angular/forms";



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', component: HomepageComponent},
  { path: 'landingpage', component: LandingpageComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
],

  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    LandingpageComponent,
  ],

  providers: [
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
