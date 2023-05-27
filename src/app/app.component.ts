import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent  {
 isLoginSuccess:boolean=false;
  open(event:boolean){
    this.isLoginSuccess=event;
  }

}
