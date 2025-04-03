import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonstartComponent } from "../buttonstart/buttonstart.component";



@Component({
  selector: 'app-hero',
  imports: [ButtonstartComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
