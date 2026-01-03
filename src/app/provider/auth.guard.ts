import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

export const authGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const storage = inject(Storage);

  await storage.create(); // Ensure storage is initialized
  const isLoggedIn = await storage.get('isLoggedIn');
  const userType = await storage.get('userType');

  if (!isLoggedIn) {
    return router.createUrlTree(['/login']);
  }

  // Only redirect when coming from base route
  if (state.url === '/' || state.url === '/tabs') {
    if (userType === 'provider') {
      return router.createUrlTree(['/tabs/dashboard']);
    } else {
      return router.createUrlTree(['/tabs/home']);
    }
  }

  // Allow if navigating directly to valid routes
  return true;
};
