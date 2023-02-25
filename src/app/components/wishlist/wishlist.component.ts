import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishList: any = [];
  displayedColumns: string[] = ['name', 'image', 'price', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<any>;
  
  constructor(private data: DataService) { 
    if (localStorage.getItem('wishlist') !== undefined || localStorage.getItem('wishlist') !== null) {
      this.wishList = localStorage.getItem('wishlist') === null ? '[]' : localStorage.getItem('wishlist');
      this.data.wishList = JSON.parse(this.wishList);
    }
    this.dataSource = new MatTableDataSource<any>(this.data.wishList);
  }
  
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  deleteProductFromWishList(id: number) {
    this.wishList = this.data.wishList.filter((item:any) => item.id !== id);
    this.data.wishList = this.wishList;
    localStorage.setItem('wishlist', JSON.stringify(this.data.wishList));
    this.dataSource = new MatTableDataSource<any>(this.wishList);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}