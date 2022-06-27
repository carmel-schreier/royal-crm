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

  labels = ['Customers', 'Products', 'Orders'];
}
