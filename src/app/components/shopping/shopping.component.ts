import { DataService } from 'src/app/services/data.service';
import { Product } from './product';
import { ChangeDetectorRef, Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit, AfterViewInit, OnDestroy {

  categories = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  isClicked1: BehaviorSubject<boolean> = new BehaviorSubject(true);
  isClicked2: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isClicked3: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isClicked4: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isClicked5: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isClicked6: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isClicked7: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isClicked8: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isClicked9: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isClicked10: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isClicked11: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isClicked12: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isClicked13: BehaviorSubject<boolean> = new BehaviorSubject(false);
  bagsArray!: any[];
  beautyArray!: any[];
  clothesArray!: any[];
  electronicsArray!: any[];
  flowerArray!: any[];
  furnitureArray!: any[];
  gymArray!: any[];
  moviesArray!: any[];
  petsArray!: any[];
  shoesArray!: any[];
  softwareArray!: any[];
  vegetablesArray!: any[];
  watchesArray!: any[];

  constructor(private _formBuilder: FormBuilder, private _changeDetectorRef: ChangeDetectorRef, public data: DataService) {
    this.bagsArray = this.data.products.filter((item) => item.category === 'bags');
    this.beautyArray = this.data.products.filter((item) => item.category === 'beauty');
    this.clothesArray = this.data.products.filter((item) => item.category === 'clothes');
    this.electronicsArray = this.data.products.filter((item) => item.category === 'electronics');
    this.flowerArray = this.data.products.filter((item) => item.category === 'flowers');
    this.furnitureArray = this.data.products.filter((item) => item.category === 'furniture');
    this.gymArray = this.data.products.filter((item) => item.category === 'gym');
    this.moviesArray = this.data.products.filter((item) => item.category === 'movies');
    this.petsArray = this.data.products.filter((item) => item.category === 'pets');
    this.shoesArray = this.data.products.filter((item) => item.category === 'shoes');
    this.softwareArray = this.data.products.filter((item) => item.category === 'software');
    this.vegetablesArray = this.data.products.filter((item) => item.category === 'vegetables');
    this.watchesArray = this.data.products.filter((item) => item.category === 'watches');

    this.dataSource = new MatTableDataSource<Product>(this.bagsArray);
  }

  obs!: Observable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!: MatTableDataSource<Product>;
  // dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>(this.bagsArray);

  ngOnInit(): void {
    this.obs = this.dataSource.connect();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this._changeDetectorRef.detectChanges();
  }

  trackProductById(index: number, product: Product) {
    return product.id;
  }

  category1Clicked() {

    this.dataSource.disconnect();
    this.dataSource = new MatTableDataSource<Product>(this.bagsArray);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    this.isClicked1.next(true);
    this.isClicked2.next(false);
    this.isClicked3.next(false);
    this.isClicked4.next(false);
    this.isClicked5.next(false);
    this.isClicked6.next(false);
    this.isClicked7.next(false);
    this.isClicked8.next(false);
    this.isClicked9.next(false);
    this.isClicked10.next(false);
    this.isClicked11.next(false);
    this.isClicked12.next(false);
    this.isClicked13.next(false);
  }

  category2Clicked() {

    this.dataSource.disconnect();
    this.dataSource = new MatTableDataSource<Product>(this.beautyArray);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    this.isClicked1.next(false);
    this.isClicked2.next(true);
    this.isClicked3.next(false);
    this.isClicked4.next(false);
    this.isClicked5.next(false);
    this.isClicked6.next(false);
    this.isClicked7.next(false);
    this.isClicked8.next(false);
    this.isClicked9.next(false);
    this.isClicked10.next(false);
    this.isClicked11.next(false);
    this.isClicked12.next(false);
    this.isClicked13.next(false);

  }

  category3Clicked() {

    this.dataSource.disconnect();
    this.dataSource = new MatTableDataSource<Product>(this.clothesArray);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    this.isClicked1.next(false);
    this.isClicked2.next(false);
    this.isClicked3.next(true);
    this.isClicked4.next(false);
    this.isClicked5.next(false);
    this.isClicked6.next(false);
    this.isClicked7.next(false);
    this.isClicked8.next(false);
    this.isClicked9.next(false);
    this.isClicked10.next(false);
    this.isClicked11.next(false);
    this.isClicked12.next(false);
    this.isClicked13.next(false);
  }

  category4Clicked() {

    this.dataSource.disconnect();
    this.dataSource = new MatTableDataSource<Product>(this.electronicsArray);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    this.isClicked1.next(false);
    this.isClicked2.next(false);
    this.isClicked3.next(false);
    this.isClicked4.next(true);
    this.isClicked5.next(false);
    this.isClicked6.next(false);
    this.isClicked7.next(false);
    this.isClicked8.next(false);
    this.isClicked9.next(false);
    this.isClicked10.next(false);
    this.isClicked11.next(false);
    this.isClicked12.next(false);
    this.isClicked13.next(false);
  }

  category5Clicked() {

    this.dataSource.disconnect();
    this.dataSource = new MatTableDataSource<Product>(this.flowerArray);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    this.isClicked1.next(false);
    this.isClicked2.next(false);
    this.isClicked3.next(false);
    this.isClicked4.next(false);
    this.isClicked5.next(true);
    this.isClicked6.next(false);
    this.isClicked7.next(false);
    this.isClicked8.next(false);
    this.isClicked9.next(false);
    this.isClicked10.next(false);
    this.isClicked11.next(false);
    this.isClicked12.next(false);
    this.isClicked13.next(false);
  }

  category6Clicked() {

    this.dataSource.disconnect();
    this.dataSource = new MatTableDataSource<Product>(this.furnitureArray);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    this.isClicked1.next(false);
    this.isClicked2.next(false);
    this.isClicked3.next(false);
    this.isClicked4.next(false);
    this.isClicked5.next(false);
    this.isClicked6.next(true);
    this.isClicked7.next(false);
    this.isClicked8.next(false);
    this.isClicked9.next(false);
    this.isClicked10.next(false);
    this.isClicked11.next(false);
    this.isClicked12.next(false);
    this.isClicked13.next(false);
  }

  category7Clicked() {

    this.dataSource.disconnect();
    this.dataSource = new MatTableDataSource<Product>(this.gymArray);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    this.isClicked1.next(false);
    this.isClicked2.next(false);
    this.isClicked3.next(false);
    this.isClicked4.next(false);
    this.isClicked5.next(false);
    this.isClicked6.next(false);
    this.isClicked7.next(true);
    this.isClicked8.next(false);
    this.isClicked9.next(false);
    this.isClicked10.next(false);
    this.isClicked11.next(false);
    this.isClicked12.next(false);
    this.isClicked13.next(false);
  }

  category8Clicked() {

    this.dataSource.disconnect();
    this.dataSource = new MatTableDataSource<Product>(this.moviesArray);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    this.isClicked1.next(false);
    this.isClicked2.next(false);
    this.isClicked3.next(false);
    this.isClicked4.next(false);
    this.isClicked5.next(false);
    this.isClicked6.next(false);
    this.isClicked7.next(false);
    this.isClicked8.next(true);
    this.isClicked9.next(false);
    this.isClicked10.next(false);
    this.isClicked11.next(false);
    this.isClicked12.next(false);
    this.isClicked13.next(false);
  }

  category9Clicked() {

    this.dataSource.disconnect();
    this.dataSource = new MatTableDataSource<Product>(this.petsArray);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    this.isClicked1.next(false);
    this.isClicked2.next(false);
    this.isClicked3.next(false);
    this.isClicked4.next(false);
    this.isClicked5.next(false);
    this.isClicked6.next(false);
    this.isClicked7.next(false);
    this.isClicked8.next(false);
    this.isClicked9.next(true);
    this.isClicked10.next(false);
    this.isClicked11.next(false);
    this.isClicked12.next(false);
    this.isClicked13.next(false);
  }

  category10Clicked() {

    this.dataSource.disconnect();
    this.dataSource = new MatTableDataSource<Product>(this.shoesArray);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    this.isClicked1.next(false);
    this.isClicked2.next(false);
    this.isClicked3.next(false);
    this.isClicked4.next(false);
    this.isClicked5.next(false);
    this.isClicked6.next(false);
    this.isClicked7.next(false);
    this.isClicked8.next(false);
    this.isClicked9.next(false);
    this.isClicked10.next(true);
    this.isClicked11.next(false);
    this.isClicked12.next(false);
    this.isClicked13.next(false);
  }

  category11Clicked() {

    this.dataSource.disconnect();
    this.dataSource = new MatTableDataSource<Product>(this.softwareArray);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    this.isClicked1.next(false);
    this.isClicked2.next(false);
    this.isClicked3.next(false);
    this.isClicked4.next(false);
    this.isClicked5.next(false);
    this.isClicked6.next(false);
    this.isClicked7.next(false);
    this.isClicked8.next(false);
    this.isClicked9.next(false);
    this.isClicked10.next(false);
    this.isClicked11.next(true);
    this.isClicked12.next(false);
    this.isClicked13.next(false);
  }

  category12Clicked() {

    this.dataSource.disconnect();
    this.dataSource = new MatTableDataSource<Product>(this.vegetablesArray);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    this.isClicked1.next(false);
    this.isClicked2.next(false);
    this.isClicked3.next(false);
    this.isClicked4.next(false);
    this.isClicked5.next(false);
    this.isClicked6.next(false);
    this.isClicked7.next(false);
    this.isClicked8.next(false);
    this.isClicked9.next(false);
    this.isClicked10.next(false);
    this.isClicked11.next(false);
    this.isClicked12.next(true);
    this.isClicked13.next(false);
  }

  category13Clicked() {

    this.dataSource.disconnect();
    this.dataSource = new MatTableDataSource<Product>(this.watchesArray);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    this.isClicked1.next(false);
    this.isClicked2.next(false);
    this.isClicked3.next(false);
    this.isClicked4.next(false);
    this.isClicked5.next(false);
    this.isClicked6.next(false);
    this.isClicked7.next(false);
    this.isClicked8.next(false);
    this.isClicked9.next(false);
    this.isClicked10.next(false);
    this.isClicked11.next(false);
    this.isClicked12.next(false);
    this.isClicked13.next(true);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.bagsArray = [];
    this.beautyArray = [];
    this.clothesArray = [];
    this.electronicsArray = [];
    this.flowerArray = [];
    this.furnitureArray = [];
    this.gymArray = [];
    this.moviesArray = [];
    this.petsArray = [];
    this.shoesArray = [];
    this.softwareArray = [];
    this.vegetablesArray = [];
    this.watchesArray = [];
    this.dataSource.disconnect();
  }
}