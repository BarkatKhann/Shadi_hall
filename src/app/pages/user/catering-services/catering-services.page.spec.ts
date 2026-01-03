import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CateringServicesPage } from './catering-services.page';

describe('CateringServicesPage', () => {
  let component: CateringServicesPage;
  let fixture: ComponentFixture<CateringServicesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
