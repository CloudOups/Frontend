import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './login/login.component';
import { ListBlogComponent } from './Blog/list-blog/list-blog.component';
import { ListBlogbackComponent } from './Blog/list-blogback/list-blogback.component';
import { UpdateBlogComponent } from './Blog/update-blog/update-blog.component';
import { AddBlogComponent } from './Blog/add-blog/add-blog.component'
import { BlogDetailsComponent } from './Blog/blog-details/blog-details.component';
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
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ConfirmartionReservationComponent } from './confirmartion-reservation/confirmartion-reservation.component';
import { ChoisirTerrainComponent } from './choisir-terrain/choisir-terrain.component';
import { ListEventbackComponent } from './Event/list-eventback/list-eventback.component';
import { UpdateEventComponent } from './Event/update-event/update-event.component';




const routes: Routes = [
  { path :'',redirectTo:'home',pathMatch:'full'},
  { path :'home', component: HomeComponent},
  //{ path :'addReservation', component: ReservationTerrainComponent},
  { path :'login', component: LoginComponent},
  


  //----------------------------------Path yassin------------------------------
   {path:'terrains',component:TerrainComponent},
   {path:'reservationTerrain',component:ReservationTerrainComponent},
   {path:'equipes',component:EquipeComponent},
   {path:'addterrains',component:AddTerrainComponent},
   {path:'updateterrain/:numTerrain',component:UpdateTerrainComponent},
   {path:'addEquipe',component:AddEquipeComponent},

   {path:'updateEquipe/:numEquipe/:chefEquipe',component:UpdateEquipeComponent},
   { path:'choisirTerrain/:startTime/:endTime/:typeTerrain', component: ChoisirTerrainComponent },
   { path:'addReservation', component: AddReservationComponent },

   {path:'confirmerReservation/:startTime/:endTime/:numTerrain/:prixReser',component:ConfirmartionReservationComponent},





  { path :'listblog', component: ListBlogComponent},
  { path :'blogdetails/:id', component: BlogDetailsComponent},
  { path :'addblog', component: AddBlogComponent},
  { path :'updateBlog/:id', component: UpdateBlogComponent},
  { path :'listBlogback', component: ListBlogbackComponent},

  { path : 'tournois', component:ListTournoiComponent},
  { path :'addtournoi', component: AddTournoiComponent},
  { path :'updatetournoi/:id', component: UpdateTournoiComponent},
  { path :'detailtournoi/:id',component: DetailtournoiComponent},
  { path : 'events', component:ListEventComponent},
  { path : 'eventsback', component:ListEventbackComponent},
  { path :'detailevent/:id',component: DetailEventComponent},
  { path :'addevent', component: AddEventComponent},
  { path :'updateevent/:id', component: UpdateEventComponent},

  { path :'tickets',component: ListTicketComponent},
  { path :'detailticket/:id',component: DetailTicketComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
