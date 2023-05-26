import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard-menu.component.html',
 
  styles: [
    `
    :host {
      display: flex;
      justify-content: left;
    }

    mat-card-title,
    mat-card-content {
      display: flex;
      justify-content: left;
    }
    `,
  ],

})
export class DashboardComponent {
  isData:boolean=false;
  verification(){
     this.isData=true;   
  }

  verificationData(){

  }
}
