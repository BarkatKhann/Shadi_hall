import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    registerUser(data:any) {
    console.log(data)
    const userData = {
      "name": data.name,
      "email": data.email,
      "password": data.Psw,
      "phone": data.phone,
      "role": data.role
    }
    if(environment.localData){
      return this.http.get('assets/localData/registerUser.json');
    }else{
      return this.http.post(environment.baseUrl+'/signup',userData
      // {headers: new HttpHeaders().set('Content-Type','application/json')}
    );
    // return this.http.post(environment.baseUrl+'/signup', userData,
    //   // {headers: new HttpHeaders().set('Content-Type','application/json')}
    // );
  }
}
  
  login(data:any){
    const Userdata = {
      "email": data.email,
      "password": data.password,
    }
    return this.http.post(environment.baseUrl+'/login',Userdata,{headers:{'TokenAuth':'false'}})
  }
}
