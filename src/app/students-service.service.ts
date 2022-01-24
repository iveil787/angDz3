import { Injectable } from "@angular/core";
import { Student } from "./students ";
import { STUDENTLIST } from "./studentsLlist";


@Injectable({
  providedIn: "root"
})

export class StudentsServiceService {
  students = STUDENTLIST;

  public getStudents(): Student [] {
        return this.students;
  }

  public getStudentById(studentId: number): Student | undefined {
    return this.students.find((student) => studentId === student.id);
   }

  public editStudent(student: Student): void {

    const studentToEdit = this.getStudentById(+student.id);
    if (studentToEdit){
      studentToEdit.name = student.name;
      studentToEdit.surname = student.surname;
      studentToEdit.patronymic = student.patronymic;
      studentToEdit.dateBirth = student.dateBirth;
      studentToEdit.rating = student.rating;
    }
  }
}
