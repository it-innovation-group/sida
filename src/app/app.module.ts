import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AProposDeNousComponent } from './a-propos-de-nous/a-propos-de-nous.component';
import { CompteComponent } from './compte/compte.component';
import { ConseilComponent } from './conseil/conseil.component';
import { ProgrammesEtServicesComponent } from './programmes-et-services/programmes-et-services.component';
import { TesterComponent } from './tester/tester.component';
import { RisqueComponent } from './risque/risque.component';
import { SidaDeAZComponent } from './sida-de-a-z/sida-de-a-z.component';


@NgModule({
  declarations: [
    AppComponent,
    AProposDeNousComponent,
    CompteComponent,
    ConseilComponent,
    ProgrammesEtServicesComponent,
    TesterComponent,
    RisqueComponent,
    SidaDeAZComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
