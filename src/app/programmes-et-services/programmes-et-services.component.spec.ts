import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammesEtServicesComponent } from './programmes-et-services.component';

describe('ProgrammesEtServicesComponent', () => {
  let component: ProgrammesEtServicesComponent;
  let fixture: ComponentFixture<ProgrammesEtServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammesEtServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammesEtServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
