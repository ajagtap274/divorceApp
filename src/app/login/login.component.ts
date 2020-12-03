import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='Abhishek'
  password=''
  errorMsg='Invalid creds!'
  invalidCreds = false;
  constructor( 
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  handleLogin()
  {
    if(this.username=="Abhishek" && this.password=="12345")
    {
      this.invalidCreds=false;
      this.router.navigate(['welcome']);
      console.log('welcome '+this.username);
    }
    else
    {
      this.invalidCreds=true;
      console.log('Invalid Creds!'+this.username);
    }
  }

}
