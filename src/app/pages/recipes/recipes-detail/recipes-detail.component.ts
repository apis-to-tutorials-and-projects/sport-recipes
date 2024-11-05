import { Component, inject, OnInit } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin, map, of, switchMap } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-recipes-detail',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './recipes-detail.component.html',
  styleUrl: './recipes-detail.component.css'
})
export class RecipesDetailComponent implements OnInit{
  private recipes = inject(RecipesService);
  private route = inject(ActivatedRoute);
  recipesList = undefined;

  constructor() {
    this.recipes.recipesList$.subscribe((data) => {
      this.recipesList = data;
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("DATAAAAAAAAAAAAAAAAAAAAA")
    this.route.params.pipe( switchMap((value) => {
      console.log(value)
      return forkJoin({
        selectType: of(value['id']),
        drinks: this.recipes.getSelectDrinksByType(value['id'])
      }).pipe(
        map((data) => {
          console.log(data)
          return data;
        })
      );
    })).subscribe((data) => {
      console.log(data)
    });
   
  }

}
