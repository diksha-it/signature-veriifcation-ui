import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatTabsModule,
  MatTableModule,
  MatCheckboxModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
