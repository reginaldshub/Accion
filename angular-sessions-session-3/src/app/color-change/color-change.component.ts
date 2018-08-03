import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.component.html',
  styleUrls: ['./color-change.component.css']
})
export class ColorChangeComponent implements OnInit {
  @Input() change;
  // @Output() onButtonClick: EventEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
  	// this.onButtonClick.emit()
  }

}
