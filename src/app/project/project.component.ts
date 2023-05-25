import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Project } from '../model/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnChanges {

  @Input() name: String = "";
  @Output() liked = new EventEmitter<Boolean>();

  projects: Array<Project> = [
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
    },
  ]

  constructor() { }

  ngOnInit(): void {

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
