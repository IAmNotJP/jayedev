import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicstatsComponent } from './musicstats.component';

describe('MusicstatsComponent', () => {
  let component: MusicstatsComponent;
  let fixture: ComponentFixture<MusicstatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicstatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
