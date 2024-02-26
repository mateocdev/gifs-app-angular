import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @ViewChild('searchInput')
  public searchInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  public searchGifs(): void {
    const newSearch = this.searchInput.nativeElement.value;
    this.gifsService.searchTag(newSearch);
    this.searchInput.nativeElement.value = '';
  }
}
