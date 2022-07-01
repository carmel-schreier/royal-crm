import { ApiService } from './../core/api.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/types';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers!: Array<Customer>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCustomerList().subscribe({
      next: (data: Array<Customer>) => {
        this.customers = data;
      },
      error: (err) => {
        console.error(err);
      },
      complete() {
        console.log('complete');
      },
    });
  }
}
