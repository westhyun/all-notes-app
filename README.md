# All-Notes-App

> 간단한 내용을 에디터로 작성해 저장, 수정, 삭제하는 노트 앱

---

## 사용

- ReactJS
- TypeScript
- Redux-toolkit
- react-quill
- Styled Components
- LocalStorage

---

## 목차

- [구현](#구현)
  - 노트 CRUD
  - 노트 작성에 필요한 에디터
  - 노트 검색
  - 라이트 모드 / 다크 모드
  - PWA
  - UI

---

## 구현

### 노트 작성

  <img width="600" alt="노트 작성" src="https://github.com/westhyun/all-notes-app/assets/90893579/0d82d21f-6219-4c13-bf54-cb658f7d7a35">

- 노트 작성시 텍스트 크기 및 굵기 조절, 목록화, 코드 작성, 이미지 삽입 가능하도록 구현

<img width="600" alt="노트 저장" src="https://github.com/westhyun/all-notes-app/assets/90893579/487062b1-97a3-499d-8b5a-c858318fc96b">

### 노트 수정, 저장, 삭제

  <img width="600" alt="이미지삽입:코드" src="https://github.com/westhyun/all-notes-app/assets/90893579/bef034d7-a9a1-4a5e-b546-bde4bdf5aa4c">
  
- 노트 저장은 최신 수정 순으로 정렬
- localstorage 노트 저장 유지

### 노트 검색

  <img width="600" alt="검색" src="https://github.com/westhyun/all-notes-app/assets/90893579/9cd9e4d6-268f-42ff-b37b-ab38543398de">

- 노트 제목, 내용 통합 검색

### 라이트 모드 / 다크 모드

  <img width="600" alt="다크모드" src="https://github.com/westhyun/all-notes-app/assets/90893579/dd9b6a45-d83d-4b05-af2a-dff430e870b7">

- 라이트 모드 및 다크 모드 변환

### PWA

  <img width="600" alt="pwa" src="https://github.com/westhyun/all-notes-app/assets/90893579/fa9e2b34-c8ae-4ab9-ad14-ee210ab015d2">
  <img width="600" src="https://github.com/westhyun/all-notes-app/assets/90893579/6cb317f1-6fa6-409b-a23f-7c69b81c650d">

- PWA 적용으로 PC나 스마트폰에서 앱 형태로 설치 가능
- 인터넷 연결 없이도 한 번 설치한 앱은 사용 가능

<img width="400" alt="pwa다크모드" src="https://github.com/westhyun/all-notes-app/assets/90893579/5af0668a-1b07-4936-9fbc-1407dd2aea3b">
<img width="400" alt="pwa라이트모드" src="https://github.com/westhyun/all-notes-app/assets/90893579/3132412f-1bb2-4769-aaa6-adade83873fd">

- 앱에서도 다크 모드, 라이트 모드 가능 및 웹의 데이터 저장 유지

### UI

<img height="289" alt="반응형" src="https://github.com/westhyun/all-notes-app/assets/90893579/8d1192a2-1a50-409f-82d9-8952bbfd175f">
<img width="400" alt="반응형웹" src="https://github.com/westhyun/all-notes-app/assets/90893579/b64c47bc-d607-45c1-8fda-fea8a1a67667">

- 반응형 적용
