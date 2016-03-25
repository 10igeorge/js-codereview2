import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-info',
  inputs: ['meal'],
  template:`
    <div *ngIf="meal">
      <h4>{{meal.food}}</h4>
      <p>{{meal.calories}} calories</p>
      <p *ngIf="meal.details">Notes: {{meal.details}}</p>
    </div>
  `
})

export class MealInfoComponent{
  public meal: Meal;
}
