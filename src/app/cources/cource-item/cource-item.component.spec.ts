import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceItemComponent } from './cource-item.component';
import { By } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CourceBorderHighlightDirective } from '../directives/cource-border-highlight.directive';

describe('CourceItemComponent', () => {
  let component: CourceItemComponent;
  let fixture: ComponentFixture<CourceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourceItemComponent, CourceBorderHighlightDirective ],
      imports: [ FormsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourceItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind properties', () => {
    component.courceItem = {
      creationDate: new Date(2020, 10, 11),
      description: "description",
      duration: 125,
      id: 1,
      title: "title",
      isTopRated: false
    }
    
    fixture.detectChanges();
    console.log(fixture.debugElement.query(By.css('.cource-title')).nativeElement)
    let title = fixture.debugElement.query(By.css('.cource-title .icon-text span')).nativeElement.textContent;
    expect(title).toBe("TITLE");

    let description = fixture.debugElement.query(By.css('mat-card-content')).nativeElement.textContent;
    expect(description).toBe("description");   

    let duration = fixture.debugElement.queryAll(By.css('.cource-subtitle .icon-text span'))[0].nativeElement.textContent;
    expect(duration).toBe("2h 5min");

    let creationDate = fixture.debugElement.queryAll(By.css('.cource-subtitle .icon-text span'))[1].nativeElement.textContent;
    expect(creationDate).toBe("11 Nov, 2020");
  });

  it('should pass id on delete', () => {
    component.courceItem = {
      creationDate: new Date(2020, 10, 11),
      description: "description",
      duration: 125,
      id: 12,
      title: "title",
      isTopRated: false
    }

    let id: number;
    component.onDelete.subscribe(value => id = value);

    fixture.debugElement.query(By.css('#delete-cource-button')).triggerEventHandler('click', null);

    expect(id).toBe(12);
  });

  it('should call console.log on edit', () => {
    spyOn(console, "log");
    fixture.debugElement.query(By.css('#edit-cource-button')).triggerEventHandler('click', null);

    expect(console.log).toHaveBeenCalledWith("edit cource item");
  });
});
