import { Component, OnInit } from '@angular/core';

// Lotie
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-animate-scroll',
  template: `<main lottie [options]="options" (animationCreated)="animationCreated($event)"></main>`,
  styleUrls: ['./animate-scroll.component.css']
})
export class AnimateScrollComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/animations/secuencia-animacion-final.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
