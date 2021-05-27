import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Sample} from '../models/Sample.model';

const API_URL = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  getAll(params: any): Observable<any> {
    return this.http.get<any>(`${API_URL}/samples`, { params });
  }

  get(id: any): Observable<Sample> {
    return this.http.get(`${API_URL}/sample/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(API_URL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }

  findByTitle(title: any): Observable<Sample[]> {
    return this.http.get<Sample[]>(`${API_URL}?title=${title}`);
  }

  findByTradeName(title: any): Observable<Sample[]> {
    return this.http.get<Sample[]>(`${API_URL}/sample/?tradeName==${name}`);
  }
}
