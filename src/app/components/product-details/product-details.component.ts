import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import KeenSlider, { KeenSliderInstance, KeenSliderPlugin } from 'keen-slider';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

function ThumbnailPlugin(main: KeenSliderInstance): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }

    function addActive(idx: number) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          main.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      addActive(slider.track.details.rel);
      addClickEvents();
      main.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: [
    '../../../../node_modules/keen-slider/keen-slider.min.css',
    './product-details.component.scss',
  ],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  productId: number | undefined;
  product: any | undefined;
  relatedProducts!: any[];
  wishList: any = [];
  compareList: any = [];
  cartList: any = [];

  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;
  @ViewChild('thumbnailRef') thumbnailRef!: ElementRef<HTMLElement>;

  slider!: KeenSliderInstance;
  productFound: boolean = false;
  thumbnailSlider!: KeenSliderInstance;

  constructor(private route: ActivatedRoute, public data: DataService, public dialog: MatDialog) {
    this.productId = this.route.snapshot.params['id'];
    this.product = data.products.find((item) => item.id == this.productId);
    this.relatedProducts = data.products.filter((item) => item.category == this.product.category);
    // to save wishlist array when refresh and not be deleted
    if (localStorage.getItem('wishlist') !== undefined || localStorage.getItem('wishlist') !== null) {
      this.wishList = localStorage.getItem('wishlist') === null ? '[]' : localStorage.getItem('wishlist');
      this.data.wishList = JSON.parse(this.wishList);
    }

    // to save comparelist array when refresh and not be deleted
    if (localStorage.getItem('comparelist') !== undefined || localStorage.getItem('comparelist') !== null) {
      this.compareList = localStorage.getItem('comparelist') === null ? '[]' : localStorage.getItem('comparelist');
      this.data.compareList = JSON.parse(this.compareList);
    }

    // to save cartlist array when refresh and not be deleted & update product count if found or not
    if (localStorage.getItem('cartlist') !== undefined || localStorage.getItem('cartlist') !== null) {
      this.cartList = localStorage.getItem('cartlist') === null ? '[]' : localStorage.getItem('cartlist');
      this.data.cartList = JSON.parse(this.cartList); 
      this.data.cartQuantity = this.data.cartList.length;

      this.data.cartList.find((item:any) => {
        if(item.cartProduct.id === this.product.id) {
          this.data.productQuantity = this.data.cartList[0].count;
        }
        if(item.cartProduct.id !== this.product.id) {
          if(this.product.quantity == 0) {
            this.data.productQuantity = 'out of stock';
          }
          else {
            this.data.productQuantity = 1;
          }
        }
      });
    }
    if(localStorage.getItem('cartlist') === undefined || localStorage.getItem('cartlist') === null) {
      if(this.product.quantity == 0) {
      this.data.productQuantity = 'out of stock';
      }
      else {
        this.data.productQuantity = 1;
      }
    }
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement);
    this.thumbnailSlider = new KeenSlider(
      this.thumbnailRef.nativeElement,
      {
        initial: 0,
        slides: {
          perView: 4,
          spacing: 10,
        },
      },
      [ThumbnailPlugin(this.slider)]
    );
  }

  cutString(string: string) {
    return string.substring(0, 150) + '...';
  }

  commentForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    comment: new FormControl(null, Validators.required)
  })

  get contactUsForm() {
    return this.commentForm.controls;
  }

  getNewProduct(id: number) {
    this.relatedProducts = [];
    this.productId = id;
    this.product = this.data.products.find((item) => item.id === id);
    this.relatedProducts = this.data.products.filter((item) => item.category === this.product.category);
    if(this.product.quantity == 0) {
      this.data.productQuantity = 'out of stock';
    }
    else {
      this.data.productQuantity = 1;
    }
  }

  addToWishlist() {
    this.productFound = this.data.wishList.find((item:any)=> item.id === this.product.id) ? true : false;
    if(!this.productFound) {
      this.data.wishList.push(this.product);
      localStorage.setItem('wishlist', JSON.stringify(this.data.wishList));
    }
    else {
      this.openDialog();
    }
  }

  addToCart(product: any, count: number = 1) {
    if(localStorage.getItem('cartlist')) {
      this.productFound = this.data.cartList.find((item:any) => item.cartProduct.id === product.id);
      if(this.productFound) {
        const newArr = this.data.cartList.map((item:any) => {
          if(item.cartProduct.id === product.id) {
            item.count = count;
            item.totalPrice = item.cartProduct.price * item.count;
            this.data.productQuantity = item.count;
          }
          return item;
        });
        this.data.cartList = newArr;
        localStorage.setItem('cartlist', JSON.stringify(this.data.cartList));
      }
      else {
        this.data.cartList = [...this.data.cartList, { 'cartProduct': product, 'count': count, 'totalPrice': product.price * count }];
        localStorage.setItem('cartlist', JSON.stringify(this.data.cartList));
      }
    }
    else {
      this.data.cartList = [{ 'cartProduct': product, 'count': count, 'totalPrice': product.price * count }];
      localStorage.setItem('cartlist', JSON.stringify(this.data.cartList));
    }
    this.data.cartQuantity = this.data.cartList.length;
  }

  compare() {
    this.productFound = this.data.compareList.find((item:any)=> item.id === this.product.id) ? true : false;
    if(!this.productFound && this.data.compareList.length < 3) {
      this.data.compareList.push(this.product);
      localStorage.setItem('comparelist', JSON.stringify(this.data.compareList));
    }
    else if(this.productFound) {
      this.openDialog();
    }
    else if(this.data.compareList.length == 3) {
      this.openCompareDialog();
    }
  }

  decrease() {
    this.data.productQuantity --;
  }

  increase() {
    this.data.productQuantity ++;
  }

  openDialog() {
    this.dialog.open(MatDialogElementComponent);
  }

  openCompareDialog() {
    this.dialog.open(CompareMatDialogElementComponent);
  }

  getData() {
    console.log('Name: ', this.commentForm.controls['name'].value);
    console.log('Email: ', this.commentForm.controls['email'].value);
    console.log('Comment: ', this.commentForm.controls['comment'].value);
  }

  ngOnDestroy(): void {
    this.productId = undefined;
    this.product = undefined;
    this.relatedProducts = [];
    if (this.slider) this.slider.destroy();
    if (this.thumbnailSlider) this.thumbnailSlider.destroy();
  }
}

@Component({
  selector: 'app-mat-dialog-element',
  templateUrl: '../mat-dialog-element/mat-dialog-element.component.html',
})
export class MatDialogElementComponent {
  constructor(private dialogRef: MatDialogRef<MatDialogElementComponent>) { }
  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
}

@Component({
  selector: 'app-compare-mat-dialog-element',
  templateUrl: '../compare-mat-dialog-element/compare-mat-dialog-element.component.html',
})
export class CompareMatDialogElementComponent {
  constructor(private dialogRef: MatDialogRef<CompareMatDialogElementComponent>) { }
  closeDialog(){
    // Write your stuff here
    this.dialogRef.close(); // <- Close the mat dialog
  }
}