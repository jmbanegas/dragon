import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailDragonComponent } from './tail-dragon.component';

describe('TailDragonComponent', () => {
  let component: TailDragonComponent;
  let fixture: ComponentFixture<TailDragonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailDragonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TailDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
