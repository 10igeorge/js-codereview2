import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { AllMealsComponent } from './all-meals.component';

@Component({
  selector: 'my-app',
  directives: [AllMealsComponent],
  template:`
    <div class="container">
      <div class="jumbotron">
        <h1>Meal Tracker</h1>
      </div>
      <div class="welcome">
        <h3>Welcome!</h3>
        <h4>Use this helpful app to track your daily meals. A warning label will appear for foods greater than 300 calories. Feel free to edit your entries as you go. Enjoy!</h4><hr>
        <br><br>
      </div>
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
