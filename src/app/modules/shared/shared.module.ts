import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTypeSelectionComponent } from 'src/app/components/user-type-selection/user-type-selection.component';
import { IonInputOtp } from '@ionic/angular/standalone';



@NgModule({
  declarations: [
    UserTypeSelectionComponent
  ],

  imports: [
    CommonModule,
    IonInputOtp
  ],
  exports:[
    UserTypeSelectionComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { 
}
