import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primaApp app Workss!';
  prova = 'ProVaaaaaaaaaaa';

  counter:number =0;
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }

  myText:string= "  Finche la Barca Va..";

  addText(){
    this.myText += " ..Lasciala andare";
  }

  resetText(){
    this.myText="  Finche la Barca Va..";
  }

}
