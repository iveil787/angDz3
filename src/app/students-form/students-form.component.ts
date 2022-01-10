import { Component, OnInit } from "@angular/core";
import { Student } from "../students ";
import { STUDENTLIST  } from "../studentsLlist";
import { NgForm } from "@angular/forms";
import { ReactiveFormsModule }   from "@angular/forms";
import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";
import { InjectSetupWrapper } from "@angular/core/testing";


@Component({
  selector: "app-students-form",
  templateUrl: "./students-form.component.html",
  styleUrls: ["./students-form.component.css"]
})
export class StudentsFormComponent implements OnInit {

allStudent = STUDENTLIST;

  myForm: FormGroup;
  constructor(){
      this.myForm = new FormGroup({
        UserAllName: new FormGroup({
          "userName": new FormControl(null, [Validators.required, Validators.pattern("[а-яА-Я a-zA-Z]*")]),
          "userSurname": new FormControl(null, [Validators.required, Validators.pattern("[а-яА-Я a-zA-Z]*")]),
          "userPatronymic": new FormControl(null, [Validators.required, Validators.pattern("[а-яА-Я a-zA-Z]*")]),
        },
        ),
          "userDateBirth": new FormControl(null, [Validators.required, this.limitAge, Validators.pattern("[^а-яА-Я a-zA-Z]*")]),
          "userRating": new FormControl(null, [Validators.required, Validators.maxLength(1), Validators.pattern("[0-5]")]),
      });
  }

  newStudent(): void{
    if (this.myForm.valid){
      // const correctDate = this.newFormModel.value.birthDate.split("-").reverse().join(".");
      const newStudent = {
       "id": this.allStudent.length + 1,
       "name": this.myForm.value.UserAllName.userName,
       "surname":this.myForm.value.UserAllName.userSurname,
       "patronymic": this.myForm.value.UserAllName.userPatronymic,
       "dateBirth": this.myForm.value.userDateBirth,
       "rating":this.myForm.value.userRating,
      //  "deleted": false,
      //  "inRange": true
       };
      this.allStudent.push(newStudent);
    }
  }
  
  limitAge(control: AbstractControl): any {
    const date = new Date();
    const pastDate = new Date(date.setFullYear(date.getFullYear() - 10));
    const inputDate = new Date(control.value);
    if (inputDate > pastDate) {
      return { "recuiredDate<": pastDate.toLocaleDateString(),
                "inputedDate": inputDate.toLocaleDateString() };
  }
  return null;
  }

  ngOnInit(): void {
  }

}
