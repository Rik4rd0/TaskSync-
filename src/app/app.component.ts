import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corregido de styleUrl a styleUrls
})
export class AppComponent {
  title = 'Tasksync-';

  constructor(private router: Router) {} // Movido dentro de la clase correctamente

  navigateToDashboard() {
    this.router.navigate(['/dashboard']); // Corregido de navegate a navigate
  }
}
