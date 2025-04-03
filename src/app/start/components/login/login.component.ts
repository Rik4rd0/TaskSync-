import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  imports: [FontAwesomeModule,] ,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  faSignInAlt = faSignInAlt; 

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

     




}
