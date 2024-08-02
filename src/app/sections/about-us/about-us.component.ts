import { Component } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  constructor(private popupService: PopupService) {}

  openPopup(): void {
    this.popupService.open();
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.openPopup();
    }
  }
}
