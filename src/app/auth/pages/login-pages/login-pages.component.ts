import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'app-login-pages',
  imports: [ LoginFormComponent],
  templateUrl: './login-pages.component.html',
  styleUrl: './login-pages.component.scss'
})
export class LoginPagesComponent {

}
