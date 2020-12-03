import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardAuthService } from '../service/hard-auth.service';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent implements OnInit {

  constructor(private hardAuth:HardAuthService, private router:Router) { }

  ngOnInit(): void {
    if(!this.hardAuth.isUserLoggedIn())
    {
      this.router.navigate(['login']);
    }
  }

}
