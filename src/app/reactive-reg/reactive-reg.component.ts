import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      lstNm: ['', Validators.required],
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
}
