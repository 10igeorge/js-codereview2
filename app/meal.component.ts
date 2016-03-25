import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
  <div>
    <ul class="list-group">
      <a class="list-group-item">{{meal.food}}<p class="unhealthy" *ngIf="meal.calories > 300">This food is high in calories</p></a>
    </ul>
  </div>
  `
})
export class MealComponent {
  public meal: Meal;

}
