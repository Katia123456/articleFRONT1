import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articleList: any;
  article:any;
  searchTerm: string = '';
  

  constructor(private router:Router,
             private articleService:ArticleService 
    ){}

    ngOnInit(){
      this.articleList = this.articleService.getArticleList().subscribe((data)=>this.articleList=data); 
    }
  

  goToArticle(article:any){
    this.router.navigate(['/articleDetail', article.id])
  }
  onSearch() {
    if(this.searchTerm){
      this.articleList = this.articleService.searchArticlesByLetter(this.searchTerm) }
}
}
 
  



