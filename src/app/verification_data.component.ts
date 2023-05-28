import {  Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { AuthenticationService } from './auth.service';
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
application:string;
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
  selector: 'verification-data',
  templateUrl: './verification-data.component.html',
  styles: [
    `
    `,
  ],
  
})
export class VeriifcationDataComponent {

  displayedColumns: string[] = ['select', 'createdOn', 'priority', 
  'sourceBu', 'businessKey','documentCaptureReference','accountShortName','transactionCurrency','transactionAmount'];
  
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  selection = new SelectionModel<PeriodicElement>(true, []);
  clickedRows = new Set<PeriodicElement>();

  @Output() openRequestData = new EventEmitter<any>();
  @Input()request: any={};

  constructor(private authenticationService: AuthenticationService){

  }
  ngOnChanges(changes: SimpleChanges ) {
    this.selection.clear();
   this.getAllDetails();
  }

  getAllDetails(){
    this.authenticationService.getEvenSourceDetails("unassigned").subscribe((data: PeriodicElement[]) => {
      this.dataSource.data = data;
      });
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.businessKey}`;
  }

  assignedRequet(){
  this.authenticationService.changeEventStatus(this.selection.selected,"proceed").subscribe
  ((item: PeriodicElement[]) => {
    this.dataSource = new MatTableDataSource<PeriodicElement>(item);
    this.selection = new SelectionModel<PeriodicElement>(true, []);
  });
  }

  rejectRequest(){
    this.authenticationService.changeEventStatus(this.selection.selected,"reject").subscribe
    ((item: PeriodicElement[]) => {
      this.dataSource = new MatTableDataSource<PeriodicElement>(item);
      this.selection = new SelectionModel<PeriodicElement>(true, []);
    });
  }

  openRequest(){
  console.log(this.selection.selected);
    if(this.selection.selected.length==1){
       this.openRequestData.emit(this.selection.selected[0]);
    }else{
      alert("Only one request can open one time");

    }
  }



}
