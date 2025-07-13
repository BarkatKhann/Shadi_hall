import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/tabs/home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs/home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'venue-details',
    loadChildren: () => import('./pages/venue-details/venue-details.module').then( m => m.VenueDetailsPageModule)
  },
  {
    path: 'catering-services',
    loadChildren: () => import('./pages/catering-services/catering-services.module').then( m => m.CateringServicesPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'venues',
    loadChildren: () => import('./pages/venues/venues.module').then( m => m.VenuesPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./pages/wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
  {
    path: 'booking-details',
    loadChildren: () => import('./pages/booking-details/booking-details.module').then( m => m.BookingDetailsPageModule)
  },
  {
    path: 'booking-summary',
    loadChildren: () => import('./pages/booking-summary/booking-summary.module').then( m => m.BookingSummaryPageModule)
  },
  {
    path: 'thank-you',
    loadChildren: () => import('./pages/thank-you/thank-you.module').then( m => m.ThankYouPageModule)
  },
  {
    path: 'pay-now',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    // loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp-verification',
    loadChildren: () => import('./pages/auth/otp-verification/otp-verification.module').then( m => m.OtpVerificationPageModule)
  },  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'set-password',
    loadChildren: () => import('./pages/auth/set-password/set-password.module').then( m => m.SetPasswordPageModule)
  },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
