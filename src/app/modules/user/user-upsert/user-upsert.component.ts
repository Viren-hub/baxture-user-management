import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { DataService } from '../../../services/data.service';
import { User } from '../user';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.css']
})
export class UserUpsertComponent implements OnInit {
  userForm: FormGroup;
  selectedUser: User | null = null;

  constructor(private fb: FormBuilder, private userService: UserService, private dataService: DataService) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  ngOnInit(): void {
    this.dataService.selectedUser$.subscribe(user => {
      this.selectedUser = user;
      if (user) {
        this.userForm.patchValue({
          firstName: user.firstName,
          lastName: user.lastName,
          address: user.address || '',
          email: user.email,
          phone: user.phone
        });
      }
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      if (this.selectedUser) {
        const updatedUser: User = {
          id: this.selectedUser.id,
          firstName: this.userForm.value.firstName,
          lastName: this.userForm.value.lastName,
          address: this.userForm.value.address,
          email: this.userForm.value.email,
          phone: this.userForm.value.phone
        };
        this.userService.updateUser(updatedUser);
      } else {
        const newUser: User = {
          id: 0,
          firstName: this.userForm.value.firstName,
          lastName: this.userForm.value.lastName,
          address: this.userForm.value.address,
          email: this.userForm.value.email,
          phone: this.userForm.value.phone
        };

        this.userService.addUser(newUser);
      }
      
      this.userForm.reset();
    }
  }
}
