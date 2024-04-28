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
import { RegisterComponent } from './register/register.component';
import { ListBlogbackComponent } from './Blog/list-blogback/list-blogback.component';
import { ListBlogComponent } from './Blog/list-blog/list-blog.component';
import { ListProduitComponent } from './produit/list-produit/list-produit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatusPanierComponent } from './produit/status-panier/status-panier.component';
import { DetailsProduitComponent } from './produit/details-produit/details-produit.component';
import { PanierDetailComponent } from './produit/panier-detail/panier-detail.component';
import { ValiderPanierComponent } from './produit/valider-panier/valider-panier.component';
import { BackListProduitComponent } from './produit/back-list-produit/back-list-produit.component';
import { CommandeHistoryComponent } from './produit/commande-history/commande-history.component';
import { SearchProduitComponent } from './produit/search-produit/search-produit.component';
import { NavbarProduitComponent } from './produit/navbar-produit/navbar-produit.component';

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
    NavbarProduitComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [BlogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
