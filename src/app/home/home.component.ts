import { ChangeDetectionStrategy,Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  cards = [
    {
      "class":`div1`,
      "title":'Shiba Inu',
      "subtitle":`small`,
      "image":`https://material.angular.dev/assets/img/examples/shiba2.jpg`,
      "longText":`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      "class":`div2`,
      "title":'Shiba Inu',
      "subtitle":`small`,
      "image":`https://material.angular.dev/assets/img/examples/shiba2.jpg`,
      "longText":`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      "class":`div3`,
      "title":'Shiba Inu',
      "subtitle":`small`,
      "image":`https://material.angular.dev/assets/img/examples/shiba2.jpg`,
      "longText":`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      "class":`div4`,
      "title":'Shiba Inu',
      "subtitle":`small`,
      "image":`https://material.angular.dev/assets/img/examples/shiba2.jpg`,
      "longText":`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      "class":`div5`,
      "title":'Shiba Inu',
      "subtitle":`small`,
      "image":`https://material.angular.dev/assets/img/examples/shiba2.jpg`,
      "longText":`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      "class":`div6`,
      "title":'Shiba Inu',
      "subtitle":`small`,
      "image":`https://material.angular.dev/assets/img/examples/shiba2.jpg`,
      "longText":`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      "class":`div7`,
      "title":'Shiba Inu',
      "subtitle":`small`,
      "image":`https://material.angular.dev/assets/img/examples/shiba2.jpg`,
      "longText":`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      "class":`div8`,
      "title":'Shiba Inu',
      "subtitle":`small`,
      "image":`https://material.angular.dev/assets/img/examples/shiba2.jpg`,
      "longText":`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      "class":`div9`,
      "title":'Shiba Inu',
      "subtitle":`small`,
      "image":`https://material.angular.dev/assets/img/examples/shiba2.jpg`,
      "longText":`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      "class":`div10`,
      "title":'Shiba Inu',
      "subtitle":`small`,
      "image":`https://material.angular.dev/assets/img/examples/shiba2.jpg`,
      "longText":`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      "class":`div11`,
      "title":'Shiba Inu',
      "subtitle":`small`,
      "image":`https://material.angular.dev/assets/img/examples/shiba2.jpg`,
      "longText":`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
    {
      "class":`div12`,
      "title":'Shiba Inu',
      "subtitle":`small`,
      "image":`https://material.angular.dev/assets/img/examples/shiba2.jpg`,
      "longText":`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    },
  ]
}
