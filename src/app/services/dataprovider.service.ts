import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {

  constructor(private http: HttpClient,) { }

  getProviderList() {
    return this.http.get(environment.baseUrl + '/providerList')
  }
  getCatagories(itm:any) {
    if (environment.localData) {
      return this.http.get('assets/localData/categories.json');
    }
    else {
      return this.http.get(environment.baseUrl + '/getCategories/'+itm, { headers: { 'TokenAuth': 'true' } })
    }

  }

  getSpecificCatagories(itm:any){
    return this.http.get(environment.baseUrl + '/getSpecificCategories/'+itm, { headers: { 'TokenAuth': 'true' } })
  }
  getVenues() {
    if (environment.localData) {
      return this.http.get('assets/localData/venues.json');
    }
    else {
      return this.http.get(environment.baseUrl + '/getVenues', { headers: { 'TokenAuth': 'true' } })
    }

  }
  getProvider() {
    if (environment.localData) {
      return this.http.get('assets/localData/loginUser.json');
    }
    else {
      return this.http.get(environment.baseUrl + '/getProviders', { headers: { 'TokenAuth': 'true' } })
    }

  }
  getOffers(itm: any) {
    if (environment.localData) {
      return this.http.get('assets/localData/loginUser.json');
    }
    else {
      return this.http.get(environment.baseUrl + '/getOffers/' + itm, { headers: { 'TokenAuth': 'true' } })
    }
  }

}
