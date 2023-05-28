import {  Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard-menu.component.html',
 
  styles: [
    `
    
    `,
  ],

})
export class DashboardComponent {
  isData:boolean=false;
  request:any;
  isOpen:boolean=false;
  requestData:any={};

  verification(){
     this.isData=true;   
  }

  verificationData(){
    this.isData=false;   
  }

  onTabChanged(tabChangeEvent: MatTabChangeEvent){
     this.request=tabChangeEvent.tab;
  }

  fillForm(data:any){
     this.isOpen=true;
     this.requestData=data;
  }
  responseDataOutput(request:any){
    this.isOpen=false;
    this.request=request;
  }
}
