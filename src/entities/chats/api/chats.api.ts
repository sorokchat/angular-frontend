import { environment } from '@/shared';
import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import {
  CHATS_CONTROLLER,
  CHATS_ROUTES,
  type UpdateChatPayload,
  type GetChatPayload,
  type NewChatPayload,
} from '@sorokchat/contracts';
import { firstValueFrom } from 'rxjs';

@Service()
export class ChatsService {
  private static readonly CONTROLLER: string = `${environment.apiUrl}${CHATS_CONTROLLER}`;
  private static readonly CREATE_CHAT: string = `${ChatsService.CONTROLLER}${CHATS_ROUTES.CREATE}`;
  private static readonly MY_CHATS: string = `${ChatsService.CONTROLLER}${CHATS_ROUTES.GET_MY}`;

  private static UPDATE(chatId: number): string {
    return `${ChatsService.CONTROLLER}${CHATS_ROUTES.UPDATE.replace(':id', chatId.toString())}`;
  }

  private static DELETE(chatId: number): string {
    return `${ChatsService.CONTROLLER}${CHATS_ROUTES.DELETE.replace(':id', chatId.toString())}`;
  }

  private static ADD_MEMBER(chatId: number, userId: number): string {
    return `${ChatsService.CONTROLLER}${CHATS_ROUTES.ADD_MEMBER.replace(':id', chatId.toString()).replace(':userId', userId.toString())}`;
  }

  private static REMOVE_MEMBER(chatId: number, userId: number): string {
    return `${ChatsService.CONTROLLER}${CHATS_ROUTES.REMOVE_MEMBER.replace(':id', chatId.toString()).replace(':userId', userId.toString())}`;
  }

  private static LEAVE(chatId: number): string {
    return `${ChatsService.CONTROLLER}${CHATS_ROUTES.LEAVE.replace(':id', chatId.toString())}`;
  }

  private static GRANT(chatId: number, userId: number, role: string): string {
    return `${ChatsService.CONTROLLER}${CHATS_ROUTES.GRANT.replace(':id', chatId.toString()).replace(':userId', userId.toString()).replace(':role', role)}`;
  }

  private static REVOKE(chatId: number, userId: number): string {
    return `${ChatsService.CONTROLLER}${CHATS_ROUTES.REVOKE.replace(':id', chatId.toString()).replace(':userId', userId.toString())}`;
  }

  private readonly client: HttpClient = inject(HttpClient);

  public async create(payload: NewChatPayload): Promise<void> {
    return await firstValueFrom(this.client.post<void>(ChatsService.CREATE_CHAT, payload));
  }

  public async getMy(): Promise<GetChatPayload[]> {
    try {
      return await firstValueFrom(this.client.get<GetChatPayload[]>(ChatsService.MY_CHATS));
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  public async update(chatId: number, payload: UpdateChatPayload): Promise<void> {
    return await firstValueFrom(this.client.put<void>(ChatsService.UPDATE(chatId), payload));
  }

  public async delete(chatId: number): Promise<void> {
    return await firstValueFrom(this.client.delete<void>(ChatsService.DELETE(chatId)));
  }

  public async addMember(chatId: number, userId: number): Promise<void> {
    return await firstValueFrom(
      this.client.put<void>(ChatsService.ADD_MEMBER(chatId, userId), null),
    );
  }

  public async removeMember(chatId: number, userId: number): Promise<void> {
    return firstValueFrom(this.client.put<void>(ChatsService.REMOVE_MEMBER(chatId, userId), null));
  }

  public async leave(chatId: number): Promise<void> {
    return await firstValueFrom(this.client.put<void>(ChatsService.LEAVE(chatId), null));
  }

  public async grant(chatId: number, userId: number, role: string): Promise<void> {
    return await firstValueFrom(
      this.client.put<void>(ChatsService.GRANT(chatId, userId, role), null),
    );
  }

  public async revoke(chatId: number, userId: number): Promise<void> {
    return await firstValueFrom(this.client.put<void>(ChatsService.REVOKE(chatId, userId), null));
  }
}
