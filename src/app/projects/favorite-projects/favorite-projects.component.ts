import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from 'src/app/projects/project';

@Component({
  selector: 'app-favorite-projects',
  templateUrl: './favorite-projects.component.html',
  styleUrls: ['./favorite-projects.component.css']
})
export class FavoriteProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }
}
