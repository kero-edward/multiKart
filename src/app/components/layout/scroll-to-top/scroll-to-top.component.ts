import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
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
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {

  showScrollBtn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  goToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll() {
    if (window.scrollY >= 300) {
      this.showScrollBtn = true;
    }
    else {
      this.showScrollBtn = false;
    }
  }
}