import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
  <div>
    <ul class="meals">
      <li>{{meal.food}}</li>
    </ul>
  </div>
  `
})
export class MealComponent {
  public meal: Meal;
}
