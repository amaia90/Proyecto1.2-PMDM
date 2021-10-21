import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
//import { ExploreContainerComponentModule } from '../../shared/componentes/explore-container/explore-container.module';
import{ComponentesModule} from 'src/app/shared/componentes/componentes.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    //ExploreContainerComponentModule,
    ComponentesModule,

    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
