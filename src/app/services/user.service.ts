import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../models/User.model';

const API_URL = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/users`);
  }

  getById(id: number): Observable<User> {
    return this.http.get(`${API_URL}/user/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${API_URL}/user/${id}`, data);
  }

  updateRole(id: any, data: any): Observable<any> {
    return this.http.put(`${API_URL}/user/${id}/role`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${API_URL}/user/${id}`);
  }

  findByUsername(username: string): Observable<User> {
    return this.http.get(`${API_URL}/user/${username}`);
  }

  findByEmail(email: string): Observable<User> {
    return this.http.get(`${API_URL}/user/${email}`);
  }
}
