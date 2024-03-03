import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent implements OnInit {
  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('Attribute gif is required');
    }
  }
  @Input()
  public gif: any;
}
