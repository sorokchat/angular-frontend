import { Button, Field, Form, PathConfig, withZod } from '@/shared';
import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { type NewUserPayload, NewUserSchema } from '@sorokchat/contracts';
import { injectRegister } from '../../api';

@Component({
  selector: 'app-register-form',
  imports: [Form, Field, Button, RouterLink],
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss',
})
export class RegisterForm {
  private readonly mutation = injectRegister();

  protected readonly registerModel = signal<Required<NewUserPayload>>({
    login: '',
    password: '',
    displayName: '',
  });

  protected readonly isPending = this.mutation.isPending;

  protected readonly registerForm = form(this.registerModel, withZod(NewUserSchema));

  protected readonly loginPath: PathConfig = PathConfig.login;

  public register(payload: NewUserPayload): void {
    this.mutation.mutate(payload);
  }
}
