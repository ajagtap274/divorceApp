import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardAuthService {

  constructor() { }
  authenticate(username: string,password: string)
  {
    if(username==="Abhishek"&& password==='12345')
    {
      
      sessionStorage.setItem('authenticaterUser',username);
      return true;
    }
    return false;
  }
isUserLoggedIn()
{
  let user=sessionStorage.getItem('authenticaterUser');
  console.log(user);
  if(user===null)
  {
    return false;
  }
  else
  {
  return true;
  }
}
logout()
{
  sessionStorage.removeItem('authenticaterUser');
}
}
