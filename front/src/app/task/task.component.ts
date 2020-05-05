import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskService} from "../service/task.service";
import {MatSnackBar} from "@angular/material";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public tasks = [];
  taskTitle: String;
  updateTaskId:number;

  updatedTaskTitle:String;

  @Output() progress = new EventEmitter<boolean>();
  edit=false;



  constructor(private taskService: TaskService,
              private snack: MatSnackBar) {
  }

  ngOnInit() {
    this.getTasks();

  }

  getTasks() {

    this.taskService.getTasks()
      .subscribe(res => this.tasks=res,
        err=>{
          this.snack.open('Unknown error Occurred!', 'Dismiss', {
            duration: 3000
          });
        });

  }

  check(){
    console.log(this.tasks);
  }

  saveTask() {
    console.log(this.taskTitle);

    this.taskService.saveTask(this.taskTitle).subscribe(res => {
        this.snack.open('New Task added!', 'Dismiss', {
          duration: 3000
        });
        this.getTasks();
        this.taskTitle = '';

      },
      err => {
        console.log(err);
        this.snack.open('Unknown error Occurred!', 'Dismiss', {
          duration: 3000
        });
      })
  }

  deleteTask(id) {

    console.log(id);
    this.taskService.deleteTask(id).subscribe(res => {
        console.log(res);
        this.snack.open('Task Deleted', 'Dismiss', {
          duration: 3000
        });
        this.getTasks();

      },
      err => {
        this.snack.open('Something went wrong', 'Dismiss', {
          duration: 3000
        });
      })
  }

  editTask(id,title){
    console.log(id);
    this.edit=true;
    this.updateTaskId=id;
    this.updatedTaskTitle=title;
    console.log(this.updateTaskId);
  }

  updateTaskTitle(id){
    this.taskService.updateTask(this.updatedTaskTitle,id).subscribe(res=>{
      this.snack.open('Task Updated', 'Dismiss', {
        duration: 3000
      });
      this.getTasks();
      this.closeUpdatePanel();
    },err=>{
      this.snack.open('Something went wrong', 'Dismiss', {
        duration: 3000
      });
    })
  }

  completeTask(id){
    this.taskService.completeTask(true,id).subscribe(res=>{
      this.snack.open('Marked as Completed!','Dismiss',{
        duration:3000
      });
      this.getTasks();
    },err=>{
      this.snack.open('Something went wrong', 'Dismiss', {
        duration: 3000
      });
    })
  }

  closeUpdatePanel(){
    this.updateTaskId=-1;
  }

}
