import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private popUpState = signal<boolean>(false);

  getState(): boolean {
    return this.popUpState();
  }

  open(): void {
    this.popUpState.set(true);
  }

  close(): void {
    this.popUpState.set(false);
  }
}
