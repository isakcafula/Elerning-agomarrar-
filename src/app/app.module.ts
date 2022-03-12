import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsComponent } from './Components/buttons/buttons.component';
import { ButtonsLoginComponent } from './Components/buttons-login/buttons-login.component';
import { MaterialModule } from './Models/material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    ButtonsLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
