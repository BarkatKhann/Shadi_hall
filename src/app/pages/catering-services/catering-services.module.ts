import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CateringServicesPageRoutingModule } from './catering-services-routing.module';

import { CateringServicesPage } from './catering-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CateringServicesPageRoutingModule
  ],
  declarations: [CateringServicesPage]
})
export class CateringServicesPageModule {}
