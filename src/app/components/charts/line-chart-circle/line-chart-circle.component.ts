import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'g[app-line-chart-circle]',
  templateUrl: './line-chart-circle.component.html',
  styleUrls: ['./line-chart-circle.component.css']
})
export class LineChartCircleComponent implements OnInit {
  @Input() seriesIndex: any;
  @Input() dataSet: any;
  @Output() pClicked: EventEmitter<string>;

  constructor() { this.pClicked = new EventEmitter();  }
  pointClicked(event): void {
    this.pClicked.emit(event);
  }

  getToolTipValues(seriesIndex, yindex, dataSet) {
    let toolTipVals = {};
    toolTipVals = dataSet.data.xlabels[yindex]   + ' : ' + dataSet.data.series[seriesIndex].yval[yindex] + ' ' + dataSet.labels.yAxisID;

    return toolTipVals;

}

  ngOnInit() {
  }

}
