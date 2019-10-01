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
      { name: 'brand',   content: 'One Call For It All, KKM, LTD'},
      { name: 'location',   content: 'Denver Colorado'},
      { name: 'keywords', content: 'construction industrial equipment rental, multi quip whisperwatt, indirect fired heater'},
      { name: 'keywords2', contnet: 'generator rentals, heater rentals, generator sales, heater rentals, ground thaw rentals'},
      { name: 'keywords3', contnet: 'diesel fuel sales, gold star family owned, home building rentals, indirect fired diesel heaters'},
      { name: 'keywords4', contnet: 'Generac generator, Generac LED Light Tower, ground thaw sales, diesel fuel delivery'},
      { name: 'description', content: 'equipment rental Denver, Generators, Heaters, Ground Thaw, Light Towers, rentals' }
    ]);

  }

}

