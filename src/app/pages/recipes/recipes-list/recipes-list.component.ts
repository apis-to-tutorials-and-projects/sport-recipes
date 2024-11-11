import { Component, inject } from '@angular/core';
import { RecipesService } from '../../../services/recipes.service';
import { JsonPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [JsonPipe, RouterModule],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {
  private recipes = inject(RecipesService);
  private _router = inject(Router);
  recipesList: any;
  recipe: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.recipes.getDrinksTypes().subscribe((data) => {
      this.recipes.setList(data);
      console.log('===========');
      console.log(data);
      this.recipesList = data.recipes;
    })
  }

  viewDetails(recipe: any) {
    // Lógica para redirigir a la vista de detalles (ejemplo de uso de rutas o servicios)
    console.log('Detalles de la receta:', recipe);
    this._router.navigate(['recipes', recipe.id])
  }
}
