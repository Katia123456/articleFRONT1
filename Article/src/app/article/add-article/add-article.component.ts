import { Component ,OnInit} from '@angular/core';
import { ArticleService } from '../article.service';
import { FormsModule } from '@angular/forms';
import { Article } from '../Article.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit{

  newArticle!:Article ;

  constructor(private articleService: ArticleService, private router:Router) { }
ngOnInit() {
  this.newArticle = new Article(1, '', '', '', new Date());

}
  onSubmit(): void {
    if (this.newArticle) {
      this.articleService.addNewArticle(9,``, ``, ``, new Date)
    }
  }
}

