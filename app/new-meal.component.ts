import {Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'new-meal',
    outputs: ['onSubmitNewMeal'],
    template:`
      <div class='meal-form'>
      <h4>Log meal:</h4>
      <input placeholder="Food" #newFood required><br>
      <input placeholder="Calories" #newCalories required><br>
      <textarea placeholder="Notes" #newNotes rows="5" cols="25"></textarea><br><br>
      <button (click)="logFood(newFood, newCalories, newNotes)" type="submit" class="btn btn-info">Log Meal</button>
      </div>
    `
})

export class NewMealComponent{
  public onSubmitNewMeal: EventEmitter<any>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  logFood(newFood: HTMLInputElement, newCalories: HTMLInputElement, newNotes: HTMLInputElement){
    var newEntry: any = [newFood.value, newCalories.value, newNotes.value];
    this.onSubmitNewMeal.emit(newEntry);
    newFood.value = "";
    newCalories.value = "";
    newNotes.value = "";
  }
}
