import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from "./meal.component";

@Component({
  selector: 'all-meals',
  inputs: ['allMeals'],
  directives: [MealComponent],
  template:`
    <div class="container">
      <meal-display *ngFor="#currentMeal of allMeals" [meal]="currentMeal">
      </meal-display>
    </div>
  `
})

export class AllMealsComponent {
  public allMeals: Meal[];
}
