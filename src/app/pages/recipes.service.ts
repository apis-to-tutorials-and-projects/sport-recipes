import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) {}
  getDrinks(): Observable<any> {
    return this.http.get<any>(`/data/drink.json`);
  }
}
