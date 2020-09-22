import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, BaseChartDirective, Label} from 'ng2-charts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    chartData: ChartDataSets[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    ];
    chartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    chartLegend = false;
    chartType: ChartType = 'bar';

    @ViewChild(BaseChartDirective, {static: true}) chart: BaseChartDirective;

    constructor() {
    }

    ngOnInit() {
    }

    changeChartType(chartType: ChartType) {
        this.chartType = chartType;
    }
}
