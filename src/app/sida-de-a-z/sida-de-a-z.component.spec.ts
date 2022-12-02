import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidaDeAZComponent } from './sida-de-a-z.component';

describe('SidaDeAZComponent', () => {
  let component: SidaDeAZComponent;
  let fixture: ComponentFixture<SidaDeAZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidaDeAZComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidaDeAZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
