import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './sharedUi/shared.module';
import { TaskService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TaskService],
  imports: [BrowserModule, SharedModule, TasksModule], //imports는 stand alone component용
  //imports는 stand alone component용
  //imports는 stand alone component용
})
export class AppModule {}
