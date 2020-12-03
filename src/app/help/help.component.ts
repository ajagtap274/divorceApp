import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardAuthService } from '../service/hard-auth.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(
    private router:Router, private hardAuth:HardAuthService
  ) { }

  ngOnInit(): void {
    if(!this.hardAuth.isUserLoggedIn())
    {
      this.router.navigate(['login']);
    }
  }

}
