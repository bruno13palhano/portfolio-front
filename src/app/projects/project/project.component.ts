import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project = {
    id: 0,
    name: "",
    type: [],
    imagesUrls: [],
    description: ""
  }
  @Input() projectId: number = 0;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.getProjectById(this.projectId);
  }

  getProjectById(id: number) {
    this.projectService.getProjectById(id).subscribe( project => {
      console.log(project);
      return this.project = project}
    );
  }
}
