import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpinnerService {
  count = 0;
  visibility: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  show() {
    this.visibility.next(true);
    this.count++;
  }

  hide() {
    this.count--;
    if (this.count === 0) {
      this.visibility.next(false);
    }
  }
}
