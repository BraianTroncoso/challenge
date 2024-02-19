import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management-panel-component',
  templateUrl: './user-management-panel-component.component.html',
  styleUrl: './user-management-panel-component.component.scss'
})
export class UserManagementPanelComponentComponent {
  userArray : any[] = [];
 
  first_name: string ="";
  last_name: string ="";
  address: string ="";
  phone: number | undefined = undefined;
  editingMode: number = 0;
  currentUserId = "";
 
  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router)
  {

  }
  
  ngOnInit() {
    // Retrieves user data from the route parameters
    const userData = history.state.data;
    if(userData){
      // Assigns the user data to the component variables
      this.first_name = userData.first_name;
      this.last_name = userData.last_name;
      this.address = userData.address;
      this.phone = userData.phone;
      this.currentUserId = userData.id;
      this.editingMode = 1;
    }else{
      console.log('ERROR RECEIVING DATA')
    }
  }
  validations(){
  // Validate the data before sending the request
  if (!this.first_name || !this.last_name || !this.address || !this.phone) {
        
    this._snackBar.open('Please fill out all fields', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
    });
    return; // Stop execution if there are missing fields
}

const phoneString = this.phone.toString(); 

if (this.first_name.length < 2 || this.last_name.length < 2 || this.address.length < 5 || phoneString.length < 10 ){
  this._snackBar.open('The data entered are not valid, please try again', 'Close', {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top'
});
    this.clearFieldsUser();
    return; // Stop execution if there are missing fields
}
  }
clearFieldsUser(){
   // Clear fields after successful saving
   this.first_name = '';
   this.last_name = '';
   this.address = '';
   this.phone = undefined;
}

  saveUser() {
    this.validations();
    // Create the body of data for the request
    let bodyData = {
        "first_name": this.first_name,
        "last_name": this.last_name,
        "address": this.address,
        "phone": this.phone
    };

    this.http.post("http://127.0.0.1:8000/user", bodyData).subscribe((resultData: any) => {
        console.log(resultData);
        this._snackBar.open('User Registered Successfully', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
        });
        // Clear fields after successful saving
        this.clearFieldsUser();
    });
}

  
  updateUser(){
    this.validations();
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

        this.clearFieldsUser();
        this.router.navigate(['/users'])
    });
  }

}
