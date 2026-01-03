import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/user/home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'wishlist',
        loadChildren: () => import('../pages/user/wishlist/wishlist.module').then(m => m.WishlistPageModule)
      },
      {
        path: 'venue',
        loadChildren: () => import('../pages/user/venues/venues.module').then(m => m.VenuesPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../pages/user/account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../pages/provider/dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
