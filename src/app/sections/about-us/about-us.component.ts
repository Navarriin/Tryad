import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  openPopup(): void {
    console.log('arrumar aqui');
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.openPopup();
    }
  }
}
