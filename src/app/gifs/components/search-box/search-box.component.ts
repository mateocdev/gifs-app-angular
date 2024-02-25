import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @ViewChild('searchInput')
  public searchInput!: ElementRef<HTMLInputElement>;

  public searchGifs(): void {
    const newSearch = this.searchInput.nativeElement.value;
    console.log(newSearch);
  }
}
