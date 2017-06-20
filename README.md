# Hello

이 repo는 Angular 스터디를 위한 repo입니다.

[Angular CLI](https://github.com/angular/angular-cli) version 1.1.1. 을 사용했습니다.

## 설치

Angular CLI를 설치하기 위해서는 node 6.9.0 이상 버전과 npm 3 이상의 버전이 필요합니다.
`node -v`와 `npm -v`로 버전을 확인하신 후에 설치하시기 바랍니다.

node와 npm의 버전이 요건에 충족된다면 다음의 명령어로 Angular CLI를 설치합니다.

`npm install -g @angular/cli`

설치가 끝나면 `ng version`으로 설치가 잘 되었는지 버전을 확인할 수 있습니다.

## 구조

- src/app/app.component.{ts, html, css, spec.ts} : 컴포넌트를 구성하는 AppComponent, HTML 템플릿, CSS, 유닛테스트 파일. 컴포넌트 트리에서 루트 컴포넌트 역할을 담당.
- src/app/app.module.ts : Angular 구성요소를 등록하는 루트 모듈 AppModule.
- assets/* : 이미지 등과 같은 정적 파일을 위한 폴더. 프로젝트 생성 시 빈 폴더입니다.
- environments/* : 프로젝트 빌드 시에 사용될 프로덕션 또는 개발 환경 설정 파일.
- e2e/ : e2e(end-to-end) 테스트 관련 파일
- node_modules/ : 의존 모듈 저장소. 패키지 매니저에 의해 package.json에 등록된 의존 모듈이 설치되는 장소
- .editorconfig : 코드 에디터 기본 설정 파일 ([참고](http://editorconfig.org))
- .gitignore : Git 소스 관리 제외 대상을 위한 설정 파일
- karma.conf.js : [Karma test runner](https://karma-runner.github.io/1.0/index.html) 를 위한 유닛 테스트 설정 파일. <b>ng test</b> 명령어 실행 시 참조됨.
- package.json : 의존 모듈 관리를 위해 패키지 매니저가 사용하는 모듈 관리 파일
- protractor.conf.js : e2e 테스트를 위해 [Protractor](http://www.protractortest.org/#/)가 사용하는 설정 파일. ng e2e 명령어 실행시 참조됨.
- tsconfig.json : TypeScript 컴파일 옵션 설정 파일
- tslint.json : TSLint가 사용하는 linting(구문체크 설정 파일). <b>ng lint</b> 명령어 실행 시 참조됨.

## Angular 핵심 구성 요소

- Component
<br>컴포넌트는 템플릿과 메타데이터, 컴포넌트 클래스로 구성되며 데이터 바인딩에 의해 연결됩니다.
컴포넌트는 화면을 구성하는 뷰(View)를 생성하고 관리하는 것이 주된 역할이며 화면은 1개 이상의 컴포넌트를 조립하여 구성합니다.
- Directive
<br>템플릿 내에서 HTML 요소 또는 HTML 요소의 속성과 유사하게 사용되며 DOM의 표현이나 구조를 변경할 수도 있고 로직을 가질 수도 있습니다.
컴포넌트와의 차이는 뷰(템플릿)를 소유하지 않는다는 것입니다. 디렉티브는 구조 디렉티브(Structural directive)와 속성 디렉티브(Attribute directive), 커스텀 디렉티브(Custom directive)로 구분할 수 있습니다.
- Service
<br>다양한 목적의 애플리케이션 공통 로직을 담당한다. 컴포넌트에서 애플리케이션 전역 관심사를 분리하기 위해 사용하며 의존성 주입(Dependency Injection)이 가능한 클래스로 작성됩니다.
- Router
<br>컴포넌트를 교체하는 방법으로 뷰를 전환하여 회면 간 이동을 구현합니다.
- Module
<br>관련된 구성 요소를 하나로 묶어 애플리케이션을 구성하는 하나의 단위로 만드는 역할을 합니다. 컴포넌트, 디렉티브, 서비스 등의 Angular의 구성요소는 모듈에 등록되어야 사용할 수 있습니다.

Angular는 컴포넌트를 중심으로 Angular 구성요소를 조합하여 애플리케이션을 구축합니다. 뷰를 담당하는 컴포넌트를 중심으로 화면을 구성하고 디렉티브와 서비스를 사용하여 애플리케이션 전역 관심사를 분리하고 컴포넌트는 필요 시 디렉티브와 서비스를 사용합니다.
라우터는 컴포넌트를 교체하는 방법으로 뷰를 전환하여 화면 간 이동을 구현하고 모듈은 관련된 구성 요소를 하나로 묶어 애플리케이션을 구성하는 하나의 단위로 만드는 역할을 합니다.

## 컴포넌트 추가

터미널에 다음의 명령어로 컴포넌트를 추가할 수 있습니다.

`ng generate component 컴포넌트이름`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
