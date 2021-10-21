import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
//import { ExploreContainerComponentModule } from '../../shared/componentes/explore-container/explore-container.module';
import{ComponentesModule} from 'src/app/shared/componentes/componentes.module';
import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    //ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
    ComponentesModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
