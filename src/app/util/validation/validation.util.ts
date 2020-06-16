import { AbstractControl } from '@angular/forms';

export class ValidationUtil {

    public static requiredNonSpace(control: AbstractControl) {
        let validation = {};
        try {
            if (!control.value.trim()) {
                validation = {
                    requiredNonSpace: {
                        invalid: true
                    }
                };
            }
        } catch (error) {
            validation = {
                requiredNonSpace: {
                    invalid: true
                }
            };
        }
        return validation;
    }

    public static futureDateOnly(control: AbstractControl) {
        let validation = {};
        try {
            if (control.value.trim() && new Date(control.value).getTime() < new Date(new Date().toLocaleDateString()).getTime()) {

                validation = {
                    futureDateOnly: {
                        invalid: true
                    }
                };
            }
        } catch (error) {
            validation = {
                futureDateOnly: {
                    invalid: true
                }
            };
        }
        return validation;
    }
}
