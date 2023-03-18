import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

 public signUpForm ! : FormGroup;
  constructor(private _fb:FormBuilder ,private _http:HttpClient,private _router: Router ){}

  ngOnInit(){
this.signUpForm= this._fb.group({
  firstName:[''],
  lastName:[''],
  email:[''],
  mobile:[''],
  password:['']
})
  }

  signUp(){
    this._http.post<any>("http://localhost:3000/signupUsers" , this.signUpForm.value)
    .subscribe(res=>{
      alert("User register successful !!")
      this.signUpForm.reset();
      this._router.navigate(['/login'])
    })
  }
}
