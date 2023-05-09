# TO DO 🪄

> [https://nicetodoyou.netlify.app](https://nicetodoyou.netlify.app)
> 
> 로그인하고 할 일 목록을 관리할 수 있는 To Do List

## 🕹 실행

```bash
npm install
npm start
```

### API
https://github.com/walking-sunset/selection-task

## 🚀 기능
### 로그인 / 회원가입

- 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사 기능 구현

  - 이메일 조건: `@` 포함
  - 비밀번호 조건: 8자 이상

- 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못한다면 button에 `disabled` 속성 부여

- 회원가입 페이지에서 버튼 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동

- 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동
  - 로그인이 성공했을 시 로그인 API로 응답받은 JWT는 로컬 스토리지에 저장

- 로그인 여부에 따른 리다이렉트 처리
  - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/todo` 경로로 리다이렉트
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/signin` 경로로 리다이렉트

### TODO LIST

- TODO 조회/추가/수정/삭제 기능
