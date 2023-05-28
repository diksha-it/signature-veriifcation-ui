import {  Component, Output, EventEmitter, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from './auth.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheet } from './bottomsheet.component';
import { GcPdfViewer } from '@grapecity/gcpdfviewer';
 
export interface PeriodicElement {
  createdOn: string;
  priority: string;
  sourceBu: string;
  businessKey: string;
  documentCaptureReference:string;
  accountShortName:string;
  transactionCurrency:string;
  transactionAmount:number;
amountInMur:number;
comments:string;
createdBy:string;
debitAccountCcy:string;
debitAccountNumber:string;
discrepancyReason:string;
paymentDetails1:string;
paymentDetails2:string;
paymentDetails3:string;
paymentDetails4:string;
status:string;
updatedBy:string;
updatedOn:string;
verfied:string;
}
@Component({
  selector: 'open-request-form',
  templateUrl: './request.component.html',
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
export class RequestComponent implements OnInit{
  @Input()requestData: any={};
  @Output() responseDataOutput = new EventEmitter<PeriodicElement[]>();
  reasons: any[] = [
    {value: 'Signature Missing', viewValue: 'Signature Missing'},
    {value: 'Signature differs from T24', viewValue: 'Signature differs from T24'},
    {value: 'Signature not recorded on T24', viewValue: 'Signature not recorded on T24'},
    {value: 'Signature wrongly scanned on T24', viewValue: 'Signature wrongly scanned on T24'},
    {value: 'Signature and name mismatch', viewValue: 'Signature and name mismatch'},
    {value: 'Signature illegible', viewValue: 'Signature illegible'},
    {value: 'One authorised Signature missing', viewValue: 'One authorised Signature missing'},
    {value: 'Signatory not authorised to sign on account/for limit amount as per signature power',
     viewValue: 'Signatory not authorised to sign on account/for limit amount as per signature power'},
   ];
   form: FormGroup = new FormGroup({
    comments: new FormControl('',Validators.required),
    businessKey: new FormControl('',Validators.required),
    transactionCurrency: new FormControl('',Validators.required),
    transactionAmount: new FormControl('',Validators.required),
    amountInMur: new FormControl('',Validators.required),
    debitAccountNumber: new FormControl('',Validators.required),
    accountShortName: new FormControl('',Validators.required),
    debitAccountCcy: new FormControl('',Validators.required),
    paymentDetails1: new FormControl('',Validators.required),
    paymentDetails2: new FormControl('',Validators.required),
    paymentDetails3: new FormControl('',Validators.required),
    paymentDetails4: new FormControl('',Validators.required),
    verfied: new FormControl('',Validators.required),
    discrepancyReason: new FormControl('',Validators.required)
    });

  ngOnChanges(changes: SimpleChanges ) {
    console.log(this.requestData);
    this.form.controls['comments'].setValue(this.requestData.comments);
    this.form.controls['businessKey'].setValue(this.requestData.businessKey);
    this.form.controls['transactionCurrency'].setValue(this.requestData.transactionCurrency);
    this.form.controls['transactionAmount'].setValue(this.requestData.transactionAmount);
    this.form.controls['amountInMur'].setValue(this.requestData.amountInMur);
    this.form.controls['debitAccountNumber'].setValue(this.requestData.debitAccountNumber);
    this.form.controls['accountShortName'].setValue(this.requestData.accountShortName);
    this.form.controls['debitAccountCcy'].setValue(this.requestData.debitAccountCcy);
    this.form.controls['paymentDetails1'].setValue(this.requestData.paymentDetails1);
    this.form.controls['paymentDetails2'].setValue(this.requestData.paymentDetails2);
    this.form.controls['paymentDetails3'].setValue(this.requestData.paymentDetails3);
    this.form.controls['paymentDetails4'].setValue(this.requestData.paymentDetails4);
    this.form.controls['verfied'].setValue(this.requestData.verfied);
    this.form.controls['discrepancyReason'].setValue(this.requestData.discrepancyReason);
  }


  constructor(
    private authenticationService: AuthenticationService,
    private _bottomSheet: MatBottomSheet){

      

  }
  
  ngOnInit(): void {
        
  }

  ngAfterViewInit() {
    const viewer = new GcPdfViewer("#viewer", {
      workerSrc: "//node_modules/@grapecity/gcpdfviewer/gcpdfviewer.worker.js",
      restoreViewStateOnLoad: false
    });
    viewer.addDefaultPanels();
    viewer.open("assets/dummy.pdf");
  }


  submit(status:string) {
    if (this.form.valid) {
      this.requestData.verfied=this.form.value.verfied;
      let requestBody:PeriodicElement[]=[];
      requestBody[0]= this.requestData;

      this.requestData.discrepancyReason=this.form.controls['discrepancyReason'].value;
      this.authenticationService.changeEventStatus(requestBody,status).subscribe
      ((item: PeriodicElement[]) => {
       this.responseDataOutput.emit(item);
      });
     
    }
  }
  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

