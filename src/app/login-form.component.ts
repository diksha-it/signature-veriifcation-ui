import {  Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfigService } from './api.service';
import { AuthenticationService } from './auth.service';

@Component({
  selector: 'my-login-form',
  templateUrl: './login-form.component.html',
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        margin: 100px 0px;
      }

      .mat-form-field {
        width: 100%;
        min-width: 300px;
      }

      mat-card-title,
      mat-card-content {
        display: flex;
        justify-content: center;
      }

      .error {
        padding: 16px;
        width: 200px;
        color: white;
        background-color: red;
      }

      .button {
        display: flex;
        justify-content: flex-end;
      }
    `,
  ],

})
export class LoginFormComponent implements OnInit{

    form: FormGroup = new FormGroup({
        username: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required),
      });
      constructor(private configService:ConfigService,
        private authenticationService: AuthenticationService){

      }
    ngOnInit(): void {
        
    }
  

  submit() {
    if (this.form.valid) {
        this.authenticationService.authenticationService(this.form.controls["username"].value, this.form.controls["password"].value).subscribe((result)=> {
            this.submitEM.emit(true);
    
          }, () => {
            this.error="User details invalid";
            this.submitEM.emit(false);
          });
     
    }else{
        this.error="User details invalid"; 
    }
  }
  error: string | null=null;

  @Output() submitEM = new EventEmitter<boolean>();
}
