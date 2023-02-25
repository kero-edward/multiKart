import { DataService } from 'src/app/services/data.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  animations: [
    trigger('inOut', [
      transition('void => *', [
        style({ opacity: 0 }),           // initial styles
        animate('500ms',
          style({ opacity: 1 })          // final style after the transition has finished
        )
      ]),
      transition('* => void', [
        animate('500ms',
          style({ opacity: 0 })          // we assume the initial style will be always opacity: 1
        )
      ])
    ])
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showOnlyNavBar: boolean = false;

  constructor(public data: DataService) { }

  ngOnInit(): void {
  }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    if (window.scrollY >= 200) {
      this.showOnlyNavBar = true;
    }
    else {
      this.showOnlyNavBar = false;
    }
  }

}