import { NgModule } from '@angular/core';
import { BrowserModule,bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';




// Importa otros componentes necesarios

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    FormsModule,
    BrowserAnimationsModule
    
  ],

  
})
export class AppModule { }
bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(AppModule)]
  });