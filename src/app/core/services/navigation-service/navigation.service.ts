import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  availableRoutes: INavigationOption[] =
    [
      { name: 'War', route: 'war' },
      { name: 'Deck', route: 'deck' }
    ];

  constructor() { }
}

export interface INavigationOption {
  name: string;
  route: string;
}
