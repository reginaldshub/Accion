import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
 
// import { Hero } from './../hero';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // @Input() hero: Hero;
  @Input()  name: string;
  // @Input('master') masterName: string;
  @Output() voted = new EventEmitter<boolean>();

  didVote = false;
 
  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
