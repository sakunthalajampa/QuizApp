import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {  RouterModule ,Routes} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';


const routes:Routes=[ 
  {path:"",redirectTo:'welcome',pathMatch:"full"},
  {path:"welcome",component:WelcomeComponent},
  {path:"question",component:QuestionComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
