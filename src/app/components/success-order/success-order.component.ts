import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-order',
  templateUrl: './success-order.component.html',
  styleUrls: ['./success-order.component.scss']
})
export class SuccessOrderComponent implements OnInit {

  transactionID!: any;

  constructor(public data: DataService) { 

    localStorage.removeItem('cartlist');
    data.cartQuantity = 0;

    if (localStorage.getItem('transactionID') !== undefined || localStorage.getItem('transactionID') !== null) {
      this.transactionID = localStorage.getItem('transactionID') === null ? '[]' : localStorage.getItem('transactionID');
      this.data.transactionID = JSON.parse(this.transactionID);
      this.data.transactionID ++;
      localStorage.setItem('transactionID', JSON.stringify(data.transactionID));
    }

    if(localStorage.getItem('transactionID') === undefined || localStorage.getItem('transactionID') === null) {
      data.transactionID ++;
      localStorage.setItem('transactionID', JSON.stringify(data.transactionID));
    }

  }

  ngOnInit(): void {
  }

}