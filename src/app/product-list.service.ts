import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private apiURL = "http://localhost:8080/products";
  private createAPI = "http://localhost:8080/products/createProduct";
  private deleteAPI1 = "http://localhost:8080/products";
  private deleteAPI2 = "http://localhost:8080/products/deleteProduct"
  private updateAPI = "http://localhost:8080/products/updateProduct";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  createProduct(product: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(this.createAPI,product, {headers});
  }

  getdeleteProductURL(id: number): Observable<any> {
      return this.http.get<any>(`${this.deleteAPI1}/${id}`);
  }

  deleteProduct(id: number): Observable<any> {
      return this.http.delete<any>(`${this.deleteAPI2}/${id}`);
  }

  updateProduct(product: any, id: number): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put<any>(`${this.updateAPI}/${id}`,product, {headers});
}

}
