import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, FilePath } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  getCustomerList(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>('http://localhost:3000/customers');
  }

  exportCustomers(): Observable<FilePath> {
    return this.http.get<FilePath>('http://localhost:3000/customers/export');
  }

  finedCustomer(searchTerm: string): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(
      `http://localhost:3000/customers/fined?param=${searchTerm}`
    );
  }
}