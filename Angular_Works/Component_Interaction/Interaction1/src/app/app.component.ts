import { Component } from '@angular/core';


import { HEROES } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes = HEROES;
  master = 'Master';
}
