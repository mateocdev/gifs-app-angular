import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {
  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  private _historial: string[] = [];
  private apiKey: string = 'cdpA4YG1aTFHXhXVMLGYzCiYZolDXj9K';
  private url: string = 'https://api.giphy.com/v1/gifs';
  public gifList: any[] = [];
  get historial() {
    return [...this._historial];
  }

  private saveLocalStorage(): void {
    localStorage.setItem('historial', JSON.stringify(this._historial));
  }

  private loadLocalStorage(): void {
    const historial = localStorage.getItem('historial');
    if (historial) {
      this._historial = JSON.parse(historial);
    }

    const lastSearch = this._historial[0];
    if (lastSearch) {
      this.searchTag(lastSearch);
    }
  }

  async searchTag(tag: string) {
    tag = tag.trim().toLowerCase();
    if (tag.length === 0) {
      return;
    }

    if (!this._historial.includes(tag)) {
      this._historial.unshift(tag);
      this._historial = this._historial.splice(0, 10);
      this.saveLocalStorage();
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');

    this.http
      .get(`${this.url}/search`, { params })
      .subscribe(({ data }: any) => {
        this.gifList = data;
      });
  }
}
