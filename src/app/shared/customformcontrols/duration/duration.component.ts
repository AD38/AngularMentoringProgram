import { forwardRef } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-duration',
  template: `<mat-form-field>
      <input #durationField="ngModel" type="text" [ngModel]="duration"
        name="duration" matInput (ngModelChange)="onChange($event)" matInput required placeholder="Duration">
      <mat-error *ngIf="durationField.errors?.required">Field is required</mat-error>
    </mat-form-field>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DurationComponent),
      multi: true
    }
  ]
})
export class DurationComponent implements ControlValueAccessor, Validator {
  @Input()
  public duration: number;

  public onChange = (value: any) => { };
  private onTouched = () => { };

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    if (!control.value) {
      return { required: true };
    }

    if (isNaN(control.value)) {
      return { invalidFormat: true };
    }

    return null;
  }

  writeValue(obj: any): void {
    if  (!obj) {
      return;
    }

    this.duration = +obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
