import { Component } from "@angular/core";
import { STUDENTLIST  } from "../studentsLlist";
import { FormGroup, FormControl, Validators, AbstractControl } from "@angular/forms";

export interface ValidationErrors {
  [key: string]: unknown;
  }

@Component({
  selector: "app-students-form",
  templateUrl: "./students-form.component.html",
  styleUrls: ["./students-form.component.css"]
})
export class StudentsFormComponent {

allStudent = STUDENTLIST;

  myForm: FormGroup;
  constructor(){
      this.myForm = new FormGroup({
        userAllName: new FormGroup({
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
      const newStudent = {
       "id": this.allStudent.length + 1,
       "name": this.myForm.value.userAllName.userName,
       "surname":this.myForm.value.userAllName.userSurname,
       "patronymic": this.myForm.value.userAllName.userPatronymic,
       "dateBirth": this.myForm.value.userDateBirth,
       "rating":this.myForm.value.userRating,
      };
      this.allStudent.push(newStudent);
    }
  }
  limitAge(control: AbstractControl): ValidationErrors | null {
    const date = new Date();
    const pastDate = new Date(date.setFullYear(date.getFullYear() - 10));
    const inputDate = new Date(control.value);
    if (inputDate > pastDate) {
      return { "recuiredDate<": pastDate.toLocaleDateString(),
                "inputedDate": inputDate.toLocaleDateString() };
  }
  return null;
  }
}
