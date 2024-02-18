import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registered-users-panel-component',
  templateUrl: './registered-users-panel-component.component.html',
  styleUrl: './registered-users-panel-component.component.scss'
})
export class RegisteredUsersPanelComponentComponent {
  userArray : any[] = [];
 
  first_name: string ="";
  last_name: string ="";
  address: string ="";
  phone: number | undefined = undefined;
  currentUserId = "";
 
  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router)
  {
    this.getAllUsers();

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
   console.log(data);
    if (data) {
   this.first_name = data.first_name;
   this.last_name = data.last_name;
   this.address = data.address;
   this.phone = data.phone;
   this.currentUserId = data.id;
   this.router.navigate(['/add-user'], { state: { data: data } });
   console.log(data);
  }else {
    console.log('ERROR AL EDITAR')
  }
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
        this._snackBar.open('User Updated Successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });

        this.first_name = '';
        this.last_name = '';
        this.address = '';
        this.phone  = undefined;
    });
  }


  deleteUser(data: any){
    this.http.delete("http://127.0.0.1:8000/user"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        this._snackBar.open('User Deleted Successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        this.getAllUsers();
    });
 
  }

}

