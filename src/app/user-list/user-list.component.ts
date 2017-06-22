import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  // 부모 컴포넌트가 전달한 상태를 접수
  private _users: User[];

  // 역할별 사용자 카운터
  cntAdmin: number;
  cntDeveloper: number;
  cntDesigner: number;

  // 부모 컴포넌트가 전달한 상태를 접수
  @Input()
  set users(users: User[]) {
    if (!users) { return; }

    this.cntAdmin
      = users.filter(({role}) => role === 'Administrator').length;
    this.cntDeveloper
      = users.filter(({role}) => role === 'Developer').length;
    this.cntDesigner
      = users.filter(({role}) => role === 'Designer').length;
    this._users = users;
  }
  get users(): User[] {
    return this._users;
  }

  // 부모 컴포넌트에게 상태를 전달하기 위해 EventEmitter 객체를 생성.
  // EventEmitter 객체는 커스텀 이벤트를 발생시키는 emit() 메서드를 가지고 있음.
  // 사용자 삭제 버튼이 클릭되면 emit() 메서드를 통해 이벤트를 발생시키고 emit() 메서드에 인자를 전달하여 부모 컴포넌트에게 상태를 전달함.
  @Output() remove = new EventEmitter<User>();
}
