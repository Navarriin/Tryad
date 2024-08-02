import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { PopupService } from '../../services/popup.service';

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
    private scrollService: ScrollService,
    private popupService: PopupService
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
