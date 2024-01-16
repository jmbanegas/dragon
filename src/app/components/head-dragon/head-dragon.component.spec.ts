import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadDragonComponent } from './head-dragon.component';

describe('HeadDragonComponent', () => {
  let component: HeadDragonComponent;
  let fixture: ComponentFixture<HeadDragonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadDragonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
