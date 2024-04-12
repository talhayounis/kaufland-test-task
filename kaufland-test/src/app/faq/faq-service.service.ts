import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FaqEntry } from './faq-list/faq-list.component';

@Injectable({
  providedIn: 'root'
})
export class FaqServiceService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getQuestions(page: number): Observable<FaqEntry[]> {
    const url = `https://jsonplaceholder.typicode.com/posts?_start=${(page - 1) * 10}&_limit=10`;
    return this.http.get<any[]>(url)
      .pipe(
        map(data => data.map(entry => ({ question: entry.title, answer: entry.body })))
      );
  }
}
