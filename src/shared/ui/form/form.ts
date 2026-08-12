import { Component, input, output } from '@angular/core';
import { type FieldState } from '@angular/forms/signals';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form<T> {
  public readonly form = input.required<FieldState<T>>();
  public readonly send = output<T>();

  protected onSubmit(event: SubmitEvent): void {
    event.preventDefault();
    const data = this.form().value();
    if (this.form().valid()) {
      this.send.emit(data);
    }
  }
}
