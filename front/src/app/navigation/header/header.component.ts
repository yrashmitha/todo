import {Component, Input, OnInit, Output} from '@angular/core';
import {TaskService} from "../../service/task.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  progress=0;

  constructor() { }

  ngOnInit() {

  }



}
