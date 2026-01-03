import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  userType:any
  constructor(private storage: Storage) {
    this.storage.create();
  }
  
  async create() {
    this.storage.create();
  }
  async set(key: string, value: any) {
    await this.storage.set(key, value);
  }

  async get(key: string) {
    return await this.storage.get(key);
  }

  async remove(key: string) {
    await this.storage.remove(key);
  }

  async clear() {
    await this.storage.clear();
  }

  setUserTye(data:any){
    this.userType = data;
  }
  getUserType(){
    return this.userType;
  }
}
