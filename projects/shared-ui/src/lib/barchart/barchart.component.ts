import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-barchart',
    imports: [BaseChartDirective],
    templateUrl: './barchart.component.html',
    styleUrl: './barchart.component.scss'
})
export class BarchartComponent {
  public barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],

    datasets: [
      {
        data: [42, 58, 51, 72, 66, 83],//bar data
        

        //"When Chart.js asks for the background color, run this function and calculate the color."
        //Chart.js gives your function some information called context.
        backgroundColor: (context: any) => {//This is an arrow function. "Here is a function that receives context and then performs some work."

          //And we are interested in the chart: context.chart. Imagine context contains: chart, dataIndex, datasetIndex etc, You only need chart. You only need chart. So: const chart = context.chart;
          const chart = context.chart;//Take the chart property from context and store it in a variable called chart.
          const { ctx, chartArea } = chart;//This is called object destructuring. The chart object has many properties.
          //Among them are: ctx, chartArea, data, options etc. You need only: ctx, chartArea
          //So: const { ctx, chartArea } = chart; means: "Take ctx and chartArea from chart and create variables with those names."
          //It's basically a shorter way of writing: const ctx = chart.ctx; and const chartArea = chart.chartArea;

          //NOTE : What is ctx? 
          //This is important because you are working with <canvas>. Earlier you had: <canvas baseChart></canvas>
          //A canvas has a drawing context. ctx is basically the object that lets JavaScript draw on that canvas.
          //It can do things like: ctx.fillRect(...), ctx.beginPath(), ctx.createLinearGradient(...)
          //In your code, you're using: ctx.createLinearGradient(...), So: Canvas <--- ctx <--- createLinearGradient()




          //chartArea tells you the boundaries of the area where Chart.js is drawing. It contains things like: top, bottom, left, right.
          //So chartArea.top gives the top position and chartArea.bottom gives the bottom position.
          if (!chartArea) {//The ! means NOT. Means chartArea does not exist.
            //Why could that happen? When Chart.js is initially creating the chart, the chart area may not have been calculated yet.
            //So if there is no chartArea then return just blue color
            return '#2563eb';
          }

          const gradient = ctx.createLinearGradient(//This creates the gradient. Syntax : createLinearGradient(x1, y1, x2, y2)
            0,//x1
            chartArea.top,//y1 : top
            0,//x2
            chartArea.bottom,//y2 : bottom
          );

          gradient.addColorStop(0, '#2563eb');//At position 0 (the beginning), use blue.
          gradient.addColorStop(1, '#087f72');//At position 1 (the end), use green.
          // y two times means in between 0 and 1 we can also addColorStop so at that position the color will get change
          return gradient;
        },

        borderWidth: 0,//This controls the border/thickness around each bar.
        borderRadius: 8,//This controls how rounded the corners of the bars are.
        borderSkipped: false,//Chart.js can normally skip drawing a border on one side of a bar. For example, it could skip the bottom border, you are saying: "Don't skip any border side." So all sides are treated normally.
        categoryPercentage: 0.9,//This controls how much of the available category space is used by the bars. categoryPercentage determines how much of that category space is allocated to the bar group.
        barPercentage: 0.85,//This controls the actual bar width inside the space allocated to the bar.
      },
    ],
  };

  public barChartType = 'bar' as const;//'bar' : This is the important part for Chart.js. It tells Chart.js: "The chart type is a bar chart."
  //Angular takes the value of: barChartType which is:'bar' and passes it to ng2-charts.
  //Without as const: barChartType = 'bar'; TypeScript may treat the variable as a general string.
  //With as const: barChartType = 'bar' as const; TypeScript says: "Keep this value specifically as the literal 'bar'. Don't treat it as just any string." So its type becomes: 'bar'
  //As const : This is useful because Chart.js expects specific allowed chart types such as:

  public barChartOptions = {
    responsive: true,//Adjust the chart according to the size of its container. For example, imagine your chart is inside a large screen. If the screen/container becomes smaller, then the chart adjusts itself.

    maintainAspectRatio: false,//Don't force the chart to maintain its default aspect ratio. Let the container control the height.

    plugins: {//Chart.js has different plugins/features.
      legend: {//One of those built-in features is the legend.
        //A legend usually tells you what the dataset represents. For example, Chart.js might normally show: ■ Sales or: ■ Revenue
        display: false,//If u don't want in ur chat then just keep false
      },
    },

    scales: {//A chart has axes/scales.
      y: {
        display: false,//Don't display the Y-axis. Normally we can see some numbers beside the graph towards y-axis so to undisaply it we are using false

        grid: {
          display: false,//A chart normally has horizontal grid lines:
        },

        beginAtZero: true,//Start the Y-axis from 0

        max: 100,//Make 100 the maximum value of the Y-axis.
        //All values are between 0 and 100.
      },

      x: {//This controls the X-axis.
        grid: {
          display: false,//Hide the X-axis grid lines.
        },
      },
    },
  };
}
