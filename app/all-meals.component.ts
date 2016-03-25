// import { Meal } from './meal.model';
//
// @Component({
//   selector: 'all-meals',
//   inputs: ['allMeals'],
//   directives: [KegComponent, EditKegInfoComponent, NewKegComponent, SellPintComponent],
//   template:`
//     <div class="container">
//       <select (change)="onChange($event.target.value)">
//         <option value="all" selected="selected">All Kegs</option>
//         <option value="underFive">Under $5</option>
//         <option value="strong">High ABV</option>
//         <option value="weak">Low ABV</option>
//       </select>
//       <keg-display *ngFor="#currentKeg of kegList | price: filterPrice" (click)="kegClicked(currentKeg)" [class.selected]="currentKeg === selectedKeg" [keg]="currentKeg">
//       </keg-display>
//       <edit-keg-info [keg]="selectedKeg"></edit-keg-info><br>
//       <sell-pint *ngIf="selectedKeg"></sell-pint><br><br>
//       <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
//     </div>
//   `
// })
