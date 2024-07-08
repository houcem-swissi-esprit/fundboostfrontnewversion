import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompaignServiceService {

  url:string=""; // adresse de l'api a consommer 
  constructor(private _http:HttpClient) { }

  getProduct(){
    return this._http.get(this.url);
  }
}
