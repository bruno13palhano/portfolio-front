import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { FavoriteProjectsComponent } from './favorite-projects/favorite-projects.component';
import { ProjectComponent } from './project/project.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [
    ProjectListComponent,
    FavoriteProjectsComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProjectsRoutingModule
  ],
  exports: [
    ProjectListComponent
  ]
})
export class ProjectsModule { }
