import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {
  MatBottomSheetModule
} from '@angular/material/bottom-sheet';
const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatTabsModule,
  MatTableModule,
  MatCheckboxModule,
  MatGridListModule,
  MatSelectModule,
  MatRadioModule,
  MatBottomSheetModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
