import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrouselComponent } from "./components/carrousel/carrousel.component";
import { OurServicesComponent } from "./sections/our-services/our-services.component";
import { HomeComponent } from "./sections/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarrouselComponent, OurServicesComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tryad';
}
