import { Component, OnInit } from '@angular/core';
import { Faq } from './faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqs: Faq[] = [
    {
      title: 'Accordion Item #1',
      description: `This is the first item's accordion body. It is shown by default, until the collapse
                plugin adds the appropriate classes that we use to style each element.These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions.You can modify any of this with
                custom CSS or overriding our default variables.It's also worth noting that just about any HTML can go
                within the. accordion-body, though the transition does limit overflow.`,
      relatedID: 'panelsStayOpen-headingOne',
      relatedDataTarget: 'panelsStayOpen-collapseOne'
    },
    {
      title: 'Accordion Item #2',
      description: `This is the first item's accordion body. It is shown by default, until the collapse
                plugin adds the appropriate classes that we use to style each element.These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions.You can modify any of this with
                custom CSS or overriding our default variables.It's also worth noting that just about any HTML can go
                within the. accordion-body, though the transition does limit overflow.`,
      relatedID: 'panelsStayOpen-headingTwo',
      relatedDataTarget: 'panelsStayOpen-collapseTwo'
    },
    {
      title: 'Accordion Item #3',
      description: `This is the first item's accordion body. It is shown by default, until the collapse
                plugin adds the appropriate classes that we use to style each element.These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions.You can modify any of this with
                custom CSS or overriding our default variables.It's also worth noting that just about any HTML can go
                within the. accordion-body, though the transition does limit overflow.`,
      relatedID: 'panelsStayOpen-headingThree',
      relatedDataTarget: 'panelsStayOpen-collapseThree'
    },
    {
      title: 'Accordion Item #4',
      description: `This is the first item's accordion body. It is shown by default, until the collapse
                plugin adds the appropriate classes that we use to style each element.These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions.You can modify any of this with
                custom CSS or overriding our default variables.It's also worth noting that just about any HTML can go
                within the. accordion-body, though the transition does limit overflow.`,
      relatedID: 'panelsStayOpen-headingFour',
      relatedDataTarget: 'panelsStayOpen-collapseFour'
    },
    {
      title: 'Accordion Item #5',
      description: `This is the first item's accordion body. It is shown by default, until the collapse
                plugin adds the appropriate classes that we use to style each element.These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions.You can modify any of this with
                custom CSS or overriding our default variables.It's also worth noting that just about any HTML can go
                within the. accordion-body, though the transition does limit overflow.`,
      relatedID: 'panelsStayOpen-headingFive',
      relatedDataTarget: 'panelsStayOpen-collapseFive'
    },
    {
      title: 'Accordion Item #6',
      description: `This is the first item's accordion body. It is shown by default, until the collapse
                plugin adds the appropriate classes that we use to style each element.These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions.You can modify any of this with
                custom CSS or overriding our default variables.It's also worth noting that just about any HTML can go
                within the. accordion-body, though the transition does limit overflow.`,
      relatedID: 'panelsStayOpen-headingSix',
      relatedDataTarget: 'panelsStayOpen-collapseSix'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}