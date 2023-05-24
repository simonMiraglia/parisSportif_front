import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Tennis',
    children: [{name: 'Roland-Garros'}, {name: 'Wimbledon'}],
  },
  {
    name: 'Basket-ball',
    children: [{name: 'Euroligue'}, {name: 'NBA'}, {name: 'Pro A'}],
  },
  {
    name: 'Football',
    children: [
      {
        name: 'Ligue des champions',
        children: [{name: 'City - Inter'}],
      },
      {
        name: 'Ligue 1',
        children: [{name: 'X-Y'}, {name: 'X-Y'}],
      },
      {
        name: 'Première ligue',
        children: [{name: 'X-Y'}, {name: 'Z-W'}],
      },
    ],
    
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-page2',
  templateUrl: 'page2.component.html',
  styleUrls: ['page2.component.css'],
})
export class Page2Component {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
