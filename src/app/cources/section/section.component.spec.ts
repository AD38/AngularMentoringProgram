import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser'

import { SectionComponent } from './section.component';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionComponent ],
      imports: [ FormsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        NoopAnimationsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test two-way binding', () => {
    component.searchText = 'text';
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('.section-container input')).nativeElement;

    expect(component.searchText).toEqual('text');

    input.value = 'updated text';
    input.dispatchEvent(new Event('input'));

    expect(component.searchText).toEqual('updated text');
  });

  it('should call console.log on search', () => {
    component.searchText = 'text';
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('.section-container input')).nativeElement;

    expect(component.searchText).toEqual('text');

    input.value = 'updated text';
    input.dispatchEvent(new Event('input'));

    spyOn(console, "log");
    fixture.debugElement.query(By.css('.search-button')).triggerEventHandler('click', null);

    expect(console.log).toHaveBeenCalledWith("updated text");
  });

  it('should call console.log on add cource', () => {
    spyOn(console, "log");
    fixture.debugElement.query(By.css('.add-cource-container button')).triggerEventHandler('click', null);

    expect(console.log).toHaveBeenCalledWith("add cource");
  });
});
