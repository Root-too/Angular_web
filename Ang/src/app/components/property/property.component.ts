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
        name: 'Vikrant Heights',
        location: 'Ghatkopar',
        bhk: 2,
        price: 80000,
        area: 1200,
        age: 5,
        image:'Ang/src/app/uploads/house_1.png'
      },
      {
        id: 2,
        name: 'Anand Hills',
        location: 'Dadar',
        bhk: 2,
        price: 60000,
        area: 1100,
        age: 3,
        image:'../../uploads/house7.png'
      },
      {
        id: 3,
        name: 'Roshan Heights',
        location: 'Chembur',
        bhk: 1,
        price: 75000,
        area: 1000,
        age: 7,
        image:'../../uploads/house8.png'
      }
    ]
  }


  addForm(prop:Prop) {
    this.props.push(prop);
  }
  
}
