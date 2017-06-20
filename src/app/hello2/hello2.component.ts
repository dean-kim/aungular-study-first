import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello2',
  templateUrl: './hello2.component.html',
  styleUrls: ['./hello2.component.css']
})
export class Hello2Component {
  name = 'Dean.Kim';
  age = '36';
  admin = true;
  address = {
    city: 'Seoul',
    country: 'Korea'
  };

  sayHi() {
    return `Hi! my name is ${ this.name }.`;
  }

  name1 = 'KEUNU';
  contents = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  imageUrl = 'http://lorempixel.com/400/200';
  isDisabled = true;
}
