import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form.component';

import { MaterialModule } from './material.module';
import { DashboardComponent } from './dashboard-menu.component';
import { VeriifcationDataComponent } from './verification_data.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConfigService } from './api.service';
@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule,
    MatTableModule,MatCheckboxModule,HttpClientModule],
  declarations: [ AppComponent, LoginFormComponent ,DashboardComponent,VeriifcationDataComponent],
  bootstrap:    [ AppComponent ],
  providers:[HttpClient,ConfigService]
})
export class AppModule { 
}
