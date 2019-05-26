import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }


  async validateRegister(data) {
    console.log(data);
    if (!(data.name == undefined || data.email == undefined || data.password == undefined || data.confirmPassword == undefined || data.role == undefined)) {
      if(data.password == data.confirmPassword) {
        console.log('password correct');
        return {status: true};
      } else {
        console.log('password incorrect');
        return {status : false , message: 'Password is incorrect.'};
      }
    } else {
      return {status : false , message: 'Please Fill all the Fields.'};
    }
  }
}
