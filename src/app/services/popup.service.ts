import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private popUpState = new BehaviorSubject<boolean>(false);
  popUpState$ = this.popUpState.asObservable();

  open(): void {
    this.popUpState.next(true);
  }

  close(): void {
    this.popUpState.next(false);
  }
}
