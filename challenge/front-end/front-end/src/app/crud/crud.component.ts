import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

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
  phone: number | undefined = undefined;
  editingMode: number = 0;
  currentUserId = "";
 
  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private route: ActivatedRoute)
  {

  }
  
  ngOnInit() {
    // Recupera los datos del usuario de los parámetros de la ruta
    const userData = history.state.data;
    if(userData){
      // Asigna los datos del usuario a las variables del componente
      this.first_name = userData.first_name;
      this.last_name = userData.last_name;
      this.address = userData.address;
      this.phone = userData.phone;
      this.currentUserId = userData.id;
      this.editingMode = 1;
    }else{
      console.log('ERROR AL RECIBIR DATOS')
    }
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
        this._snackBar.open('User Registered Successfully', 'Close', {
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

}
