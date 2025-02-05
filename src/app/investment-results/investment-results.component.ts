import { Component, Input } from '@angular/core';
import type { InvestmentResult } from '../invesment-input.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
@Input() investmetResults?:InvestmentResult[];
constructor(){
  console.log(this.investmetResults);
}
}
