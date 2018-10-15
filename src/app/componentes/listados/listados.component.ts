import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html',
  styleUrls: ['./listados.component.css']
})
export class ListadosComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  Listado(tipo: string) {
    switch (tipo) {
      case 'Jugadores':
          this.router.navigate(['/Listados/Jugadores']);
        break;
      case 'Resultado':
          this.router.navigate(['/Listados/Resultados']);
        break;
      case 'Ganadores':
          this.router.navigate(['/Listados/Ganadores']);
        break;
      
    }
  }





}
