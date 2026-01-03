import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceDetailPageRoutingModule } from './service-detail-routing.module';

import { ServiceDetailPage } from './service-detail.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [ServiceDetailPage]
})
export class ServiceDetailPageModule {}
