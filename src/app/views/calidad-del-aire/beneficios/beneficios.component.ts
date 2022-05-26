import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css'],
  animations: [
    trigger( 'popUp', [
      transition(':enter', [
        style({
          width: '-100%',
          opacity: 0,
          transform: 'scale(0) translateY(-100%)'
        }),
        animate('5s',
        style({
          opacity: 1,
          transform: 'scale(1) translateY(0%)'
        })),
      ]),
    ])
  ]
})
export class BeneficiosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Aos.init();
  }

}
