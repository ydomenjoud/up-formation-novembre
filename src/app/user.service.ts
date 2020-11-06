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

  constructor() { }
}
