import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-buttonstart',
  imports: [FontAwesomeModule],
  templateUrl: './buttonstart.component.html',
  styleUrl: './buttonstart.component.scss'
})
export class ButtonstartComponent {
  faRocket = faRocket; // Asigna el ícono a una variable

}
