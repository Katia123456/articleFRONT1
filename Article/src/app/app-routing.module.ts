import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './article/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { AddArticleComponent } from './article/add-article/add-article.component';


const routes: Routes = [
  {path:'article', component: HomeComponent},
  {path:'articleDetail/:id', component:ArticleDetailComponent},
  {path:'add-article', component: AddArticleComponent },
  {path:'contact', component: ContactComponent},
  {path:'abonnement', component: AbonnementComponent},
  {path:'', redirectTo:'Article',pathMatch:'full' },
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
