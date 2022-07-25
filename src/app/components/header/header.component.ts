import { Component, OnInit } from '@angular/core';
// import { TASKS } from 'src/app/mock-tasks';
// import { Task } from 'src/app/Task';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  //tasks: Task[] = TASKS;

  constructor() {}

  ngOnInit(): void {}

  toggleAddTask() {
    console.log('toggle');
  }
}
