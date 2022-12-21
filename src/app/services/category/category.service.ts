import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpclient:HttpClient) {}
    
  getcategories():any {
    return this.httpclient.get(`${environment.apiUrl}categories/`)
  }
}
