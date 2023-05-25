import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';



@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectListComponent
  ]
})
export class ProjectsModule { }
