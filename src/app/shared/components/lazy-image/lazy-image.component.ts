import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  public hasLoaded: boolean = false;
  ngOnInit(): void {
    if (!this.url) {
      throw new Error('Attribute url is required');
    }
  }
  @Input()
  public url!: string;

  @Input()
  public alt!: string;

  onLoad() {
    this.hasLoaded = true;
  }
}
