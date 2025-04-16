import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./tasks/task/task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { CardComponent } from "./sharedUi/card/card.component";
import { TaskService } from "./tasks/tasks.service";
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations:[AppComponent,UserComponent,TaskComponent,TasksComponent,NewTaskComponent,HeaderComponent, CardComponent],
    bootstrap:[AppComponent],
    providers:[TaskService],
    imports: [BrowserModule, FormsModule] //imports는 stand alone component용
 //imports는 stand alone component용
//imports는 stand alone component용
})
export class AppModule {} 