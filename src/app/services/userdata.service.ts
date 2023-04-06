import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() {  }
  users()
    {
      return[
        
        {name:'Welcome', age:28, email:'data@gmail.com'},
        {name:'sam', age:25, email:'data@gmail.com'},
        {name:'peter', age:34, email:'peter@gmail.com'}
      ]
    }
}
