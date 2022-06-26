import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  brandName = 'Royal CRM';
  userName = 'Carmel';

  today = new Date();

  constructor() {}

  ngOnInit(): void {}
}
