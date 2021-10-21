import { Component, OnInit } from '@angular/core';

interface IValor { //Creación de la interface
  imagen:string;
  url: string;
}

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  valoresLista: IValor[] = [ //Genero la lista con sus datos
    {
      imagen: "BIRT_LOGO.PNG",
      url: "birt.eus",
    },
    {
      imagen: "easo_logo.PNG",
      url: "easo.hezkuntza.net",
    },
    {
      imagen: "nicolas_larburu_logo.PNG",
      url: "nlarburu.hezkuntza.net",
    },
    {
      imagen: "ciudad_jardin_logo.PNG",
      url: "ciudadjardin.hezkuntza.net",
    }

  ];
  

  constructor() { }

  ngOnInit() {
  }

}
