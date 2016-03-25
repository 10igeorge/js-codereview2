import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from "./meal.component";
import { NewMealComponent } from "./new-meal.component";
import { MealInfoComponent } from "./meal-info.component";
import { EditEntryComponent } from "./edit-entry.component";
import {CaloriePipe} from './calorie.pipe';

@Component({
  selector: 'all-meals',
  inputs: ['allMeals'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe],
  directives: [MealComponent, NewMealComponent, MealInfoComponent, EditEntryComponent],
  template:`
    <div class="container">
    <select (change)="onChange($event.target.value)">
        <option value="all" selected="selected">All entries</option>
        <option value="under300">Entries under 300 calories</option>
      </select>
      <meal-display *ngFor="#currentMeal of allMeals | calorie: filterCalories" (click)="mealClicked(currentMeal)" [class.selected]="currentMeal === selectedMeal" [meal]="currentMeal">
      </meal-display>
      <meal-info [meal]="selectedMeal"></meal-info>
      <edit-entry [meal]="selectedMeal"></edit-entry>
      <new-meal (onSubmitNewMeal)="createEntry($event)"></new-meal>
    </div>
  `
})

export class AllMealsComponent {
  public allMeals: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalories: string = "all";
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
  onChange(filterOption){
    this.filterCalories = filterOption;
  }
}
