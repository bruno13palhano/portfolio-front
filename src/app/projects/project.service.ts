import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const projectUrl = 'http://localhost:8080/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${projectUrl}/all`);
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${projectUrl}/project/${id}`);
  }
}
