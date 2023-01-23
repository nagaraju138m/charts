import { Component } from '@angular/core';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.scss']
})
export class PolarCHartComponent {

    data = {
      datasets: [{
          data: [11,16,7,3,14],
          backgroundColor: [
              "#42A5F5",
              "#66BB6A",
              "#FFA726",
              "#26C6DA",
              "#7E57C2"
          ],
          label: 'Dataset 1'
      },

      ],
      labels: [
          "Red",
          "Green",
          "Yellow",
          "Pink",
          "Blue"
      ]
  };

    chartOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: '#ebedef'
                }
            }
        }
    }

}
