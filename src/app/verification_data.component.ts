import {  Component, Input, SimpleChanges } from '@angular/core';
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
}
@Component({
  selector: 'verification-data',
  templateUrl: './verification-data.component.html',
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
export class VeriifcationDataComponent {

  displayedColumns: string[] = ['select', 'createdOn', 'priority', 
  'sourceBu', 'businessKey','documentCaptureReference','accountShortName','transactionCurrency','transactionAmount'];
  
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  selection = new SelectionModel<PeriodicElement>(true, []);

  @Input()request: any={};

  constructor(private authenticationService: AuthenticationService){

  }
  ngOnChanges(changes: SimpleChanges ) {
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

}
