import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm:FormGroup
  constructor(private userService:UserService,private router:Router) {
    this.userForm = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'phoneNumber': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'country': new FormControl('', Validators.required),
      'userDOB': new FormControl('', Validators.required),
      'userSkills': new FormControl('', Validators.required),
      'userState': new FormControl('', Validators.required),
      'userCity': new FormControl('', Validators.required),
      'userAddress': new FormControl('', Validators.required),
      'userZipcode': new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {

  }

  submitUser(){
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.userService.saveUser(this.userForm.value).subscribe(() => {
        this.router.navigate(['/user-list'])
      },() => {
        alert("Something Went Wrong")
      })
      
    }
  }

  

}
