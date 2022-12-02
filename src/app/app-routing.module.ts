import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AProposDeNousComponent } from './a-propos-de-nous/a-propos-de-nous.component';
import { CompteComponent } from './compte/compte.component';
import { ConseilComponent } from './conseil/conseil.component';
import { ProgrammesEtServicesComponent } from './programmes-et-services/programmes-et-services.component';
import { TesterComponent } from './tester/tester.component';
import { RisqueComponent } from './risque/risque.component';
import { SidaDeAZComponent } from './sida-de-a-z/sida-de-a-z.component';


const routes: Routes = [  {
  path: '', redirectTo: 'sida-de-a-z',pathMatch: 'full'
},
  { path: 'sida-de-a-z', component: SidaDeAZComponent },
{ path: 'à-propos-de-nous', component: AProposDeNousComponent },
{ path: 'compte', component: CompteComponent },
{ path: 'conseil', component: ConseilComponent },
{ path: 'programmes-et-services', component: ProgrammesEtServicesComponent },
{ path: 'risqueetprévention', component: RisqueComponent },
{ path: 'tester', component: TesterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  ]
})
export class AppRoutingModule { }
