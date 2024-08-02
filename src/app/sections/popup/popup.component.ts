import { Component, HostListener } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import { ButtonComponent } from "../../components/button/button.component";

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
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const popupElement = document.querySelector('.popup');
    if (popupElement && !popupElement.contains(target)) {
      this.popupService.close();
    }
  }

  closePopup(): void {
    this.popupService.close();
  }
}
