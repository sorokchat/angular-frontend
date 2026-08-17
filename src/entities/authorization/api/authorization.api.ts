import { environment } from '@/shared';
import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import {
  type NewUserPayload,
  type AuthorizedPayload,
  AUTHORIZATION_CONTROLLER,
  AUTHORIZATION_ROUTES,
  type LoginPayload,
  type GetUserPayload,
} from '@sorokchat/contracts';
import { firstValueFrom } from 'rxjs';
import { AccessTokenStore } from './access-token.store';
import { Router } from '@angular/router';

@Service()
export class AuthorizationService {
  private static readonly CONTROLLER: string = `${environment.apiUrl}${AUTHORIZATION_CONTROLLER}`;
  private static readonly REGISTER: string = `${AuthorizationService.CONTROLLER}${AUTHORIZATION_ROUTES.REGISTER}`;
  private static readonly LOGIN: string = `${AuthorizationService.CONTROLLER}${AUTHORIZATION_ROUTES.LOGIN}`;
  private static readonly LOGOUT: string = `${AuthorizationService.CONTROLLER}${AUTHORIZATION_ROUTES.LOGOUT}`;
  private static readonly REFRESH_TOKENS: string = `${AuthorizationService.CONTROLLER}${AUTHORIZATION_ROUTES.REFRESH_TOKENS}`;
  private static readonly PROFILE: string = `${AuthorizationService.CONTROLLER}${AUTHORIZATION_ROUTES.PROFILE}`;

  private readonly client: HttpClient = inject(HttpClient);
  private readonly tokenStorage: AccessTokenStore = inject(AccessTokenStore);
  private readonly router: Router = inject(Router);

  public async register(payload: NewUserPayload): Promise<void> {
    const result = await firstValueFrom(
      this.client.post<AuthorizedPayload>(AuthorizationService.REGISTER, payload),
    );
    await this.authorize(result);
  }

  public async login(payload: LoginPayload): Promise<void> {
    const result = await firstValueFrom(
      this.client.post<AuthorizedPayload>(AuthorizationService.LOGIN, payload),
    );
    await this.authorize(result);
  }

  public async logout(): Promise<void> {
    await firstValueFrom(this.client.delete<void>(AuthorizationService.LOGOUT));
    this.retriggerGuards();
  }

  public async refreshTokens(): Promise<AuthorizedPayload> {
    const result = await firstValueFrom(
      this.client.put<AuthorizedPayload>(AuthorizationService.REFRESH_TOKENS, null),
    );
    await this.authorize(result);
    return result;
  }

  public async profile(): Promise<GetUserPayload> {
    return await firstValueFrom(this.client.get<GetUserPayload>(AuthorizationService.PROFILE));
  }

  private async authorize(payload: AuthorizedPayload): Promise<void> {
    await this.tokenStorage.setToken(payload.accessToken);
    this.retriggerGuards();
  }

  private retriggerGuards(): void {
    this.router.navigate(['/']);
  }
}
