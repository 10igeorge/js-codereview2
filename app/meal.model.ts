interface IMeal {
  food: string;
  calories: number;
  details: string;
}

export class Meal implements IMeal {
  constructor(public food: string, public calories: number, public details: string){
  }
}
