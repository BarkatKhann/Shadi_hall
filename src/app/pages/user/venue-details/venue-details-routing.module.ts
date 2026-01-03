import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VenueDetailsPage } from './venue-details.page';

const routes: Routes = [
  {
    path: '',
    component: VenueDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VenueDetailsPageRoutingModule {}
