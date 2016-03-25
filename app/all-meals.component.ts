import { Component, EventEmitter } from 'angular2/core';
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
      <new-meal (onSubmitNewMeal)="createEntry($event)"></new-meal>
    </div>
  `
})

export class AllMealsComponent {
  public allMeals: Meal[];
  createEntry(newEntry: any): void{
    this.allMeals.push(new Meal(newEntry[0], newEntry[1], newEntry[2]));
  }
}
