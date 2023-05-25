import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Project } from '../model/project';
import { ProjectService } from '../projects/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnChanges {

  @Input() name: String = "";
  @Output() liked = new EventEmitter<Boolean>();

  projects: Project[] = [];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects()
  }

  ngOnChanges(changes: SimpleChanges) {
    const name = changes['name'];
    const oldValue = name.previousValue;
    const newValue = name.currentValue;

    if (!name.isFirstChange()) {
      console.log(`project name changed from ${oldValue} to ${newValue}`);
    }
  }
}
