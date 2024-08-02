import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-content-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './content-home.component.html',
  styleUrl: './content-home.component.scss',
})
export class ContentHomeComponent {
  protected text = 'Entre em contato com uma especialista';

  openPopup(): void {
    console.log('arrumar aqui');
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.openPopup();
    }
  }
}
