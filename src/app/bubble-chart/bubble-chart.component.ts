import { Component } from '@angular/core';
import * as Highcharts from "highcharts";
import HC_more from "highcharts/highcharts-more";
HC_more(Highcharts);

interface ExtendedChart extends Highcharts.PlotPackedbubbleOptions {
  layoutAlgorithm: {
    splitSeries: any;
  };
}

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  ngOnInit() {
    this.bubbleChartActive();
  }

  bubbleChartActive() {
    const chart = Highcharts.chart({
      chart: {
        renderTo: "container",
        type: "packedbubble",
        height: "100%"
      },
      title: {
        text: "Skills"
      },
      tooltip: {
        useHTML: true,
        pointFormat: "<b>{point.name}:</b> {point.value}m CO<sub>2</sub>"
      },
      plotOptions: {
        packedbubble: {
          minSize: "20%",
          maxSize: "100%",
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
            gravitationalConstant: 0.05,
            splitSeries: true,
            seriesInteraction: false,
            dragBetweenSeries: true,
            parentNodeLimit: true
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
            style: {
              color: "black",
              textOutline: "none",
              fontWeight: "normal"
            }
          }
        } as ExtendedChart
      },
      series: [
        {
          type: "packedbubble",
          name: "Network",
          data: [
            {
              name: "JavaScript",
              value: 250
            },
            {
              name: "Java",
              value: 170
            },
            {
              name: "HTML",
              value: 50
            },
            {
              name: "CSS",
              value: 50
            },
            {
              name: "Angular",
              value: 250
            },
            {
              name: "AWS",
              value: 60
            },
            {
              name: "GCP",
              value: 30
            },
            {
              name: "Azure",
              value: 40
            },
            {
              name: "Git",
              value: 100
            },
            {
              name: "React",
              value: 80
            },
            {
              name: "Product Management",
              value: 150
            },
            {
              name: "People's Management",
              value: 200
            }
          ]
        }
      ]
    });
  }
}
