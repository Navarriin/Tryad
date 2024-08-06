import { CommonModule } from '@angular/common';
import { PopupService } from './services/popup.service';
import { HomeComponent } from './sections/home/home.component';
import { PopupComponent } from './sections/popup/popup.component';
import { FooterComponent } from './sections/footer/footer.component';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { Component, effect } from '@angular/core';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { OurServicesComponent } from './sections/our-services/our-services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    PopupComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    CarrouselComponent,
    OurServicesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Tryad';
  protected popUpVisible = false;

  constructor(private popupService: PopupService) {
    effect(() => (this.popUpVisible = this.popupService.getState()));
  }
}
