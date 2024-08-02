import { Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, fromEvent, throttleTime } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollPosition = 0;
  public scrollDirection = new BehaviorSubject<'up' | 'down'>('up');

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      fromEvent(window, 'scroll')
        .pipe(throttleTime(100))
        .subscribe(() => this.onScroll());
    }
  }

  private onScroll() {
    const currentScrollPosition =
      window.scrollY || document.documentElement.scrollTop;
    if (currentScrollPosition > this.scrollPosition) {
      this.scrollDirection.next('down');
    } else {
      this.scrollDirection.next('up');
    }
    this.scrollPosition = currentScrollPosition;
  }
}
