import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlogServiceService } from './Blog/blog-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DivHomeComponent } from './div-home/div-home.component';
import { SporthomeComponent } from './sporthome/sporthome.component';
import { StadehomeComponent } from './stadehome/stadehome.component';
import { AbonnementhomeComponent } from './abonnementhome/abonnementhome.component';
import { BlogDetailsComponent } from './Blog/blog-details/blog-details.component';
import { NavbarconnectedComponent } from './shared/navbarconnected/navbarconnected.component';
import { LoginComponent } from './login/login.component';
import { AddCommentaireComponent } from './Commentaire/add-commentaire/add-commentaire.component';
import { HomeComponent } from './shared/home/home.component';
import { UpdateBlogComponent } from './Blog/update-blog/update-blog.component';
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';
import { TableComponent } from './dashboard/table/table.component';
import { CalendrierEventsComponent } from './dashboard/calendrier-events/calendrier-events.component';
import { StaticsCircleComponent } from './dashboard/statics-circle/statics-circle.component';
import { StaticsBarsVComponent } from './dashboard/statics-bars-v/statics-bars-v.component';
import { StaticsBarsHComponent } from './dashboard/statics-bars-h/statics-bars-h.component';
import { Form2Component } from './dashboard/form2/form2.component';
import { FormVerticaleComponent } from './dashboard/form-verticale/form-verticale.component';
import { FormHorizontalComponent } from './dashboard/form-horizontal/form-horizontal.component';
import { ReservationTerrainComponent } from './reservation-terrain/reservation-terrain.component';
import { TerrainComponent } from './terrain/terrain.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AddTerrainComponent } from './add-terrain/add-terrain.component';
import { UpdateTerrainComponent } from './update-terrain/update-terrain.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { RegisterComponent } from './register/register.component';
import { ListBlogbackComponent } from './Blog/list-blogback/list-blogback.component';
import { ListBlogComponent } from './Blog/list-blog/list-blog.component';
import { AddBlogComponent } from './Blog/add-blog/add-blog.component';
import { AddTournoiComponent } from './Tournoi/add-tournoi/add-tournoi.component';
import { ListTournoiComponent } from './Tournoi/list-tournoi/list-tournoi.component';
import { DetailtournoiComponent } from './Tournoi/detailtournoi/detailtournoi.component';
import { ListEventComponent } from './Event/list-event/list-event.component';
import { AddEventComponent } from './Event/add-event/add-event.component';
import { UpdateEventComponent } from './Event/update-event/update-event.component';
import { MesReservationComponent } from './mes-reservation/mes-reservation.component';
import { UpdateTournoiComponent } from './Tournoi/update-tournoi/update-tournoi.component';
import { ListTicketComponent } from './Ticket/list-ticket/list-ticket.component';
import { DetailEventComponent } from './Event/detail-event/detail-event.component';
import { DetailTicketComponent } from './Ticket/detail-ticket/detail-ticket.component';
import { ConfirmartionReservationComponent } from './confirmartion-reservation/confirmartion-reservation.component';
import { ChoisirTerrainComponent } from './choisir-terrain/choisir-terrain.component';
import { ListEventbackComponent } from './Event/list-eventback/list-eventback.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DivHomeComponent,
    SporthomeComponent,
    StadehomeComponent,
    AbonnementhomeComponent,
    BlogDetailsComponent,
    NavbarconnectedComponent,
    LoginComponent,
    AddCommentaireComponent,
    HomeComponent,
    UpdateBlogComponent,
    SidemenuComponent,
    TableComponent,
    CalendrierEventsComponent,
    StaticsCircleComponent,
    StaticsBarsVComponent,
    StaticsBarsHComponent,
    Form2Component,
    FormVerticaleComponent,
    FormHorizontalComponent,
    ReservationTerrainComponent,
    TerrainComponent,
    EquipeComponent,
    AddTerrainComponent,
    UpdateTerrainComponent,
    UpdateEquipeComponent,
    AddEquipeComponent,
    RegisterComponent,
    ListBlogbackComponent,
    ListBlogComponent,
    AddBlogComponent,
    AddTournoiComponent,
    ListTournoiComponent,
    DetailtournoiComponent,
    ListEventComponent,
    AddEventComponent,
    UpdateEventComponent,
    MesReservationComponent,
    UpdateTournoiComponent,
    ListTicketComponent,
    DetailTicketComponent,
    DetailEventComponent,
    ConfirmartionReservationComponent,
    ChoisirTerrainComponent,
    ListEventbackComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
],
  providers: [BlogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
