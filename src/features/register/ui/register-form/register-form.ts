import { Button, Field, Form, PathConfig, withZod } from '@/shared';
import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { type NewUserPayload, NewUserSchema } from '@sorokchat/contracts';

@Component({
  selector: 'app-register-form',
  imports: [Form, Field, Button, RouterLink],
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss',
})
export class RegisterForm {
  protected readonly registerModel = signal<Required<NewUserPayload>>({
    login: '',
    password: '',
    displayName: '',
  });

  protected readonly registerForm = form(this.registerModel, withZod(NewUserSchema));

  protected readonly loginPath: PathConfig = PathConfig.login;

  public register(payload: NewUserPayload): void {
    console.log(payload);
  }
}
