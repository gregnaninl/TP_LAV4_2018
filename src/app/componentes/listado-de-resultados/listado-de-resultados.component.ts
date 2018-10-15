
import { Component, OnInit , Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
 @Input()
 listado: Array<any>;
 listado1: Array<any>;

 

  constructor() {
    this.listado= JSON.parse(localStorage.getItem("Resultados"));
   }

  ngOnInit() {

  }

  ver() {
    console.info(this.listado);
  }

}
