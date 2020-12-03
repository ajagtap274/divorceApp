import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardAuthService } from '../service/hard-auth.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor(
    private hardAuth:HardAuthService, private router:Router
  ) { }

  ngOnInit(): void {
    if(!this.hardAuth.isUserLoggedIn())
    {
      this.router.navigate(['login']);
    }
  }

}
