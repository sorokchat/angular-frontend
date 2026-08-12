import { Button, Field, Form, withZod } from '@/shared';
import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { type NewUserPayload, NewUserSchema } from '@sorokchat/contracts';

@Component({
  selector: 'app-register-form',
  imports: [Form, Field, Button],
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

  public register(payload: NewUserPayload): void {
    console.log(payload);
  }
}
