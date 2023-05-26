import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteProjectsComponent } from './favorite-projects.component';

describe('FavoriteProjectsComponent', () => {
  let component: FavoriteProjectsComponent;
  let fixture: ComponentFixture<FavoriteProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
