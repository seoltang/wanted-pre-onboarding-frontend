# TO DO 🪄

> [http://nice-to-do-you.s3-website.ap-northeast-2.amazonaws.com](http://nice-to-do-you.s3-website.ap-northeast-2.amazonaws.com)
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

- 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동 및 로그인 API로 응답받은 JWT는 로컬 스토리지에 저장

- 로그인 여부에 따른 리다이렉트 처리
  - 로컬 스토리지에 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속하면 `/todo` 경로로 리다이렉트
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속하면 `/signin` 경로로 리다이렉트

### TODO LIST

- TODO 조회/추가/수정/삭제 기능

## ⚙️ CI/CD

- 배포: `AWS S3`
- 배포 링크: [http://nice-to-do-you.s3-website.ap-northeast-2.amazonaws.com](http://nice-to-do-you.s3-website.ap-northeast-2.amazonaws.com)
- CI/CD: `GitHub Actions`