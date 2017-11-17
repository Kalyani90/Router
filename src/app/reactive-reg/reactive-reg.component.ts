import { Component, OnInit } from '@angular/core';
import { FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  AsyncValidatorFn,
  AbstractControl,
  ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-reactive-reg',
  templateUrl: './reactive-reg.component.html',
  styleUrls: ['./reactive-reg.component.css']
})
export class ReactiveRegComponent implements OnInit {

  frmGrp: FormGroup;

  constructor(
    private frmBldr: FormBuilder
  ) {
    this.frmGrp = frmBldr.group({
      fstNm: ['', Validators.required],
      lstNm: ['', Validators.required, this.asyncVali],
      eml: ['', Validators.compose([
        // tslint:disable-next-line:quotemark
        Validators.required, Validators.pattern ("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ])]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.frmGrp);
  }
   frstChrVali = (cntrl: AbstractControl): ValidationErrors | null => {
    if (cntrl.value.charAt(0) === 'a' || cntrl.value.charAt(0) === 'A') {
      return null;
    }
    return { err: 'No valid start' };
  }
  asyncVali = (c: AbstractControl): Promise<ValidationErrors | null> => {
    return new Promise((res, rej) => {
      setTimeout(
        () => c.value.charAt(0) === 'a' ? res(null) : res({ err: 'Email taken' }), 1500);
    });
  }
}
