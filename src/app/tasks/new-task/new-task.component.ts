import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NewData } from './new-task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
@Input({required:true})userId!:string;
@Output() close=new EventEmitter<void>();
enteringTitle='';
enteringSummary='';
enteringDate='';
private TaskService =inject(TaskService)

  onCancel(){
this.close.emit();
}
onSubmit(){
this.TaskService.addData({
  title:this.enteringTitle,
  summary:this.enteringSummary,
  date:this.enteringDate
},
this.userId)
}
}
