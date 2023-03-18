import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

loginForm !: FormGroup;
  constructor(private _fb:FormBuilder , private _http:HttpClient , private _router:Router){}

  ngOnInit(){
    this.loginForm=this._fb.group({
      email:[''],
      password:['']
    })
  }

  login(){
    this._http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      debugger;
      const user= res.find((a:any)=>{
        console.log("qqqq",a)
        return a.email===this.loginForm.value.email &&
      a.password===this.loginForm.value.password
      })
      if(user){
      alert(" User login successful")
      this.loginForm.reset();
      this._router.navigate(['/products'])
      } else {
        alert("user not found")
      }
    })
  }
}
