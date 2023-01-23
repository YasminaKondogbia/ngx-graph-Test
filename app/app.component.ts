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
      name: 'Exemple1',
      label: 'scan',
      link: '1',
    },
    {
      id: '1',
      name: 'Exemple2',
      label: 'Event#a',
      link: '3',
    },
    {
      id: '2',
      name: 'Exemple3',
      label: 'Event#x',
      link: '3',
    },
    {
      id: '3',
      name: 'Exemple4',
      label: 'Event#b',
      link: 'start',
    },
    {
      id: '4',
      name: 'Exemple5',
      label: 'Event#c',
      link: '2',
    },
    {
      id: '5',
      name: 'Exemple6',
      label: 'Event#y',
      link: 'start',
    },
    {
      id: '6',
      name: 'Exemple7',
      label: 'Event#z',
      link: '5',
    },
    {
      id: '7',
      name: 'Exemple8',
      label: 'Event#z',
      link: '3',
    },
    {
      id: '9',
      name: 'Exemple9',
      label: 'Event#z',
      link: '5',
    },
    {
      id: '10',
      name: 'Exemple10',
      label: 'Event#z',
      link: '4',
    },
  ];
  public ngOnInit(): void {
    this.showGraph();
  }

  showGraph() {
    this.dataExemple.forEach((element) => {
      this.hierarchialGraph.nodes.push({
        id: element.id,
        label: element.name,
      });
      this.hierarchialGraph.links.push({
        source: element.id,
        target: element.link,
        label: element.label,
      });
    });
  }
  alert(node) {
    console.log(node);
  }
}
