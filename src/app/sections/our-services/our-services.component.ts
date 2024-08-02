import { Component } from '@angular/core';
import { CarrouselComponent } from "../../components/carrousel/carrousel.component";

@Component({
  selector: 'section-our-services',
  standalone: true,
  imports: [CarrouselComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {

}
