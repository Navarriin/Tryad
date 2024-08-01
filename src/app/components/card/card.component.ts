import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  title = input.required<string>();
  content = input.required<string>();
  toggleProp = input<boolean>();

  toggle: boolean = false;

  toggleFunction(): void {
    this.toggle = !this.toggle;
  }
}
