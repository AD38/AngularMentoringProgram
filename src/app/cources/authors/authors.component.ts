import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IAuthor } from '../models/iaouthor';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorsComponent),
      multi: true
    }
  ]
})
export class AuthorsComponent implements Validator, ControlValueAccessor {

  private _savedAuthors: IAuthor[];
  @Input() set savedAuthors(value: IAuthor[]) {
    this._savedAuthors = value;
    this.checkedAuthors = value;
  }

  get savedAuthors(): IAuthor[] {
    return this._savedAuthors;
  }

  @Input()
  public allAuthors: IAuthor[];

  @Output()
  public modifyAuthorEvent = new EventEmitter<IAuthor[]>();

  private checkedAuthors: IAuthor[];

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  @ViewChild('authorInput') authorInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  private onChange = (value: any) => { };

  constructor() { }

  writeValue(obj: any): void { }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }


  validate(control: AbstractControl): ValidationErrors {
    if (control.value?.length < 1) {
      return { invalidLength: true };
    }

    return null;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.checkedAuthors.push({ id: (Math.floor(Math.random() * 100) + 10).toString(), name: value.trim() });

      this.modifyAuthorEvent.emit(this.checkedAuthors);
      this.onChange(this.checkedAuthors);
    }

    if (input) {
      input.value = '';
    }
  }

  remove(author: IAuthor): void {
    const index = this.checkedAuthors.map(a => a.id).indexOf(author.id);
    if (index >= 0) {
      this.checkedAuthors.splice(index, 1);
      this.modifyAuthorEvent.emit(this.checkedAuthors);
      this.onChange(this.checkedAuthors);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.checkedAuthors.push(event.option.value);
    this.modifyAuthorEvent.emit(this.checkedAuthors);
    this.onChange(this.checkedAuthors);
    this.authorInput.nativeElement.value = '';
  }
}
