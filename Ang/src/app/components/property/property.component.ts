import { Component, OnInit } from '@angular/core';
import { Prop } from '../../models/Prop';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  props: Prop[];

  constructor() { }

  ngOnInit() {
    this.props = [
      {
        id: 1,
        name: 'property 1'
      },
      {
        id: 2,
        name: 'property 2'
      },
      {
        id: 3,
        name: 'property 3'
      }
    ]
  }
  
}
