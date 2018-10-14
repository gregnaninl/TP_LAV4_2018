import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  CtrlCarousel:boolean=true;

  constructor() { }

  ngOnInit() {
    this.CtrlCarousel= true;
  }

}
