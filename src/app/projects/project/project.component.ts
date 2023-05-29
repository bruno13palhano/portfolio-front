import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../model/project';
import { ProjectDetailService } from './project-detail.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectDetailService]
})
export class ProjectComponent implements OnInit {

  project: Project = {
    id: 0,
    name: "",
    type: "",
    description: ""
  }
  @Input() projectId: number = 0;

  constructor(private projectDetailService: ProjectDetailService) {
  }

  ngOnInit(): void {
    this.project = this.projectDetailService.getProjectById(this.projectId)
  }
}
