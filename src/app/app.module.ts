import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Hello2Component } from './hello2/hello2.component';

@NgModule({
  // 모듈에 소속될 구성요소(컴포넌트, 디렉티브, 파이프 리스트
  declarations: [
    AppComponent,
    HelloComponent,
    Hello2Component
  ],
  // 모듈에 소속된 구성요소가 필요로 하는 다른 모듈
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // 모듈에 소속된 구성요소가 사용할 서비스
  providers: [],
  // 최초로 호출될 컴포넌트
  bootstrap: [AppComponent]
})
export class AppModule { }
