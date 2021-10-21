import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData:Array<User> = [];
  constructor(private http:HttpClient) { }

  saveUser(user:User){
    return this.http.post(`https://studmgmt.herokuapp.com/usercreate`,user)
  }

  getAllUser(){
    return this.http.get<Array<User>>(`https://studmgmt.herokuapp.com/userlist`)
  }

  getUserByID(id:number){
    return this.http.get<User>(`https://studmgmt.herokuapp.com/useredit/${id}`)
  }

  updateUserById(userId:number,userdata:User){
    return this.http.post(`https://studmgmt.herokuapp.com/useredit/${userId}`,userdata)
  }

  deleteUserById(id:number){
    return this.http.post(`https://studmgmt.herokuapp.com/userdelete/${id}`,"")
  }
}