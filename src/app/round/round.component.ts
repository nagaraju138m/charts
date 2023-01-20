import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent {

  data = {
    labels: ['HTML', 'CSS', 'JavaScript','Java', 'C#', 'ASP.NET', 'ANGULAR'],
    datasets: [
        {
            label: 'HTML',
            data: [75, 49, 95, 71, 66, 65, 45],
            backgroundColor: 'lightgreen',
            borderColor: 'lightgreen',
            pointHoverBorderColor: 'lightgreen',

        },
        {
            label: 'CSS',
            data: [85, 99, 75, 41, 86, 56, 55],
            backgroundColor: 'pink',
            borderColor: 'pink',
            pointHoverBorderColor: 'pink',
        },
        {
            label: 'JavaScript',
            data: [10, 20, 30, 40, 50, 60, 70],
            backgroundColor: 'red',
            borderColor: 'red',
            pointHoverBorderColor: 'red',
        }
    ]
};
  constructor(){}
  ngOnInit() {
}
}
