import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from "./meal.component";
import { NewMealComponent } from "./new-meal.component";
import { MealInfoComponent } from "./meal-info.component";
import { EditEntryComponent } from "./edit-entry.component";
import { TotalCaloriesComponent } from "./total-calories.component";
import {CaloriePipe} from './calorie.pipe';

@Component({
  selector: 'all-meals',
  inputs: ['allMeals'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe],
  directives: [MealComponent, NewMealComponent, MealInfoComponent, EditEntryComponent, TotalCaloriesComponent],
  templateUrl:'app/all-meals.component.html'
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
