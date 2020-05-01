import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() labelName: string;
  @Input() itemsList;
  @Output() valueChange = new EventEmitter();
  selectedValue = "select"
  constructor() { }

  ngOnInit(): void {
  }
 
  changeValue() {
   
    this.valueChange.emit(this.selectedValue);
  }
}
