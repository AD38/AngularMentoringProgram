import { forwardRef } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-date',
  template: `<mat-form-field>
      <input #dateField="ngModel" type="text" [ngModel]="date | date:'MM/dd/yyyy'"
        name="date" matInput (ngModelChange)="onChange($event)" matInput required placeholder="Date">
      <mat-error *ngIf="dateField.errors?.required">Field is required</mat-error>
    </mat-form-field>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateComponent),
      multi: true
    }
  ]
})
export class DateComponent implements ControlValueAccessor, Validator {
  @Input()
  public date: Date;

  public onChange = (value: any) => { };
  private onTouched = () => { };

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    if (!control.value) {
      return { required: true };
    }

    if (control.value && typeof(control.value) === 'string' && !control.value.match(/^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/)) {
      return { invalidFormat: true };
    }

    return null;
  }

  writeValue(obj: any): void {
    this.date = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
