import { Component } from '@angular/core';
import { NavTasksyncComponent } from './components/nav-tasksync/nav-tasksync.component';
import { HeroComponent } from './components/hero/hero.component';
@Component({
  selector: 'app-start',
  imports: [ NavTasksyncComponent, HeroComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {

  

}


