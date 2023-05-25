import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PariValideComponent } from './pari-valide.component';

describe('PariValideComponent', () => {
  let component: PariValideComponent;
  let fixture: ComponentFixture<PariValideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PariValideComponent]
    });
    fixture = TestBed.createComponent(PariValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
