import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { AllMealsComponent } from './all-meals.component';

@Component({
  selector: 'my-app',
  directives: [AllMealsComponent],
  template:`
    <div class="container">
      <h1>Meal Tracker</h1>
      <all-meals [allMeals]="meals"></all-meals>
    </div>
  `
})

export class AppComponent{
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Chickpea Salad", 151, "Made dairy free caesar dressing"),
      new Meal("Buffalo Sub", 475, "Drunk food noooooo"),
      new Meal("Coconut Overnight Oats", 258, "Texture is kind of like baby food")
    ];
  }
}
