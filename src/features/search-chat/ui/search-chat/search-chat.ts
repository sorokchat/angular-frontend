import { Form, Input, withZod } from '@/shared';
import { Component, signal } from '@angular/core';
import { SearchSchema, type SearchPayload } from '../../schemas';
import { form } from '@angular/forms/signals';
import { LucideSearch, type LucideIcon } from '@lucide/angular';

@Component({
  selector: 'app-search-chat',
  imports: [Form, Input],
  templateUrl: './search-chat.html',
  styleUrl: './search-chat.scss',
})
export class SearchChat {
  private readonly state = signal<SearchPayload>({ search: '' });
  private timer: number | null = null;
  protected readonly form = form(this.state, withZod(SearchSchema));
  protected readonly icon: LucideIcon = LucideSearch;

  public search({ search }: SearchPayload): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      console.log(search);
    }, 500);
  }
}
