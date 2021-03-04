import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getDetails(name, callback, errCallback) {
    this.http.get("https://api.agify.io/?name=" + name).subscribe((data: any) => {
      console.log('data in service --- ', data)
      callback(data);
    }, err => {
      console.log('err in service --- ', err)
      errCallback(err);
    })
  }
}
