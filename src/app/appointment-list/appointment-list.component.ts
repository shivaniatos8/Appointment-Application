import { Component } from '@angular/core';
import { Appointment ,Books} from '../models/appointment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
 
  newAppointmentTitle:string="";
  newAppointmentDate :Date = new Date();
  appointments : Appointment[] = [];

  newBookTitle:string="";
  books : Books[] = [];

  ngOnInit(): void {
   let savedAppointments = localStorage.getItem("appointments");
   this.appointments = savedAppointments ? JSON.parse(savedAppointments): [];

   let savedBooks = localStorage.getItem("Books");
   this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  addAppointement(){
     if(this.newAppointmentTitle.trim().length &&  this.newAppointmentDate){
      let newAppointment : Appointment ={
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate

      }
      this.appointments.push(newAppointment)

      this.newAppointmentTitle = "";
      this.newAppointmentDate  = new Date();

      localStorage.setItem("appointments",JSON.stringify(this.appointments))
     }

  }

  deleteAppointment(index:number){
   this.appointments.splice(index,1);
   localStorage.setItem("appointments",JSON.stringify(this.appointments))


  }

  addBooks(){
    let newBooks : Books ={
      id: Date.now(),
      title: this.newBookTitle,
    }

    this.books.push(newBooks);

    this.newBookTitle = "";

    localStorage.setItem("Books",JSON.stringify(this.books))
  }

deleteBook(index:number){

  this.books.splice(index,1);
  localStorage.setItem("books",JSON.stringify(this.books))

}
}
