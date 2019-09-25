import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(meta: Meta, title: Title) {

    title.setTitle('One Call For It All | Colorado Construction Equipment Rental Co.');

    meta.addTags([
      { name: 'brand',   content: 'One Call For It All'},
      { name: 'location',   content: 'Castle Rock Colorado'},
      { name: 'keywords', content: 'construction industrial equipment rental, multi quip whisperwatt, indirect fired heater, Generac LED Light Tower, Generac generator'},
      { name: 'description', content: 'equipment rental Denver, Generators, Heaters, Ground Thaw, Light Towers, rentals' }
    ]);

  }

}

