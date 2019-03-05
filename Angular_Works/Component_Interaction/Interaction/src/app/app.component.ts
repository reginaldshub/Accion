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
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. Srini', 'Mr. Regi', 'Mr. Santhu'];
 
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }


isemployed = true;
 simple() {
   console.log("simple method started")
   let person = new Promise((resolve, reject) => {
     console.log("promise started executing");
     if (this.isemployed == true) {
       setTimeout(() => {
         resolve("he will bring toys to his children");
       }, 5000)
     } else {
       reject(new Error("he will not bring toys to his children"))
     }
   })
   person
     .then(data => {
       console.log(data);
     })
     .catch(error => {
       console.log(error.message);
     })
     console.log("simple method is ended")
 }

}
