import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //Se importa automaticamente para poder utilizar el formulario

import { IonicModule } from '@ionic/angular';
import{ComponentesModule} from 'src/app/shared/componentes/componentes.module';
import { Tab4PageRoutingModule } from './tab4-routing.module';
//import { ExploreContainerComponentModule } from '../../shared/componentes/explore-container/explore-container.module';
import { Tab4Page } from './tab4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //ExploreContainerComponentModule,
    Tab4PageRoutingModule,
    ComponentesModule
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
