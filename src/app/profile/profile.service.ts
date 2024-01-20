import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile';

const profileUrl = 'http://localhost:8080/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(id: number): Observable<Profile> {
    return this.http.get<Profile>(`${profileUrl}/profile/${id}`);
  }
}
