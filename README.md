# Guesung Library


## 폴더 구조
- apps : 애플리케이션
    - blog
- packages : 각 패키지에 필요한 공통 모듈을 정의한다.
    - configs
       - eslint-config
       - prettier-config
       - tailwind-config
       - typescript-config
     - constants : 공통 상수
     - hooks : 공통 훅
     - playground : 각 패키지의 기능을 테스트하기 위한 playground
     - ui : 공통 UI 컴포넌트
     - utils : 공통 유틸리티 함수
- extension : VSC / Chrome 확장 프로그램
    - [snippet-wizard](./extensions/snippet-wizard/README-ko.md)
- support : 프로젝트 지원
   - package-generator
   - project-templates
       - next