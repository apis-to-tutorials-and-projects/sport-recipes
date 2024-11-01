import { Component, inject } from '@angular/core';
import { RecipesService } from '../../recipes.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {
  private recipes = inject(RecipesService);
  recipesList: any;
  recipe: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.recipes.getDrinks().subscribe((data) => {
      console.log('===========');
      console.log(data);
      this.recipesList = data.recipes;
    })
  }

  viewDetails() {
    // Lógica para redirigir a la vista de detalles (ejemplo de uso de rutas o servicios)
    console.log('Detalles de la receta:', this.recipe);
  }
}
