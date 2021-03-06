import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _darkTheme: Subject<boolean> = new Subject<boolean>();
  isDarkTheme: Observable<boolean> = this._darkTheme.asObservable();

  constructor(private overlayContainer: OverlayContainer) { }

  setDarkTheme(isDarkTheme: boolean): void {
    this._darkTheme.next(isDarkTheme);
    if (isDarkTheme) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
    }
  }
}
