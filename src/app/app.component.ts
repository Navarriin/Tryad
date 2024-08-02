import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PopupService } from './services/popup.service';
import { HomeComponent } from './sections/home/home.component';
import { PopupComponent } from './sections/popup/popup.component';
import { FooterComponent } from './sections/footer/footer.component';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
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
  popUpVisible$: Observable<boolean> = new Observable<boolean>();

  constructor(private popupService: PopupService) {
    this.popUpVisible$ = this.popupService.popUpState$;
  }
}
