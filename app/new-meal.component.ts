import {Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'new-meal',
    outputs: ['onSubmitNewMeal'],
    templateUrl:
      'app/new-meal.component.html'
})

export class NewMealComponent{
  public onSubmitNewMeal: EventEmitter<any>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  logFood(newFood: HTMLInputElement, newCalories: HTMLInputElement, newNotes: HTMLInputElement){
    if (newFood.value == ""){
      alert("Please enter food name");
    } else if (newCalories.value == ""){
      alert("Please enter calories");
    } else {
      var newEntry: any = [newFood.value, newCalories.value, newNotes.value];
      this.onSubmitNewMeal.emit(newEntry);
      newFood.value = "";
      newCalories.value = "";
      newNotes.value = "";
    }
  }
}
