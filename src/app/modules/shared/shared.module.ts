import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTypeSelectionComponent } from 'src/app/components/user-type-selection/user-type-selection.component';
import { IonInputOtp } from '@ionic/angular/standalone';
import { VenueDetailsComponent } from 'src/app/components/venue-details/venue-details.component';



@NgModule({
  declarations: [
    UserTypeSelectionComponent,
    VenueDetailsComponent
  ],

  imports: [
    CommonModule,
    IonInputOtp
  ],
  exports:[
    UserTypeSelectionComponent,
    VenueDetailsComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { 
}
