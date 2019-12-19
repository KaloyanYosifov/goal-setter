import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-hobby-create',
    templateUrl: './hobby-create.component.html',
    styleUrls: ['./hobby-create.component.scss'],
})
export class HobbyCreateComponent implements OnInit {
    private form: FormGroup;
    private submitted: boolean = false;

    constructor() {
    }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(null, Validators.required),
            hobbies: new FormArray([], Validators.required),
        });

        this.form.valueChanges.subscribe(() => {
            this.submitted = false;
        });
    }

    addAHobby(): void {
        (this.form.get('hobbies') as FormArray).push(new FormControl(null, Validators.required));
    }

    getHobbies(): AbstractControl[] {
        return (this.form.get('hobbies') as FormArray).controls;
    }

    hasHobbies(): boolean {
        return !!(this.form.get('hobbies') as FormArray).length;
    }

    onSubmit(): void {
        this.submitted = true;
    }

    get isFormInvalidAfterSubmit(): boolean {
        return this.form.invalid && this.submitted;
    }

    get getFormValueKeys(): Array {
        return Object.keys(this.form.value);
    }
}
