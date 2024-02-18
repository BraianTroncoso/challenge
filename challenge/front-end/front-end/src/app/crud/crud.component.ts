import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})


export class CrudComponent {
  userArray : any[] = [];
 
  first_name: string ="";
  last_name: string ="";
  address: string ="";
  phone: Number =0;
 
  currentUserId = "";
 
  constructor(private http: HttpClient )
  {
    this.getAllUsers();

  }
 
  saveUser(){
    let bodyData = {
      "first_name" : this.first_name,
      "last_name" : this.last_name,
      "address" : this.address,
      "phone" : this.phone
    };
 
    this.http.post("http://127.0.0.1:8000/user",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Registered Successfully");
        this.getAllUsers();
    });
  }
 
  getAllUsers(){
    this.http.get("http://127.0.0.1:8000/user")
    .subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.userArray = resultData;
    });
  }
 
 
  setUpdate(data: any){
   this.first_name = data.first_name;
   this.last_name = data.last_name;
   this.address = data.address;
   this.phone = data.phone;
   this.currentUserId = data.id;
  }
 
 
 
  updateUser(){
    let bodyData = {
      "first_name" : this.first_name,
      "last_name" : this.last_name,
      "address" : this.address,
      "phone" : this.phone
    };
    
    this.http.put("http://127.0.0.1:8000/user/"+ this.currentUserId , bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Registered Updateddd")
        this.first_name = '';
        this.last_name = '';
        this.address = '';
        this.phone  = 0;
        this.getAllUsers();
    });
  }


  deleteUser(data: any){
    this.http.delete("http://127.0.0.1:8000/user"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Deleted")
        this.getAllUsers();
    });
 
  }


}
