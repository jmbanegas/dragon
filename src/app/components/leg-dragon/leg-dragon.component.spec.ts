import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegDragonComponent } from './leg-dragon.component';

describe('LegDragonComponent', () => {
  let component: LegDragonComponent;
  let fixture: ComponentFixture<LegDragonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegDragonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
