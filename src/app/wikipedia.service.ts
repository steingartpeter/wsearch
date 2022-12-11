import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  baseUrl: string = 'https://en.wikipedia.org/w/api.php?';
  action: string = 'action=query&';
  format: string = 'format=json&';
  list: string = 'list=search&';
  utf8: string = 'utf8=1&';
  srsearch: string = 'srsearch=';

  constructor(private http: HttpClient) {}

  public search(term: string) {
    const fullUrl: string =
      this.baseUrl +
      this.action +
      this.format +
      this.list +
      this.utf8 +
      this.srsearch +
      term;
    return this.http.get(this.baseUrl, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      },
    });
  }
}
