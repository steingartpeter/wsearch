import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term: string = '';

  constructor() {}

  ngOnInit(): void {}

  onInput(e: any) {
    this.term = e.target.value;
    console.log(`Term: ${this.term}`);
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    //console.log(`term: ${this.term}`);
    this.submitted.emit(this.term);
  }
}
