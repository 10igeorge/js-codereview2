import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { AllMealsComponent } from './all-meals.component';

@Component({
  selector: 'total-calories',
  inputs: ['allMeals'],
  template:`
    <div id="totalCalories">
      <h5>Total Calories:</h5>
      <p>{{ addCalories() }}</p>
    </div>
  `
})

export class TotalCaloriesComponent {
  public allMeals: Meal[];
  addCalories(){
    var total = 0;
    for (var i = 0; i < this.allMeals.length; i++){
      total += this.allMeals[i].calories;
    }
    return total;
  }
}
