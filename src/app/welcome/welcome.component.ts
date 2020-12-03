import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HardAuthService } from '../service/hard-auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

 // name='';
  constructor(private route:ActivatedRoute, private router:Router, private hardAuth:HardAuthService) { }

  ngOnInit(): void {
    if(!this.hardAuth.isUserLoggedIn())
    {
      this.router.navigate(['login']);
    }

  }

}
