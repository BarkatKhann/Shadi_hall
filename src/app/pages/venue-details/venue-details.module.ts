import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenueDetailsPageRoutingModule } from './venue-details-routing.module';

import { VenueDetailsPage } from './venue-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenueDetailsPageRoutingModule
  ],
  declarations: [VenueDetailsPage]
})
export class VenueDetailsPageModule {}
