import { Component, Inject } from "@angular/core";
import { StudentsServiceService } from "../students-service.service";
// import { STUDENTLIST  } from "../studentsLlist";


@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent {

  student;
  // Значение для подсветци двоишников
  valueRed: boolean = true ;
  input: string = "";

  constructor(@Inject(StudentsServiceService)public studentService: StudentsServiceService){
    this.student = studentService.getStudents();
  }

    redAlert(): void{
    this.valueRed = !this.valueRed;
  }




}
