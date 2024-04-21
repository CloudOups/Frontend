import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DivHomeComponent } from './div-home/div-home.component';
import { SporthomeComponent } from './sporthome/sporthome.component';
import { StadehomeComponent } from './stadehome/stadehome.component';
import { AbonnementhomeComponent } from './abonnementhome/abonnementhome.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { NavbarconnectedComponent } from './navbarconnected/navbarconnected.component';
import { LoginComponent } from './login/login.component';
<<<<<<< Updated upstream
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
=======
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
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DivHomeComponent,
    SporthomeComponent,
    StadehomeComponent,
    AbonnementhomeComponent,
    BlogComponent,
    BlogdetailsComponent,
    NavbarconnectedComponent,
    LoginComponent,
<<<<<<< Updated upstream
    CommentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
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
    DetailsProduitComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
