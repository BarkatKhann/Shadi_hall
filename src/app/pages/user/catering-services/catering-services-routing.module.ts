import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CateringServicesPage } from './catering-services.page';

const routes: Routes = [
  {
    path: '',
    component: CateringServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CateringServicesPageRoutingModule {}
