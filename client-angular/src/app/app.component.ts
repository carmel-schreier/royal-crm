import { Component } from '@angular/core';
//import { Component } from '.button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Welcome';
  inputType = 'text';

  success = true;

  labels = ['Customers', 'Products', 'Orders'];

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
