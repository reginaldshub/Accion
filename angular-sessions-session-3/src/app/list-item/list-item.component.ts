import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-list-item]',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input("item") contact;
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteContact(i) {
  	this.onDelete.emit(i)
  }

}
