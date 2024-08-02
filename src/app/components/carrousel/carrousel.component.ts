import { CardComponent } from '../card/card.component';
import { CarouselModule } from 'primeng/carousel';
import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  AfterViewInit,
  ChangeDetectorRef,
  HostListener,
  PLATFORM_ID,
  Inject,
} from '@angular/core';

interface CardInterface {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CardComponent, CarouselModule],
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent implements AfterViewInit {
  protected cards: CardInterface[];
  protected responsiveOptions: any[];
  protected isSmallScreen = false;
  protected showCarousel = true;

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.cards = [
      { id: 1, title: 'Consultoria pessoal', content: 'dsadsa' },
      {
        id: 2,
        title: 'Blindagem de patrimônio',
        content: 'Eu acho que todos teem que comprar esse trem aqui em mano',
      },
      { id: 3, title: 'Blindagem pessoal', content: '' },
      { id: 4, title: 'Investimentos', content: '' },
    ];

    this.responsiveOptions = [
      { breakpoint: '1500px', numVisible: 3, numScroll: 1 },
      { breakpoint: '1100px', numVisible: 2, numScroll: 1 },
      { breakpoint: '700px', numVisible: 1, numScroll: 1 },
    ];

    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isSmallScreen = window.innerWidth < 1150;
    }
  }

  // Forçando a recriação do carrossel após a inicialização
  // Unico jeito que achei de corrigir um bug de duplicação
  ngAfterViewInit() {
    this.showCarousel = false;
    this.cdr.detectChanges();
    this.showCarousel = true;
    this.cdr.detectChanges();
  }
}
