import { Component, Input } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get historial(): string[] {
    return this.gifsService.historial;
  }
  searchGifs(el: string): void {
    this.gifsService.searchTag(el);
  }
}
