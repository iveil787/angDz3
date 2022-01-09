import { Component, OnInit } from '@angular/core';
import { Student } from '../students ';
import { STUDENTLIST  } from '../studentsLlist';
import { NgForm} from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { InjectSetupWrapper } from '@angular/core/testing';


@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {

allStudent = STUDENTLIST;
  
  myForm : FormGroup;
  constructor(){
      this.myForm = new FormGroup({
            
          "userName": new FormControl("Tom", Validators.required),
          "userEmail": new FormControl("gg@yandex.ru", [
                              Validators.required, 
                              Validators.email 
                          ]),
          "userPhone": new FormControl("1111111111", Validators.pattern("[0-9]{10}"))
      });
  }
    
  newStudent(): void{
    if (this.myForm.valid){
      // const correctDate = this.newFormModel.value.birthDate.split("-").reverse().join(".");
      const newStudent = {
       "id": this.allStudent.length + 1,
       "name": this.myForm.value.fullName.userName,
       "surname":this.myForm.value.fullName.surname,       
       "patronymic": this.myForm.value.fullName.patronymic,
       "dateBirth": this.myForm.value.fullName.patronymic,
       "rating":this.myForm.value.score,
      //  "deleted": false,
      //  "inRange": true
       };
      this.allStudent.push(newStudent);
    }
  }

  submit(){
      console.log(this.allStudent.forEach(function(element) {
        for (let key in element) {
          console.log(element);
        }
      }));
  }

  ngOnInit(): void {
  }

}
