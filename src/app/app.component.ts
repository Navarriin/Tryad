import { Component } from '@angular/core';
import { HomeComponent } from './sections/home/home.component';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { OurServicesComponent } from './sections/our-services/our-services.component';
import { FooterComponent } from "./sections/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    NavbarComponent,
    AboutUsComponent,
    CarrouselComponent,
    OurServicesComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Tryad';
}
