import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive] ,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  faSignInAlt = faSignInAlt; 

     




}
