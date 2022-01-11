import { Component } from "@angular/core";
import { STUDENTLIST  } from "../studentsLlist";


@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent {

  student = STUDENTLIST;
  // Значение для подсветци двоишников
  valueRed: boolean = true ;
  input: string = "";

  // constructor() { }

    redAlert(): void{
    this.valueRed = !this.valueRed;
  }

}
