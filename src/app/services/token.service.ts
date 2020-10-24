import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private  iss =
    {
      login: 'http://127.0.0.1:8000/api/login',
      signup: 'http://127.0.0.1:8000/api/signup'
    };

  constructor() { }

  //handling the token: 1st thru storing it in the local storage thru set method
  handle(token)
  {
    this.set(token);
  }

  handleUser(user){
    localStorage.setItem('user', user);
  }
  handleDepartment(department)
  {
    localStorage.setItem('department', department);
  }
  handleUsername(user){
    localStorage.setItem('username', user);
  }

  handleRoles(roles){
    localStorage.setItem('roles', roles);
  }

  //storing the token to local storage
  set(token)
  {
    localStorage.setItem('token', token);
  }

  //retrieving token from local Storage
  get()
  {
    return localStorage.getItem('token');
  }

  getRoles()
  {
    return localStorage.getItem('roles');
  }
  getUser()
  {
    return localStorage.getItem('user');
  }

  //removing token from local storage
  remove()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('roles');
  }

  isValid()
  {
    const token = this.get();
    //check Champion if there is a token in the local storage
    if(token)
    {
      //  split the token coz we want the payload Mukanya
      const payload = this.payload(token);
      if(payload)
      {
        return  Object.values(this.iss).indexOf(payload.iss) > -1;
      }

    }
    return false;

  }
  //get the token and split it to get the payload
  payload(token)
  {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload)
  {
    return JSON.parse(atob(payload))
  }

  loggedIn()
  {
    return this.isValid();
  }
}
