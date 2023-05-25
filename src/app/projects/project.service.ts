import { Injectable } from '@angular/core';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
    return [
      {
        id: 1,
        name: 'SSApp',
        type: 'Android',
        description: 'Application for snooker'
      },
      {
        id: 2,
        name: 'Jaspe',
        type: 'Android',
        description: 'Application for e-commerce'
       },
       {
        id: 3,
        name: 'SleepTight',
        type: 'Android',
        description: 'Application for baby development'
       },
       {
        id: 4,
        name: 'XRoad',
        type: 'Android',
        description: 'Application personal code improvement'
       }
    ];
  }
}
