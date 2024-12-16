import { ValidatorFn } from "@angular/forms";

export function emailValidator(emails: string[]):ValidatorFn{
    const emailsString = emails.join('|');
    const regExp = new RegExp(`[A-Za-z0-9._]{3,}@(${emailsString})`);
    return (control) => {
        console.log(control.value);
        console.log(regExp.test(control.value));
        console.log(regExp);
        const isInvalid = control.value === '' || regExp.test(control.value);
        return isInvalid ? null: {emailValidator: true};
    }
}
