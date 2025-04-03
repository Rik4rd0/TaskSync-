import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-tasksync',
  standalone: true,
  imports: [LoginComponent, RouterOutlet],
  templateUrl: './nav-tasksync.component.html',
  styleUrl: './nav-tasksync.component.scss'
})
export class NavTasksyncComponent {
  title = 'prueba';


constructor(private router: Router) {

}
navigateToStrart(){
  this.router.navigate(['/start']);
  
}



}
