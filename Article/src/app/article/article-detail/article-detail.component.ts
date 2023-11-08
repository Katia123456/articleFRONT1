import { Component , OnInit} from '@angular/core';
import { Article } from '../Article.module';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  articleList :Article[] | undefined ;
  article : Article |undefined;
  
  

  constructor(private route:ActivatedRoute, private router:Router, private articleService : ArticleService){

  }

  ngOnInit(): void {
      const articleId: string | null = this.route.snapshot.paramMap.get('id');
      if(articleId){
      this.article= this.articleService.getArticleById( +articleId);
      }
    }
    goToArticleList(){
      this.router.navigate(['/article']);
    }
}


