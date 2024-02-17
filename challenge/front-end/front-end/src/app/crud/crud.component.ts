import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  studentForm = new FormGroup({
    name: new FormControl(''),
    address : new FormControl(''),
    fee : new FormControl('')
    
  });
  
  StudentArray : any[] = [];
 
  name: string ="";
  address: string ="";
  fee: Number =0;
 
  currentStudentID = "";
 
  constructor(private http: HttpClient )
  {
    this.getAllStudent();
 
  }
 
  saveRecords()
  {
  
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "fee" : this.fee
    };
 
    this.http.post("http://127.0.0.1:8000/user/",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully");
        this.getAllStudent();
    });
  }
 
 
  getAllStudent()
  {
    this.http.get("http://127.0.0.1:8000/user/")
    .subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.StudentArray = resultData;
    });
  }
 
 
  setUpdate(data: any)
  {
   this.name = data.name;
   this.address = data.address;
   this.fee = data.fee;
   this.currentStudentID = data.id;
   
  }
 
 
 
  UpdateRecords()
  {
    let bodyData = 
    {
      "name" : this.name,
      "address" : this.address,
      "fee" : this.fee
    };
    
    this.http.put("http://127.0.0.1:8000/user/"+ this.currentStudentID , bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Updateddd")
        this.name = '';
        this.address = '';
        this.fee  = 0;
        this.getAllStudent();
    });
  }


  setDelete(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/user/"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deletedddd")
        this.getAllStudent();
    });
 
  }


}