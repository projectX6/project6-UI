import { AbstractControl, ValidatorFn} from "@angular/forms";

export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if(confirmPassword.value) {
        if (password.pristine || confirmPassword.pristine) {
            return null;
        }
        return password && confirmPassword && password.value !== confirmPassword.value ? { 'mismatch': true } : null;
    }
}

export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {

    return (control: AbstractControl): {[key:string]: any} | null => {
        if(control.value) {
            const forbidden = forbiddenName.test(control.value);
           return !forbidden ? {'forbiddenName' : true }: null;
        }
    };
}