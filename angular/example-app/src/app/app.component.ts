import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componentproperty;
  emailid;
  formdata;
  passwd;

  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("",this.passwordvalidation)
  });
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
       return {"passwd" : true};
    }
 }
  onClickSubmit(data) {
    this.emailid = data.emailid; 
    this.passwd = data.passwd; 
  }
}
