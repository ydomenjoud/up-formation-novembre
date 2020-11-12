import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { User, UserService } from '../user.service';

export interface Formula {
  name: string;
  price: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {

  message = '';
  emailInputError = false;
  passwordInputError = false;
  displayForm = true;

  formulesList: Formula[] = [
    { name: 'basic', price: 1.28},
    { name: 'premium', price: 5.12},
    { name: 'gold', price: 10.24}
  ];

  selectedFormuleIndex: number;

  user: User = {
    password: '',
    email: ''
  };

  @Input() displayFees = false;
  @Input() title = '';
  @Output() readonly logged = new EventEmitter<any>();

  constructor(private userService: UserService) {
  }


  send(emailInput: HTMLInputElement, passwordInput: HTMLInputElement): void {
    const email = emailInput.value;
    const password = passwordInput.value;

    // à transformer
    if (this.userService.find({email, password})) {
      this.message = 'Credentials OK';
      this.displayForm = false;
      this.logged.emit(true);
    } else {
      this.logged.emit(false);
    }
  }

  checkEmail({value}: HTMLInputElement): void {
    this.emailInputError = !value.endsWith('@up.coop');
  }

  checkPassword({value}: HTMLInputElement): void {
    this.passwordInputError = value.length < 6;
  }

  ngOnInit(): void {
  }

  selectFormule(formuleName: number): void {
    this.selectedFormuleIndex = formuleName;
  }

  login(): void {
    this.userService.find(this.user);
  }
}
