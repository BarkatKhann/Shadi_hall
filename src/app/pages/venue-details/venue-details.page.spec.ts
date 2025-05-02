import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VenueDetailsPage } from './venue-details.page';

describe('VenueDetailsPage', () => {
  let component: VenueDetailsPage;
  let fixture: ComponentFixture<VenueDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
