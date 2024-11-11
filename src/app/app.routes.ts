import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog-list/blog-list.component').then(mod => mod.BlogListComponent)
  },
  {
    path: 'blog/:id',
    loadComponent: () => import('./pages/blog/blog-detail/blog-detail.component').then(mod => mod.BlogDetailComponent)
  },
  {
    path: 'calculators',
    loadComponent: () => import('./pages/calculator/calculator.component').then(mod => mod.CalculatorComponent)
  },
  {
    path: 'calculator-drink',
    loadComponent: () => import('./pages/calculator/calculator-drink/calculator-drink.component').then(mod => mod.CalculatorDrinkComponent)
  },
  {
    path: 'calculator-gel',
    loadComponent: () => import('./pages/calculator/calculator-gel/calculator-gel.component').then(mod => mod.CalculatorGelComponent)
  },
  {
    path: 'recipes',
    loadComponent: () => import('./pages/recipes/recipes-list/recipes-list.component').then(mod => mod.RecipesListComponent)
  },
  {
    path: 'recipes/:id',
    loadComponent: () => import('./pages/recipes/recipes-detail/recipes-detail.component').then(mod => mod.RecipesDetailComponent)
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.component')
      .then(mod => mod.HomeComponent)
  }, 
  {
    path: '**',
    loadComponent: () => import('./pages/page-not-found/page-not-found.component')
      .then(mod => mod.PageNotFoundComponent)
  }];;
