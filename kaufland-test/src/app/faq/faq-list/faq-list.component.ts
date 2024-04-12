import { Component } from '@angular/core';
import { FaqServiceService } from '../faq-service.service';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent {


  questions: FaqEntry[] = [];
  currentPage = 1;
  hasMoreData = true;
  isLoadingMore = false;

  constructor(private faqService: FaqServiceService) { }
  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions() {
    this.faqService.getQuestions(this.currentPage)
      .subscribe(data => {
        this.questions = this.questions.concat(data);
        this.hasMoreData = data.length === 10;
        this.isLoadingMore = false;
      });
  }

  loadMore() {
    this.isLoadingMore = true;
    this.currentPage++;
    this.loadQuestions();
  }

}
export interface FaqEntry {
  question: string;
  answer: string;
}