import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, RoutingComponents, } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberDirective } from './validations/number-validation';
import { LetterDirective } from './validations/letters-directive';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    NumberDirective,
    LetterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
