// 임포트 영역
// 컴포넌트에 필요한 외부 모듈을 임포트한다.
// Angular 라이브러리 모듈의 경우 @가 붙어있으며 경로를 명시하지 않는다.
// Angular 모듈이 아닌 외부 모듈의 경우 상대 경로를 명시하여야 한다.
// Component는 Angular core 모듈에 정의되어 있다. import 키워드로 Angular core 모듈을 임포느 한다.
import { Component } from '@angular/core';
import { User } from './models/user.model';

// @Component 영역
// @Component 데코레이터에는 메타데이터 객체가 인자로 전달된다.
// 메타데이터는 컴포넌트 생성에 필요한 정보(셀렉터, 템플릿, 스타일 정의 등)를 담고 있는 객체이다.
// 메타데이터의 templateUrl 속성에는 컴포넌트의 뷰를 정의한 html 파일인 템플릿의 상대경로를 설정한다.
// 일반클래스를 컴포넌트화하기 위해서는 @Component 데코레이터를 해당 클래스 바로 앞에서 호출하여 Angular에게 해당 클래스가 일반 클래스가 아니라 컴포넌트 클래스임을 알려야 한다.
// @Component 데코레이터는 자신의 바로 아래에 있는 클래스를 컴포넌트 클래스로 인식한다.
@Component({
  // selector는 컴포넌트의 뷰를 마크업으로 표현할 때 사용하는 이름으로 HTML 요소명과 같이 사용된다.
  // Angular는 다른 애플리케이션의 selector 또는 HTML 요소와 충돌을 방지하기 위해 prefix(접두사)를 추가하여 케밥 표기법(ex: app-hello)으로 명명하도록 권장한다.
  // 기본 prefix는 app이며 .angular-cli.json에서 확인할 수 있다.
  // 프로젝트의 성격에 맞추어 독자적인 접두사를 사용하는 것이 좋다.
  selector: 'app-root',
  // 컴포넌트의 뷰는 template 또는 templateUrl 속성에 정의하며 템플릿이라 부른다.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// 컴포넌트 클래스 영역
// 컴포넌트 뷰를 관리하기 위한 로직을 정의한다.
// @Component 데코레이터는 자신의 바로 아래에 위치한 클래스를 컴포넌트 클래스로 인식한다.
// 컴포넌트 클래스는 컴포넌트의 내부 관심사인 뷰의 관리에 집중해야 하며 애플리케이션 공통 관심사는 서비스로 분리하여야 한다.
export class AppComponent {
  title = 'angular';

  // 자식 컴포넌트와 공유할 상태 정보
  users: User[];

  constructor() {
    this.users = [
      { id: 1, name: 'Lee',  role: 'Administrator' },
      { id: 2, name: 'Baek', role: 'Developer' },
      { id: 3, name: 'Park', role: 'Designer' }
    ];
  }

  // user 추가
  addUser(name: string, role: string): void {
    if (name && role) {
      this.users = [...this.users, { id: this.getLastId() + 1, name, role}];
    }
  }

  // user의 요소 중 가장 큰 id를 반환
  getLastId(): number {
    let lastId = 1;
    this.users.map(({ id }) => id > lastId ? lastId = id : id);
    return lastId;
  }
}
