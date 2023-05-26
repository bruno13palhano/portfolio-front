import { Injectable } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from 'src/app/model/project';

@Injectable()
export class ProjectDetailService {

  private project: Project = {
    id: 0,
    name: "",
    type: "",
    description: ""
  };

  constructor(private projectService: ProjectService) { }

  getProjectById(id: number): Project {
    const projects = this.projectService.getProjects()

    this.project = projects.find(project => project.id === id) as Project;

    return this.project
  }
}
