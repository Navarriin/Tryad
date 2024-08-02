import { PopupService } from '../../services/popup.service';
import { ButtonComponent } from '../../components/button/button.component';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent {
  constructor(private popupService: PopupService) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const popupElement = document.querySelector('.popup');
    if (popupElement && !popupElement.contains(target)) {
      this.popupService.close();
    }
  }

  protected openCalendly(): void {
    window.open('https://calendly.com/juliana-regina/30min', '_blank');
  }

  protected openWhats(): void {
    window.open(
      'https://api.whatsapp.com/send?phone=5519971461066&text=Ol%C3%A1%2C%20Juliana!%20Tudo%20bem%3F%20%0AAchei%20seu%20trabalho%20muito%20interessante.%20Como%20fa%C3%A7o%20para%20agendar%20uma%20consultoria%3F',
      '_blank'
    );
  }

  protected closePopup(): void {
    this.popupService.close();
  }

  protected handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.closePopup();
    }
  }
}
