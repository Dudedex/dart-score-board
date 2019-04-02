import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportImportDataPanelComponent } from './export-import-data-panel.component';

describe('ExportImportDataPanelComponent', () => {
  let component: ExportImportDataPanelComponent;
  let fixture: ComponentFixture<ExportImportDataPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportImportDataPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportImportDataPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
