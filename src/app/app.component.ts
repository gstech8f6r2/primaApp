import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primaApp app Workss!';
  prova = 'ProVaaaaaaaaaaa';

  counter=0;
  increment(){
    this.counter++;
  }
}
