import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './login/login.component';
//-------------------hedi---------------------------------------
import { ListBlogComponent } from './Blog/list-blog/list-blog.component';
import { ListBlogbackComponent } from './Blog/list-blogback/list-blogback.component';
import { UpdateBlogComponent } from './Blog/update-blog/update-blog.component';
import { AddBlogComponent } from './Blog/add-blog/add-blog.component'
import { BlogDetailsComponent } from './Blog/blog-details/blog-details.component';
import { ListProduitComponent } from './produit/list-produit/list-produit.component';
import { DetailsProduitComponent } from './produit/details-produit/details-produit.component';
import { PanierDetailComponent } from './produit/panier-detail/panier-detail.component';
import { ValiderPanierComponent } from './produit/valider-panier/valider-panier.component';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';



const routes: Routes = [
  { path :'',redirectTo:'home',pathMatch:'full'},
  { path :'home', component: HomeComponent},
  { path :'login', component: LoginComponent},




  // ------------------------------------------paths hedi-------------------------------------
  { path :'listblog', component: ListBlogComponent},
  { path :'blogdetails/:id', component: BlogDetailsComponent},
  { path :'addblog', component: AddBlogComponent},
  { path :'updateBlog/:id', component: UpdateBlogComponent},
  { path :'listBlogback', component: ListBlogbackComponent},
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  

    //---------------------------------------------paths michel-------------------------------------


    { path : 'produit', component: ListProduitComponent},
    { path : 'detailProduit/:id', component: DetailsProduitComponent},
    { path : 'panierDetail', component: PanierDetailComponent},
    { path : 'validerPanier', component: ValiderPanierComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
