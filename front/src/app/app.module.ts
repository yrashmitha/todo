import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { TaskComponent } from './task/task.component';
import {TaskService} from "./service/task.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSnackBarModule, MatTooltipModule,
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
