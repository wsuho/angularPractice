// import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';
// import { HeaderComponent } from './app/header/header.component';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));//스탠드 얼론 이 true일때만 작동함
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);