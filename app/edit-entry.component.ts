import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-entry',
  inputs: ['meal'],
  template:`
    <div class="meal-form" *ngIf="meal">
      <h5>Edit this entry: </h5>
      <label>Food: </label>
      <input [(ngModel)]="meal.food"/><br>
      <label>Calories: </label>
      <input [(ngModel)]="meal.calories"/><br>
      <label>Notes: </label>
      <input [(ngModel)]="meal.details"/><br>
    </div>
  `
})

export class EditEntryComponent {
  public meal: Meal;
}
