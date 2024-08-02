import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  toggleProp = input<boolean>();
  title = input.required<string>();
  content = input.required<string>();

  toggle = false;

  toggleFunction(): void {
    this.toggle = !this.toggle;
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleFunction();
    }
  }
}
