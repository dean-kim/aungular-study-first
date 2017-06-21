import { Component } from '@angular/core';

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

  isLarge = true;
  isRed = true;
  myClasses = 'text-large color-red';

  isActive = false;

  name2 = '';
  onInput(event) {
    console.log(event);
    // event.target.value에는 사용자 입력 텍스트가 담겨있습니다.
    this.name2 = event.target.value;
  }
  onClick() {
    this.name2 = '';
  }

  name3 = '';
  name4 = '';
  name5 = '';
}
