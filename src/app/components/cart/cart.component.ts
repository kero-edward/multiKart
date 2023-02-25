import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList: any = [];
  totalPrice: number = 0;
  displayedColumns: string[] = ['name', 'image', 'quantity', 'price', 'totalPrice', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<any>;

  constructor(public data: DataService) { 
    if (localStorage.getItem('cartlist') !== undefined || localStorage.getItem('cartlist') !== null) {
      this.cartList = localStorage.getItem('cartlist') === null ? '[]' : localStorage.getItem('cartlist');
      this.data.cartList = JSON.parse(this.cartList);
    }
    this.dataSource = new MatTableDataSource<any>(this.data.cartList);

    this.data.cartList.forEach((item:any) => {
      this.totalPrice += item.totalPrice;
    });

    this.data.totalPrice = this.totalPrice;
  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  deleteProductFromCartList(id: number) {
    this.totalPrice = 0
    this.cartList = this.data.cartList.filter((item:any) => item.cartProduct.id !== id);
    this.data.cartList = this.cartList;
    localStorage.setItem('cartlist', JSON.stringify(this.data.cartList));
    this.dataSource = new MatTableDataSource<any>(this.cartList);
    this.dataSource.paginator = this.paginator;
    this.data.cartQuantity = this.data.cartList.length;
    this.data.cartList.forEach((item:any) => {
      this.totalPrice += item.totalPrice;
    });
    this.data.totalPrice = this.totalPrice;
  }

}