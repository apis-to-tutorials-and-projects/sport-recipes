import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {

  private readonly _recipesList = new Subject<any>();

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly recipesList$ = this._recipesList.asObservable();


  // assigning a value to this.todos will push it onto the observable
  // and down to all of its subsribers (ex: this.todos = [])
  setList(val: any) {
    this._recipesList.next(val);
  }

  constructor(private http: HttpClient) {}
  getDrinksTypes(): Observable<any> {
    return this.http.get<any>(`./data/drink.json`);
  }

  getSelectDrinksByType(id: string) {
    return this.getDrinksTypes().pipe(filter((value) => value.id === id));
  }
}
