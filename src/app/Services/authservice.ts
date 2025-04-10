import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUsuarioDto } from '../Dtos/login-usuario.dto';
import { NewUsuarioDto } from '../Dtos/new-usuario.dto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  login(loginDto: LoginUsuarioDto): Observable<string> {
    return this.http.post(this.baseUrl + '/login', loginDto, { responseType: 'text' });
  }

  register(newUserDto: NewUsuarioDto): Observable<string> {
    return this.http.post(this.baseUrl + '/registrar', newUserDto, { responseType: 'text' });
  }

  checkAuth(): Observable<string> {
    return this.http.get(this.baseUrl + '/check-auth', { responseType: 'text' });
  }
}
