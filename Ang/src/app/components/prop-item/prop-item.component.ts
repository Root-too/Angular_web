import { Component, OnInit, Input } from '@angular/core';
import { Prop } from 'src/app/models/Prop';

@Component({
  selector: 'app-prop-item',
  templateUrl: './prop-item.component.html',
  styleUrls: ['./prop-item.component.css']
})
export class PropItemComponent implements OnInit {

  @Input() prop: Prop;
  
  constructor() { }

  ngOnInit() {
  }
 
}
