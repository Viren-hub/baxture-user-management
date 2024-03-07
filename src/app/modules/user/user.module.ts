import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpsertComponent } from './user-upsert/user-upsert.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';


export interface User {
  id: number;
  firstName: string;
  lastName: string;
  address?: string;
  email: string;
  phone: string;
}

@NgModule({
  declarations: [
    UserListComponent,
    UserUpsertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule
  ]
})
export class UserModule { }
