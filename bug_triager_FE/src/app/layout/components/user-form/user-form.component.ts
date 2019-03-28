import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  name: any;
  email: any;
  role: any;
  number: any;
  date: any;
  constructor() { }

  ngOnInit() {
  }

  values_validate_add() {
    console.log(this.name, this.date, this.email, this.number, this.role);
  }

}
