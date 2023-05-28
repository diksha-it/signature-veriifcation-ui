import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form.component';

import { MaterialModule } from './material.module';
import { DashboardComponent } from './dashboard-menu.component';
import { VeriifcationDataComponent } from './verification_data.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './auth.service';
import { HttpInterceptorService } from './httpInterceptor.service';
import { VeriifcationDataCountComponent } from './verification-data-count.component';
import { RequestComponent } from './request.component';
import { BottomSheetOverviewExampleSheet } from './bottomsheet.component';
@NgModule({
  imports:      [
      BrowserModule,
      ReactiveFormsModule, 
      MaterialModule, 
      BrowserAnimationsModule,
      HttpClientModule],
  declarations: [ AppComponent, LoginFormComponent ,DashboardComponent,VeriifcationDataComponent,
    VeriifcationDataCountComponent,RequestComponent,BottomSheetOverviewExampleSheet],
  bootstrap:    [ AppComponent ],
  providers:[HttpClient,AuthenticationService,{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }]
})
export class AppModule { 
}
