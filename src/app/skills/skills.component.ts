import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['../app.component.css']})


export class SkillsComponent implements OnInit {
  skills = [
    'Programming with Python',
    'Programming with C++',
    'Programming with C#',
    'Programming with Java',
    'programming with PHP',
    'Frame Works such as Angular and React',
 
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
