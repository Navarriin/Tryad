import { PopupService } from '../../services/popup.service';
import { ScrollService } from '../../services/scroll.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isHidden = false;

  constructor(
    private popupService: PopupService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.scrollService.scrollDirection.subscribe((direction) => {
      this.isHidden = direction === 'down';
    });
  }

  openPopup(): void {
    this.popupService.open();
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.openPopup();
    }
  }
}
