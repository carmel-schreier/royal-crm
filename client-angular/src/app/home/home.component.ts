import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  success = true;
  labels = ['Customer', 'Products', 'Orders'];
  constructor() {}

  ngOnInit(): void {}

  getTitleColor(): string {
    return 'red';
  }

  getTitleClass(): string {
    return this.success ? 'text-info' : 'text-danger';
  }

  toggleTitleClass() {
    this.success = !this.success;
  }

  getButtonLabel(): string {
    return 'yas';
  }
}
