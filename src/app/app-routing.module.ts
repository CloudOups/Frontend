import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './login/login.component';

//-------------------hedi---------------------------------------
import { ListBlogComponent } from './Blog/list-blog/list-blog.component';
import { ListBlogbackComponent } from './Blog/list-blogback/list-blogback.component';
import { UpdateBlogComponent } from './Blog/update-blog/update-blog.component';
import { AddBlogComponent } from './Blog/add-blog/add-blog.component';
import { BlogDetailsComponent } from './Blog/blog-details/blog-details.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavbarconnectedComponent } from './shared/navbarconnected/navbarconnected.component';

import { ReservationTerrainComponent } from './reservation-terrain/reservation-terrain.component';
import { TerrainComponent } from './terrain/terrain.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AddTerrainComponent } from './add-terrain/add-terrain.component';
import { UpdateTerrainComponent } from './update-terrain/update-terrain.component';


import { ListTournoiComponent } from './Tournoi/list-tournoi/list-tournoi.component';
import { AddTournoiComponent } from './Tournoi/add-tournoi/add-tournoi.component';
import { DetailtournoiComponent } from './Tournoi/detailtournoi/detailtournoi.component';
import { ListEventComponent } from './Event/list-event/list-event.component';
import { AddEventComponent } from './Event/add-event/add-event.component';
import { UpdateTournoiComponent } from './Tournoi/update-tournoi/update-tournoi.component';
import { ListTicketComponent } from './Ticket/list-ticket/list-ticket.component';
import { DetailEventComponent } from './Event/detail-event/detail-event.component';
import { DetailTicketComponent } from './Ticket/detail-ticket/detail-ticket.component';

import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { MesReservationComponent } from './mes-reservation/mes-reservation.component';
import { ConfirmartionReservationComponent } from './confirmartion-reservation/confirmartion-reservation.component';
import { ChoisirTerrainComponent } from './choisir-terrain/choisir-terrain.component';
import { ListEventbackComponent } from './Event/list-eventback/list-eventback.component';
import { UpdateEventComponent } from './Event/update-event/update-event.component';
import { ParticipationHistoryComponent } from './Event/participation-history/participation-history.component';
import { DemandeEquipeComponent } from './demande-equipe/demande-equipe.component';
import { DivHomeComponent } from './div-home/div-home.component';
import { ListDemandeComponent } from './list-demande/list-demande.component';
import { ListterrainfrontComponent } from './listterrainfront/listterrainfront.component';
import { CodePromoComponent } from './code-promo/code-promo.component';

// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'navcon', component: NavbarconnectedComponent },

  // ------------------------------------------paths hedi-------------------------------------
  { path: 'listblog', component: ListBlogComponent },
  { path: 'blogdetails/:id', component: BlogDetailsComponent },
  { path: 'addblog', component: AddBlogComponent },
  { path: 'updateBlog/:id', component: UpdateBlogComponent },
  { path: 'listBlogback', component: ListBlogbackComponent },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },


 //----------------------------------Path yassin--------------------------------
 {path:'terrains',component:TerrainComponent},
 {path:'terrainsfront',component:ListterrainfrontComponent},

 {path:'reservationTerrain',component:ReservationTerrainComponent},
 {path:'equipes',component:EquipeComponent},
 {path:'addterrains',component:AddTerrainComponent},
 {path:'updateterrain/:numTerrain',component:UpdateTerrainComponent},
 {path:'addEquipe/:numTournoi',component:AddEquipeComponent},
 {path:'listDemande/:numEquipe/:chefEquipe',component:ListDemandeComponent},

 {path:'updateEquipe/:numEquipe/:chefEquipe',component:UpdateEquipeComponent},
 { path:'choisirTerrain/:startTime/:endTime/:typeTerrain', component: ChoisirTerrainComponent },
 { path:'mesReservation', component: MesReservationComponent },

 {path:'confirmerReservation/:startTime/:endTime/:numTerrain/:prixReser',component:ConfirmartionReservationComponent},




 //************************************path rania*******************************
 { path : 'codepromo', component:CodePromoComponent},
 { path : 'tournois', component:ListTournoiComponent},
 { path :'addTournoi/:numevent', component: AddTournoiComponent},
 { path :'updatetournoi/:id', component: UpdateTournoiComponent},
 { path :'detailtournoi/:numevent',component: DetailtournoiComponent},
 { path : 'events', component:ListEventComponent},
 { path : 'eventsback', component:ListEventbackComponent},
 { path :'detailevent/:id',component: DetailEventComponent},
 { path :'addevent', component: AddEventComponent},
 { path :'updateevent/:id', component: UpdateEventComponent},
 { path :'tickets',component: ListTicketComponent},
 { path :'detailticket/:id',component: DetailTicketComponent},
 { path :'historiqueevent',component: ParticipationHistoryComponent},
 { path :'demandeEquipe/:numTournoi',component: DemandeEquipeComponent},





















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
