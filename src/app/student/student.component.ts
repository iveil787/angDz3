import { Component, OnInit } from "@angular/core";
import { Student } from "../students ";
import { STUDENTLIST  } from "../studentsLlist";


@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {

  student = STUDENTLIST;
  // Значение для подсветци двоишников
  valueRed: boolean = true ;
  input: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  redAlert(){
    this.valueRed = !this.valueRed;
  }

}
