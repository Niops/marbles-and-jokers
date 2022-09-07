import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation-service/navigation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public readonly navigationService: NavigationService) { }

  ngOnInit(): void {
  }

}
