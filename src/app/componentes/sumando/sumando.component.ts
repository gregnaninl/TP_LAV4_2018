import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { JuegoSumando } from '../../clases/juego-sumando'

@Component({
  selector: 'app-sumando',
  templateUrl: './sumando.component.html',
  styleUrls: ['./sumando.component.css']
})
export class SumandoComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();
 
  nuevoJuego: JuegoSumando ;
  ocultarVerificar : boolean;
  ocultarRespuesta : boolean;
  ocultarNuevoJuego : boolean;
  ocultarSpinner : boolean;
  Mensajes:string;
  jugador : JSON = JSON.parse(localStorage.getItem("usuarioEnLinea"));
  arrayResultados : Array<any> = new Array<any>();

  numero1: number ;
  numero2: number ;
  numero3: number ;
  numero4: number ;
  numero5: number ;
  numero6: number ;
  numero7: number ;
  numero8: number ;
  numero9: number ;
  contador:number;
 
  
  


  constructor() {
    this.nuevoJuego = new JuegoSumando("Sumando 15",false,this.jugador["mail"]);
    
    this.numero1= 0;
    this.numero2 = 0;
    this.numero3 = 0;
    this.numero4= 0;
    this.numero5 = 0;
    this.numero6 = 0;
    this.numero7= 0;
    this.numero8= 0;
    this.numero9=0;
    this.ocultarSpinner = true;
    this.ocultarVerificar = true;
    this.ocultarNuevoJuego = false;
    this.arrayResultados = JSON.parse(localStorage.getItem("Resultados"));
    this.ocultarRespuesta= true;
   }

  ngOnInit() {
   
  }
  sumar( numero1: number,numero2 : number,numero3 : number){
    return numero1+numero2+numero3;
  }

  consultar(){

   
    this.ocultarVerificar=true;
    this.nuevoJuego.fila1 = this.sumar(this.numero1 ,this.numero2, this.numero3) ;
    this.nuevoJuego.fila2 = this.sumar(this.numero4 ,this.numero5 ,this.numero6);
    this.nuevoJuego.fila3 = this.sumar(this.numero7 , this.numero8 , this.numero9);
    this.nuevoJuego.fila4 = this.sumar(this.numero1 , this.numero5 ,this.numero9);
    this.nuevoJuego.fila5 = this.sumar(this.numero7 ,this.numero5 , this.numero3 ) ;
   
   
        if(this.nuevoJuego.verificar() )
        {
          this.MostarMensaje("Muy bien acertaste!!",true);
        }
        else
          {
            this.MostarMensaje("MMM  Segui Participando",false);
          }
      //this.MostarMensaje("#"+this.contador+" "+mensaje+" ayuda :"+this.nuevoJuego.retornarAyuda());
        console.log(this.nuevoJuego.fila1+","+this.nuevoJuego.fila2+","+ this.nuevoJuego.fila3+","+ this.nuevoJuego.fila4+","+ this.nuevoJuego.fila5);
      this.ocultarVerificar = true;
        this.arrayResultados.push(this.nuevoJuego);
        localStorage.setItem("Resultados",JSON.stringify(this.arrayResultados));
        this.nuevoJuego = new JuegoSumando("Sumando 15",false,this.jugador["mail"]);
        this.ocultarSpinner = true;   
        this.ocultarNuevoJuego = false;
  
      }
  
  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      //modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   }  

  


  NuevoJuego(){


    /*this.numero1=0;
    this.numero2=0;
    this.numero3=0;
    this.numero4=0;
    this.numero5=0;
    this.numero6=0;
    this.numero7=0;
    this.numero8=0;
    this.numero9=0;*/
    this.ocultarNuevoJuego = true;
    this.ocultarVerificar = false;
    this.ocultarRespuesta= true;

  }

  MostrarResultado(){
    this.ocultarRespuesta= false;
    

  }




}
