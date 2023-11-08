import { Injectable } from '@angular/core';
import { Article } from './Article.module';
import { ARTICLES } from './ARTICLES.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: Article[] = [];
  searchResults: Article[] = [];

  constructor(private http:HttpClient) {
    this.articles = [...ARTICLES];

   }

  getArticleList(): Observable<any>  {
    return this.http.get<any>('https://localhost:44333/api/article');

  }

  getArticleById(articleId:number){
    return ARTICLES.find(article=> article.id == +articleId);
  }

  searchArticlesByLetter(searchTerm: string): Article[] {
    searchTerm = searchTerm.toLowerCase();
    return this.articles.filter(article => article.title.toLowerCase().includes(searchTerm));
  }

  

  addNewArticle(id: number, title: string, img: any, author: string, publicationDate: Date): void {
    const newArticle = new Article(id, title,img , author, publicationDate);
    this.articles.push(newArticle);
  }

}
