import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewData } from './new-task/new-task.model';
import { TaskService}from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required:true}) userId!: string;
  @Input({required:true}) name!: string; 

  addingTasks = false;

constructor(private taskService: TaskService) {

}

  //  private taskService = new TaskService();
 // @Output() adding = new EventEmitter<void>(); // 버튼 클릭 알림

  

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }
  

  onAddingTask() {
    this.addingTasks=true;
  }
  onCloseAddTask(){
    this.addingTasks=false;
  }
}
