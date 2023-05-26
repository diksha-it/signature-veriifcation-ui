import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dashboard',
  template: `
      <mat-card>
            <mat-card-title>Signature Verification Dashboard</mat-card-title>
      <mat-card-content>    
          <a routerLink="." (click)="verification()">IFT – Signature Verification
          </a>
          <a routerLink="." (click)="verificationData()">IFT – Signature Verification Data</a>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
     
    `,
  ],

})
export class DashboardComponent {

  verification(){

  }

  verificationData(){

  }
}
