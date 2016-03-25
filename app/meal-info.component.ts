import { Component } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-info',
  inputs: ['meal'],
  template:`
    <div *ngIf="meal">
      <h4>{{meal.food}}</h4>
      <p>{{meal.calories}} calories</p>
      <p>Notes: {{meal.details}}</p>
    </div>
  `
})

export class MealInfoComponent{
  public meal: Meal;
}