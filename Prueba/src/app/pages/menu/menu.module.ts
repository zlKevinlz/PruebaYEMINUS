import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { CrudComponent } from 'src/app/components/crud/crud.component';
import { CodeComponent } from 'src/app/components/code/code.component';
import { ProductFormComponent } from 'src/app/components/product-form/product-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [MenuComponent, CrudComponent, CodeComponent, ProductFormComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ]
})
export class MenuModule { }
