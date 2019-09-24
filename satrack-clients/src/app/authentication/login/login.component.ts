import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { DataProvider } from 'src/app/Providers/data.provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = new FormControl('', Validators.required);
  public password = new FormControl('', Validators.required);

  constructor(public service:LoginService,public data: DataProvider) { }

  ngOnInit() {
  }
 
  login()
  {
    console.log(this.user.value);
    console.log(this.password.value);
    
    this.service.login(this.user.value,this.password.value).subscribe((response:any) => {
      this.data.user = this.user.value;
    },(e:any) => {  
    });
  }
}
