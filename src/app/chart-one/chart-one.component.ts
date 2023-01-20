import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-one',
  templateUrl: './chart-one.component.html',
  styleUrls: ['./chart-one.component.scss']
})
export class ChartOneComponent implements OnInit {



  data = {
    labels: ['January', 'February', 'March',
             'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            tension: .4,
            borderColor: '#42A5F5'
        },
        {
            label: 'Second Dataset',
            data: [12, 51, 62, 33, 21, 62, 45],
            fill: false,
            borderDash: [5, 5],
            borderColor: '#FFA726',
            tension: .4,
            backgroundColor: 'rgba(255,167,38,0.2)'
        },
        {
            label: 'third Dataset',
            data: [52, 69, 72, 33, 41, 32, 15],
            fill: false,
            borderDash: [5, 5],
            borderColor: 'green',
            tension: .4,
            backgroundColor: 'red'
        }
    ]
};
chartOptions = {
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
    }
};


  constructor() { }

  ngOnInit() {

}

}
