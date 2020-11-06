import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Formula } from '../login/login.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

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

  @Input() displayFees = false;
  @Input() title = '';
  @Output() readonly logged = new EventEmitter<any>();

  constructor(private userService: UserService) {
  }


  send(emailInput: HTMLInputElement, passwordInput: HTMLInputElement): void {
    const email = emailInput.value;
    const password = passwordInput.value;

    this.userService.register({email, password});
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
}
