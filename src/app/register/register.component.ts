import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
    {name: 'basic', price: 1.28},
    {name: 'premium', price: 5.12},
    {name: 'gold', price: 10.24}
  ];

  selectedFormuleIndex: number;

  @Input() displayFees = false;
  @Input() title = '';
  @Output() readonly logged = new EventEmitter<any>();

  registrationForm: FormGroup;

  constructor(private readonly userService: UserService,
              private readonly fb: FormBuilder) {
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

  selectFormule(formuleName: number): void {
    this.selectedFormuleIndex = formuleName;
  }

  register(): void {
    console.log(this.registrationForm.value);
  }

  ngOnInit(): void {

    const unchecked: ValidatorFn = ({value}) => value === false ? null : {unchecked: true};

    const passwordRepeat: ValidatorFn = ({value}) => {
      if (value.password === value.password_repeat) {
        return null;
      }
      return {
        passwordRepeat: true
      };
    };

    const {required, requiredTrue, minLength, email} = Validators;

    this.registrationForm = this.fb.group({
      email: ['', [email, required]],
      password: ['', [minLength(6), required]],
      password_repeat: ['', [minLength(6), required]],
      checkboxes: this.fb.group({
        newsletter: [true, [unchecked]],
        share_data: [true, [requiredTrue]],
      })
    }, {
      validators: [passwordRepeat]
    });

    // this.registrationForm.valueChanges.subscribe(
    //   (changes) => console.log(changes)
    // );

  }
}
