import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as shape from 'd3-shape';
import { NgxGraphModule } from '@swimlane/ngx-graph';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular 5';
  hierarchialGraph = { nodes: [], links: [] };
  curve = shape.curveLinear;
  dataExemple = [
    {
      id: 'start',
      label: 'scan',
      position: 'x0',
    },
    {
      id: '1',
      label: 'Event#a',
      position: 'x1',
    },
    {
      id: '2',
      label: 'Event#x',
      position: 'x2',
    },
    {
      id: '3',
      label: 'Event#b',
      position: 'x3',
    },
    {
      id: '4',
      label: 'Event#c',
      position: 'x4',
    },
    {
      id: '5',
      label: 'Event#y',
      position: 'x5',
    },
    {
      id: '6',
      label: 'Event#z',
      position: 'x6',
    },
  ];
  public ngOnInit(): void {
    this.showGraph();
  }

  showGraph() {
    this.hierarchialGraph.nodes = [];

    this.hierarchialGraph.links = [];
  }
}
