import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  updatePassword = 'updatePass';
  uid: "agarcia";

  constructor(private http: HttpClient) { }



  changePassword(params: any){


    params.uid = 'agarcia';
    console.log(params);

    return this.http.put<any>( environment.url + this.updatePassword, params);

  }



}
