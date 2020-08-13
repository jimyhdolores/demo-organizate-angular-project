import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
	FormGroup,
	FormBuilder,
	Validators,
	FormControl,
	FormGroupDirective,
	NgForm
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	constructor(private router: Router, private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			user: ['', Validators.required],
			password: ['', { validators: [Validators.required], updateOn: 'change' }]
		});
	}

	login() {
		this.router.navigate(['principal']);
	}
}
