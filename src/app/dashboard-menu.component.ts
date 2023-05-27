import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';

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
  request:any;
  verification(){
     this.isData=true;   
  }

  verificationData(){
    this.isData=false;   
  }

  onTabChanged(tabChangeEvent: MatTabChangeEvent){
     this.request=tabChangeEvent.tab;
  }
}
