import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ArticlePage/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './article/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import {CommonModule} from '@angular/common'
import { ToolbarBasicComponent } from "./ArticlePage/toolbar-basic/toolbar-basic.component";
import { FooterComponent } from './ArticlePage/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        ContactComponent,
        FooterComponent,
        AddArticleComponent,
          
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        CommonModule,
        ToolbarBasicComponent,        
        FormsModule  ,
        ReactiveFormsModule      
    ]
})
export class AppModule { }
