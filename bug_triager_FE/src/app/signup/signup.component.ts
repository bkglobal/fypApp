import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from '../services/validation/validation.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(private validationService: ValidationService) {}
    name: any;
    email: any;
    password: any;
    confirmPassword: any;
    role: any;
    message: any = '';

    ngOnInit() {}

    async register() {
        let data = {
            name: this.name,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
            role: this.role
        };
        let authenticate = await this.validationService.validateRegister(data);
        if(authenticate.status) {
            this.message = '';
            
        } else {
            this.message = authenticate.message;
        }
    }


    public closeAlert(alert: any) {
        this.message = '';
    }

}
