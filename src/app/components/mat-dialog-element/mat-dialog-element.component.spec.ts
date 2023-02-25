import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogElementComponent } from './mat-dialog-element.component';

describe('MatDialogElementComponent', () => {
  let component: MatDialogElementComponent;
  let fixture: ComponentFixture<MatDialogElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDialogElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDialogElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
