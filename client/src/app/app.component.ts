import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './shared/models/products';
import { Pagination } from './shared/models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: Product[] = [];
  n = 1;


  constructor(private http: HttpClient) {

  }
  //asdads
  
  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>('https://localhost:5001/api/products?pageSize=50').subscribe({
      next: response  => this.products = response.data,
      error: error => console.log(error),
      complete: () => {
        console.log('request completed');
        console.log('extra statment');
      }
    });
  }
}
