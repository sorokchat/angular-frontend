import { Component, input } from '@angular/core';
import { Input } from '../input';
import { type FieldTree } from '@angular/forms/signals';

@Component({
  selector: 'app-field',
  imports: [Input],
  templateUrl: './field.html',
  styleUrl: './field.scss',
})
export class Field {
  public readonly field = input.required<FieldTree<string, string, 'writable'>>();
}
