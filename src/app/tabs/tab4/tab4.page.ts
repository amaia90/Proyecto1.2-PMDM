import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { RouterLinkDelegate } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  //Declaración de variables
  numeroAleatorio:number; //El número aleatorio que creará la función random
  numero1:number; //El número que introduce el usuario
  mayor:string; //Variables para recoger un string que indica al usuario en que punto está. 
  menor:string;
  igual:string;
  otro:string;
  
  
  
  constructor() { }
  onClick() { //Creo función onclick
    this.numeroAleatorio=Math.round(Math.random()*100); 
    //Se guarda en la variable numeroAleatorio el resultado de la función random, es decir que el programa genera número aleatorio.
    //Después el valor lo multiplico *100 y lo redondeo con la función round 
    
    if(this.numeroAleatorio>this.numero1){
      this.mayor="Introduce un número mayor"; this.otro="Introduce otro número"} else if(this.numeroAleatorio<this.numero1){
        this.menor="Introduce un número menor"; this.otro="Introduce otro número" }else if(this.numeroAleatorio==this.numero1){this.igual="Has Acertado"}
    //Introduzco un if para después utilizarlo en el html    
      
    //Pruebas propias para saber si los resultados son positivos.
    console.log(this.numeroAleatorio);
    console.log(this.numero1);

    


  }
  ngOnInit() {
  }

}
