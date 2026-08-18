import { Button, Field, Form, PathConfig, withZod } from '@/shared';
import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { LoginSchema, type LoginPayload } from '@sorokchat/contracts';
import { injectLogin } from '../../api';

@Component({
  selector: 'app-login-form',
  imports: [Form, Field, Button, RouterLink],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {
  private readonly mutation = injectLogin();

  protected readonly state = signal<LoginPayload>({
    login: '',
    password: '',
  });

  protected isPending = this.mutation.isPending;

  protected readonly loginForm = form(this.state, withZod(LoginSchema));

  protected readonly registerPath: PathConfig = PathConfig.register;

  public login(payload: LoginPayload): void {
    this.mutation.mutate(payload);
  }
}
