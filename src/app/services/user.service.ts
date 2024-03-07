import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../modules/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, firstName: 'Virendra', lastName: 'Gayakwad', email: 'virendragayakwad11@gmail.com', phone: '8623018610' },
    { id: 2, firstName: 'Komal', lastName: 'Gayakwad', email: 'Komal@gmail.com', phone: '8237718610' },
    { id: 3, firstName: 'Ovi', lastName: 'Gayakwad', email: 'ovi@gmail.com', phone: '8237718610' }
  ];

  constructor() {}

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User): void {
    const existingUser = this.users.find(u => u.email === user.email);
    if (existingUser) {
      alert('User already exists!');
    } else {
      user.id = this.users.length + 1; 
      this.users.push(user);
      alert('User added successfully!');
    }
  }

  updateUser(user: User): void {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  deleteUser(userId: number): Observable<void> {
    const index = this.users.findIndex(u => u.id === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
    // For demonstration purposes, return a mock observable that completes immediately
    return of(undefined);
  }
}
