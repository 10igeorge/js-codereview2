import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calorie",
  pure: false
})

export class CaloriePipe implements PipeTransform{
  transform(input: Meal[], args){
    var desiredFilter = args[0];
    if(desiredFilter === "under300"){
      return input.filter((meal) => {
        return meal.calories <= 300;
      });
    } else if (desiredFilter === "over300"){
      return input.filter((meal) => {
        return meal.calories >= 300;
      });
    } else {
      return input;
    }
  }
}
