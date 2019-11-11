import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  @Output() addForm: EventEmitter<any> = new EventEmitter();

  name: string;
  location: string;
  bhk: number;
  price: number;
  area: number;
  age: number;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const prop = {
      name: this.name,
      location: this.location,
      bhk: this.bhk,
      price: this.price,
      area: this.area,
      age: this.age
    }
    
    this.addForm.emit(prop);
  }

}
