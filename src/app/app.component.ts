import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div *ngIf="isLoginSuccess; else falseCondition">
  <dashboard ></dashboard>
</div>
<ng-template #falseCondition>
<my-login-form (submitEM)='open($event)'>Your Form With Error Message</my-login-form>
</ng-template>
  
  
  `,
  styles: []
})
export class AppComponent  {
 isLoginSuccess:boolean=false;
  open(event:any){
    console.log(event);
    this.isLoginSuccess=true;

  }

}
