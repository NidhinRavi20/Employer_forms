import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './result/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployerFormComponent } from './result/employer-form/employer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    EmployerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
