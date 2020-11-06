import { Injectable } from '@angular/core';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersList: User[] = [
    {email: 'me@up.coop', password: '123456'}
  ];

  find({email, password}: User): User {
    return this.usersList.find(u => u.password === password && u.email === email);
  }

  register(user: User): void {
    this.usersList.push(user);
    console.log('registered', user);
  }
}
