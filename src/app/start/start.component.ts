import { Component } from '@angular/core';
import { NavTasksyncComponent } from './components/nav-tasksync/nav-tasksync.component';
import { HeroComponent } from './components/hero/hero.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start',
  imports: [ NavTasksyncComponent, HeroComponent, CommonModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export default class StartComponent {

  

}


