import { Component } from '@angular/core';
import { ContentHomeComponent } from "../../components/content-home/content-home.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContentHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
