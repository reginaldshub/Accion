import { Component, OnInit, Input } from '@angular/core';

import { Hero } from './../hero';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() hero: Hero;
  @Input('master') masterName: string;
}
