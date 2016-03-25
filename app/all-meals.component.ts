import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from "./meal.component";
import { NewMealComponent } from "./new-meal.component";
import { MealInfoComponent } from "./meal-info.component";

@Component({
  selector: 'all-meals',
  inputs: ['allMeals'],
  directives: [MealComponent, NewMealComponent, MealInfoComponent],
  template:`
    <div class="container">
      <meal-display *ngFor="#currentMeal of allMeals" (click)="mealClicked(currentMeal)" [class.selected]="currentMeal === selectedMeal" [meal]="currentMeal">
      </meal-display>
      <meal-info [meal]="selectedMeal"></meal-info>
      <new-meal (onSubmitNewMeal)="createEntry($event)"></new-meal>
    </div>
  `
})

export class AllMealsComponent {
  public allMeals: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  createEntry(newEntry: any): void{
    this.allMeals.push(new Meal(newEntry[0], newEntry[1], newEntry[2]));
  }
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void{
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}
