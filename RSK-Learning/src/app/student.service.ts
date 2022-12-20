import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudent(){
    return [
      {"id" : 1 , "name" : "Rama", "course" : "Angular"},
      {"id" : 2 , "name" : "Sita", "course" : "React"},
      {"id" : 3 , "name" : "Laxman", "course" : "Java"},
      {"id" : 4 , "name" : "Ravana", "course" : "Python"}
    ]
  }
  constructor() { }
}
