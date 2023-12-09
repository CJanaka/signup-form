import { FormControl, FormGroup } from "@angular/forms";

export function validateInput(c: FormControl) {
  
  const NIC_PATERN_OLD = /[0-9]{9}[x|X|v|V]$/;
  const NIC_PATERN_NEW = /[0-9]{12}$/;

  return (NIC_PATERN_OLD.test(c.value) || NIC_PATERN_NEW.test(c.value)) ? null : {
    validateInput: {valid: false}
  };
}

export function cardValidator(c: FormControl) {

  const VISA = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const MASTER = /^5[1-5][0-9]{14}$/;
  const DISCOVER = /^6(?:011|5[0-9]{2})[0-9]{12}$/;

  return (VISA.test(c.value) || MASTER.test(c.value) || DISCOVER.test(c.value)) ? null : {
    cardValidator: {valid: false}
  };
}

export function dobValidate(c: FormControl) {

  let sysDate = new Date();//System Date
  let userDate = new Date(c.value);//user input date

  return (sysDate > userDate) ? null : {
    dobValidate: {valid: false}
  };
}