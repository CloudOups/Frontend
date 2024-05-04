import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';




















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
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';

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
    ListBlogbackComponent,
    ListBlogComponent,
    AddBlogComponent,
    ReservationTerrainComponent,
    TerrainComponent,
    EquipeComponent,
    AddTerrainComponent,
    UpdateTerrainComponent,
    UpdateEquipeComponent,
    AddEquipeComponent,
    RegisterComponent,
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
    ListEventbackComponent,
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
    RegisterComponent,
    ListBlogbackComponent,
    ListBlogComponent,
    ListProduitComponent,
    StatusPanierComponent,
    DetailsProduitComponent,
    PanierDetailComponent,
    ValiderPanierComponent,
    BackListProduitComponent,
    CommandeHistoryComponent,
    SearchProduitComponent,
    NavbarProduitComponent,
    BackAddProduitComponent,
    BackDetailProduitComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [BlogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
