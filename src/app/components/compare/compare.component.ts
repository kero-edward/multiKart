import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  compareList: any = [];

  constructor(public data: DataService) { 
    if (localStorage.getItem('comparelist') !== undefined || localStorage.getItem('comparelist') !== null) {
      this.compareList = localStorage.getItem('comparelist') === null ? '[]' : localStorage.getItem('comparelist');
      this.data.compareList = JSON.parse(this.compareList);
    }
  }

  ngOnInit(): void {
  }

  deleteProductFromCompareList(id: number) {
    this.compareList = this.data.compareList.filter((item:any) => item.id !== id);
    this.data.compareList = this.compareList;
    localStorage.setItem('comparelist', JSON.stringify(this.data.compareList));
  }
}