import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { StorageService } from 'src/app/services/storage.service';



export const authInterceptor: HttpInterceptorFn = (req, next) => {
   const router = inject(Router);
  //  const commonService = inject(CommonService);
  //  const storageService = inject(StorageService);
    const token = localStorage.getItem('token'); // or get from a service
    let authReq = req;
  if (token && req.headers.get('TokenAuth') === 'true' ) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
   return next(authReq)
   .pipe(
    catchError((error) => {
      if (error.status === 403) {
        localStorage.removeItem('token');
  //       // storageService.remove('isLoggedIn');
  //       // storageService.remove('userType');
        // commonService.presentToast('Session expired, please login again');
        localStorage.setItem('IsSessionExp','true');
        router.navigate(['/login'],
        );
      }
      return throwError(() => error);
    })
  );
};
