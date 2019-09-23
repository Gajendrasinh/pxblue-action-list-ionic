import { Component, OnInit  } from '@angular/core';
import * as Colors from '@pxblue/colors';

@Component({
  selector: 'empty-state',
  template: `
    <div class="container" [style.color]="Colors.gray[500]">
      <div style="line-height: 1">
        <ng-content select="[empty-icon]"></ng-content>
      </div>
      <h2>{{title}}</h2>
      <h4 *ngIf="description" [style.color]="Colors.blue[500]">{{description}}</h4>
      <div>
        <ng-content select="[action]"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./empty-state.component.scss'],
  inputs: [ 'title', 'description'],
  
})
export class EmptyStateComponent {

  constructor() {}
  title: string;
  description: string;
  Colors: Object = Colors;
}