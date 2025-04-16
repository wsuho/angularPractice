import { Component,inject, Input } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../sharedUi/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  // @Output() complete = new EventEmitter<string>();
  private taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
