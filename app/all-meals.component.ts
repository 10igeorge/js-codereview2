import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from "./meal.component";
import { NewMealComponent } from "./new-meal.component";

@Component({
  selector: 'all-meals',
  inputs: ['allMeals'],
  directives: [MealComponent, NewMealComponent],
  template:`
    <div class="container">
      <meal-display *ngFor="#currentMeal of allMeals" [meal]="currentMeal">
      </meal-display>
      <new-meal></new-meal>
    </div>
  `
})

export class AllMealsComponent {
  public allMeals: Meal[];
}
