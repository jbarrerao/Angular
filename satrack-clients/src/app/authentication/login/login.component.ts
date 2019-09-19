import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = new FormControl('', Validators.required);
  public password = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit() {
  }
 
  login()
  {
    console.log(this.user.value);
    console.log(this.password.value);
  }
}
