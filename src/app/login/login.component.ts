import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardAuthService } from '../service/hard-auth.service';

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
    private router:Router, private hardAuth:HardAuthService
  ) { }

  ngOnInit(): void {
  }
  handleLogin()
  {
    // if(this.username=="Abhishek" && this.password=="12345")
    // {
    //   this.invalidCreds=false;
    //   this.router.navigate(['welcome/'+this.username]);
    //   console.log('welcome '+this.username);
    // }
    // else
    // {
    //   this.invalidCreds=true;
    //   console.log('Invalid Creds!'+this.username);
    // }

    if(this.hardAuth.authenticate(this.username,this.password))
    {
      this.invalidCreds=false;
      //this.router.navigate(['welcome',this.username]);
       //console.log('welcome '+this.username);
      this.router.navigate(['welcome']);
      sessionStorage.setItem('authenticaterUser',this.username);
      }
    else
    {
      this.invalidCreds=true;
      console.log('Invalid Creds!'+this.username);
    }

  }

}
