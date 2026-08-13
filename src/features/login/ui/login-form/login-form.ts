import { Button, Field, Form, withZod } from '@/shared';
import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { LoginSchema, type LoginPayload } from '@sorokchat/contracts';

@Component({
  selector: 'app-login-form',
  imports: [Form, Field, Button],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {
  protected readonly state = signal<LoginPayload>({
    login: '',
    password: '',
  });

  protected readonly loginForm = form(this.state, withZod(LoginSchema));
}
