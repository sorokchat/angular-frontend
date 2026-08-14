import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import {
  type NewUserPayload,
  type AuthorizedPayload,
  AUTHORIZATION_CONTROLLER,
  AUTHORIZATION_ROUTES,
  type LoginPayload,
} from '@sorokchat/contracts';
import { lastValueFrom } from 'rxjs';

@Service()
export class AuthorizationService {
  private static readonly CONTROLLER: string = AUTHORIZATION_CONTROLLER;
  private static readonly REGISTER: string = `${AuthorizationService.CONTROLLER}/${AUTHORIZATION_ROUTES.REGISTER}`;
  private static readonly LOGIN: string = `${AuthorizationService.CONTROLLER}/${AUTHORIZATION_ROUTES.LOGIN}`;

  private readonly client: HttpClient = inject(HttpClient);

  public async register(payload: NewUserPayload): Promise<AuthorizedPayload> {
    return await lastValueFrom(
      this.client.post<AuthorizedPayload>(AuthorizationService.REGISTER, payload),
    );
  }

  public async login(payload: LoginPayload): Promise<AuthorizedPayload> {
    return await lastValueFrom(
      this.client.post<AuthorizedPayload>(AuthorizationService.LOGIN, payload),
    );
  }
}
