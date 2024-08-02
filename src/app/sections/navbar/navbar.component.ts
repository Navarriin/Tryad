import { Component } from '@angular/core';

@Component({
  selector: 'nav-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  openPopup(): void {
    console.log('arrumar aqui');
  }
}
