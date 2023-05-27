import {  Component, OnInit ,SimpleChanges,OnChanges,Input,OnDestroy} from '@angular/core';
import { AuthenticationService } from './auth.service';

export interface PeriodicElement {
  label: string;
  count: number;
}

@Component({
  selector: 'verification-data-count',
  templateUrl: './verification-data-count.component.html',
  styles: [
    `

    `,
  ],
  
})
export class VeriifcationDataCountComponent implements OnInit,OnChanges ,OnDestroy {

  @Input()request: any={};

  displayedColumns: string[] = ['label', 'count'];
  dataSource : PeriodicElement[] = [];

  constructor(private authenticationService: AuthenticationService){

  }
  ngOnChanges(changes: SimpleChanges ) {
    this.authenticationService.getEvenSourceDetails().subscribe(d=>{
    this.dataSource=d;
    });
  }

  ngOnInit(): void {
   
  }

  ngOnDestroy(){
    this.request={};
  }

}
