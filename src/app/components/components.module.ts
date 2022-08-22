import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { AnimateScrollComponent } from './animate-scroll/animate-scroll.component';

// Lottie
import { LottieComponent, LottieModule } from 'ngx-lottie';
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    AnimateScrollComponent,
  ],
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  exports: [
    AnimateScrollComponent,
    LottieModule
  ]
})
export class ComponentsModule { }
