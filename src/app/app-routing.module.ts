import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './provider/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard], // Let the guard handle redirection
    loadChildren: () => import('./pages/redirect/redirect.module').then(m => m.RedirectPageModule),
  },
  {
    path: 'tabs',
    loadChildren: () =>
    import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'venue-details',
    loadChildren: () => import('./pages/user/venue-details/venue-details.module').then(m => m.VenueDetailsPageModule)
  },
  {
    path: 'catering-services',
    loadChildren: () => import('./pages/user/catering-services/catering-services.module').then(m => m.CateringServicesPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/user/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'venues',
    loadChildren: () => import('./pages/user/venues/venues.module').then(m => m.VenuesPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./pages/user/wishlist/wishlist.module').then(m => m.WishlistPageModule)
  },
  {
    path: 'booking-details',
    loadChildren: () => import('./pages/user/booking-details/booking-details.module').then(m => m.BookingDetailsPageModule)
  },
  {
    path: 'booking-summary',
    loadChildren: () => import('./pages/user/booking-summary/booking-summary.module').then(m => m.BookingSummaryPageModule)
  },
  {
    path: 'thank-you',
    loadChildren: () => import('./pages/user/thank-you/thank-you.module').then(m => m.ThankYouPageModule)
  },
  {
    path: 'pay-now',
    loadChildren: () => import('./pages/user/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    // loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'otp-verification',
    loadChildren: () => import('./pages/auth/otp-verification/otp-verification.module').then(m => m.OtpVerificationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'set-password',
    loadChildren: () => import('./pages/auth/set-password/set-password.module').then(m => m.SetPasswordPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/provider/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/provider/services/services.module').then(m => m.ServicesPageModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./pages/user/service/service.module').then( m => m.ServicePageModule)
  },  {
    path: 'service-detail',
    loadChildren: () => import('./pages/user/service-detail/service-detail.module').then( m => m.ServiceDetailPageModule)
  },







];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
