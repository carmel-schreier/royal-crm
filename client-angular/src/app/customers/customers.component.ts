import { ApiService } from './../core/api.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { Customer, FilePath } from '../shared/types';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers!: Array<Customer>;
  searchFieldValue!: string;

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

  exportCustomersData() {
    this.apiService.exportCustomers().subscribe({
      next: (data: FilePath) => {
        console.log(`${environment.serverUrl}/${data.name}`);
        window.open(`${environment.serverUrl}/${data.name}`);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  findCustomer(event: KeyboardEvent) {
    const value = this.searchFieldValue;

    if (event.key === 'Enter' && value.length >= 3) {
      this.apiService.findCustomer(value).subscribe({
        next: (data: Array<Customer>) => {
          this.customers = data;
        },
        error: (err) => console.error(err),
      });
    }
  }
}
