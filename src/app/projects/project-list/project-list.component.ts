import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from 'src/app/projects/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit, OnDestroy {

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects()
    console.log(this.projects);
  }

  getProjects() {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects)
  }

  ngOnDestroy(): void {

  }
}
