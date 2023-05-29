import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { FavoriteProjectsComponent } from './favorite-projects/favorite-projects.component';
import { ProjectComponent } from './project/project.component';



@NgModule({
  declarations: [
    ProjectListComponent,
    FavoriteProjectsComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectListComponent
  ]
})
export class ProjectsModule { }
