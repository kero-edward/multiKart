import { Category } from './category';
import { SpecialProducts } from './special-products';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    lazyLoad: true,
    slideTransition: 'linear',
    navText: [
      `<i class="fa-solid fa-chevron-left"></i>`,
      `<i class="fa-solid fa-chevron-right"></i>`
    ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  isClicked1: BehaviorSubject<boolean> = new BehaviorSubject(true);
  isClicked2: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isClicked3: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isClicked4: BehaviorSubject<boolean> = new BehaviorSubject(false);
  newProductArray!: any;
  bestSellerArray!: any;
  featuredProductArray!: any;
  onSaleArray!: any;

  products: SpecialProducts[] = [
    {
      image: '../../../assets/img/products/1.jpg',
      name: 'Trim Dress',
      price: 87,
      oldPrice: 145,
      newProduct: true,
      bestSeller: false,
      featuredProduct: false,
      onSale: false
    },
    {
      image: '../../../assets/img/products/2.jpg',
      name: 'Belted Top',
      price: 49,
      oldPrice: 98,
      newProduct: true,
      bestSeller: false,
      featuredProduct: false,
      onSale: false
    },
    {
      image: '../../../assets/img/products/3.jpg',
      name: 'V- neck Dress',
      price: 94.5,
      oldPrice: 315,
      newProduct: true,
      bestSeller: false,
      featuredProduct: false,
      onSale: false
    },
    {
      image: '../../../assets/img/products/4.jpg',
      name: 'Maxi Dress',
      price: 159.6,
      oldPrice: 266,
      newProduct: true,
      bestSeller: false,
      featuredProduct: false,
      onSale: true
    },
    {
      image: '../../../assets/img/products/5.jpg',
      name: 'Belted Dress',
      price: 111,
      oldPrice: 185,
      newProduct: false,
      bestSeller: true,
      featuredProduct: false,
      onSale: false
    },
    {
      image: '../../../assets/img/products/6.jpg',
      name: 'Crop Top',
      price: 72.6,
      oldPrice: 121,
      newProduct: true,
      bestSeller: true,
      featuredProduct: false,
      onSale: false
    },
    {
      image: '../../../assets/img/products/7.jpg',
      name: 'Sleeveless Dress',
      price: 261,
      oldPrice: 290,
      newProduct: false,
      bestSeller: true,
      featuredProduct: false,
      onSale: false
    },
    {
      image: '../../../assets/img/products/8.jpg',
      name: 'Boho Tops',
      price: 77.4,
      oldPrice: 129,
      newProduct: false,
      bestSeller: true,
      featuredProduct: false,
      onSale: false
    },
    {
      image: '../../../assets/img/products/9.jpg',
      name: 'Fitted Dress',
      price: 104.4,
      oldPrice: 174,
      newProduct: false,
      bestSeller: true,
      featuredProduct: true,
      onSale: false
    },
    {
      image: '../../../assets/img/products/10.jpg',
      name: 'Waist Dress',
      price: 184.4,
      oldPrice: 230,
      newProduct: true,
      bestSeller: false,
      featuredProduct: true,
      onSale: false
    },
    {
      image: '../../../assets/img/products/11.jpg',
      name: 'Wrap Dress',
      price: 69,
      oldPrice: 115,
      newProduct: false,
      bestSeller: false,
      featuredProduct: true,
      onSale: true
    },
    {
      image: '../../../assets/img/products/12.jpg',
      name: 'Floral Dress',
      price: 157.5,
      oldPrice: 175,
      newProduct: false,
      bestSeller: true,
      featuredProduct: true,
      onSale: false
    },
    {
      image: '../../../assets/img/products/13.jpg',
      name: 'Knee Length Dress',
      price: 234,
      oldPrice: 260,
      newProduct: false,
      bestSeller: false,
      featuredProduct: true,
      onSale: true
    },
    {
      image: '../../../assets/img/products/14.jpg',
      name: 'Belted Top',
      price: 49,
      oldPrice: 98,
      newProduct: true,
      bestSeller: false,
      featuredProduct: false,
      onSale: true
    },
  ];

  categories: Category[] = [
    {
      name: 'fashion',
      image: '../../../assets/img/categories/fashion.jpg',
      offer: 'save 30%'
    },
    {
      name: 'electronics',
      image: '../../../assets/img/categories/electronics.jfif'
    },
    {
      name: 'flowers',
      image: '../../../assets/img/categories/flowers.jpg',
      offer: 'save 50%'
    },
    {
      name: 'furniture',
      image: '../../../assets/img/categories/furniture.jpg',
      offer: 'save 25%'
    },
    {
      name: 'gym',
      image: '../../../assets/img/categories/gym.jpg',
      offer: 'save 10%'
    },
    {
      name: 'vegetables',
      image: '../../../assets/img/categories/vegetables.jpg'
    },
  ];

  clickedSlider1() {
    this.isClicked1.next(true);
    this.isClicked2.next(false);
    this.isClicked3.next(false);
    this.isClicked4.next(false);
  }

  clickedSlider2() {
    this.isClicked1.next(false);
    this.isClicked2.next(true);
    this.isClicked3.next(false);
    this.isClicked4.next(false);
  }

  clickedSlider3() {
    this.isClicked1.next(false);
    this.isClicked2.next(false);
    this.isClicked3.next(true);
    this.isClicked4.next(false);
  }

  clickedSlider4() {
    this.isClicked1.next(false);
    this.isClicked2.next(false);
    this.isClicked3.next(false);
    this.isClicked4.next(true);
  }

  constructor() {
    this.newProductArray = this.products.filter((item) => item.newProduct == true);
    this.bestSellerArray = this.products.filter((item) => item.bestSeller == true);
    this.featuredProductArray = this.products.filter((item) => item.featuredProduct == true);
    this.onSaleArray = this.products.filter((item) => item.onSale == true);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.products = [];
    this.newProductArray = [];
    this.bestSellerArray = [];
    this.featuredProductArray = [];
    this.onSaleArray = [];
  }
}