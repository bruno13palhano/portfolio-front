import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects()
  }

}
