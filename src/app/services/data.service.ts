import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../modules/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedUserSource = new BehaviorSubject<User | null>(null);
  selectedUser$ = this.selectedUserSource.asObservable();

  constructor() {}

  setSelectedUser(user: User | null): void {
    console.log("data service=====",user)
    this.selectedUserSource.next(user);
  }
}
