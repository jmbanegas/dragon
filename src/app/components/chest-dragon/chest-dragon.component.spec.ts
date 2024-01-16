import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestDragonComponent } from './chest-dragon.component';

describe('ChestDragonComponent', () => {
  let component: ChestDragonComponent;
  let fixture: ComponentFixture<ChestDragonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChestDragonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChestDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
