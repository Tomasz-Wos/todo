import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  taskArray = 
    [{
      taskName: 'Brush teeth',
      isCompleted: false,
      isEditable: false,

    }]

  onSubmit(form: NgForm) {
    console.log(form)
    this.taskArray.push({
      taskName: form.controls["task"].value,
      isCompleted: false,
      isEditable: false
    })
    form.reset()  
  }
  onDelete(index: number) {
    console.log(index)
    this.taskArray.splice(index, 1)
  }
  onSave(index: number, newTask: string) {
    this.taskArray[index].taskName=newTask
    this.taskArray[index].isEditable=false
  }
  onEdit(index: number) {
    this.taskArray[index].isEditable=true
  }

  onChecked(index: number) {
    console.log(this.taskArray)
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted
  }
}
