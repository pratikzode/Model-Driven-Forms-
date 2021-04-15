import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'modeldriven-comp',
  templateUrl: './modeldriven.component.html',
  styleUrls:['./modeldriven.component.css']
  
})
export class ModelDrivenFormComponent {
   //form model
    userForm=new FormGroup({
        fname:new FormControl('Rohit',Validators.required),        
        age:new FormControl(10,[Validators.required,Validators.max(100),Validators.min(1)]),
        city:new FormControl('Pune',Validators.required),
    });
    onFormSubmit():void{
        console.log("Data Submitted = ");
        console.log("Person Name="+this.userForm.controls['fname'].value);
        console.log("Age="+this.userForm.controls['age'].value);
        console.log("City="+this.userForm.controls['city'].value);
    }


    
/*
To validate a particular form control ,we need to get value of that form 
control  by writing  a get method in our class
  */

  get fname():any
{
    return this.userForm.get('fname');

}
get city():any{
    return this.userForm.get('city');
}
get age():any{
    return this.userForm.get('age');
}
    
}
