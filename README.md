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

  <img width="800" alt="노트 작성" src="https://github.com/westhyun/all-notes-app/assets/90893579/eba847da-05c9-43c6-87a4-dbd20eeec53d">

- 노트 작성시 텍스트 크기 및 굵기 조절, 목록화, 코드 작성, 이미지 삽입 가능하도록 구현

<img width="800" alt="이미지삽입:코드" src="https://github.com/westhyun/all-notes-app/assets/90893579/5e89e47f-cdfd-46f1-9f4d-4d9fe4911928">

### 노트 수정, 저장, 삭제

  <img width="800" alt="노트 저장" src="https://github.com/westhyun/all-notes-app/assets/90893579/2de32a8e-959b-4296-ab3a-fffbb2809886">
  
- 노트 저장은 최신 수정 순으로 정렬
- localstorage 노트 저장 유지

### 노트 검색

  <img width="800" alt="검색" src="https://github.com/westhyun/all-notes-app/assets/90893579/f8914b14-e474-47a2-a2e3-5bbfb05eabd0">

- 노트 제목, 내용 통합 검색

### 라이트 모드 / 다크 모드

  <img width="800" alt="다크모드" src="https://github.com/westhyun/all-notes-app/assets/90893579/b85683fb-8cb3-47ca-a49d-5475f1c415a6">

- 라이트 모드 및 다크 모드 변환

### PWA

  <img width="800" alt="pwa" src="https://github.com/westhyun/all-notes-app/assets/90893579/e9b0ead7-d56c-4c25-a480-1d7e9c0dbb4a">
  <img width="800" alt="pwa다운아이콘" src="https://github.com/westhyun/all-notes-app/assets/90893579/7cabe6de-1922-4299-9674-80f40cf68b26">
  <img width="300" alt="IOS" src="https://github.com/westhyun/all-notes-app/assets/90893579/8e0a1584-65ae-4ac0-bba0-fe5df913a55c">

- PWA 적용으로 PC나 스마트폰에서 앱 형태로 설치 가능
- 인터넷 연결 없이도 한 번 설치한 앱은 사용 가능

<img width="800" alt="pwa다크모드" src="https://github.com/westhyun/all-notes-app/assets/90893579/c8e47686-748b-4423-83f7-c40c6ea933ec">
<img width="800" alt="pwa라이트모드" src="https://github.com/westhyun/all-notes-app/assets/90893579/ba6fa9cd-2a8e-47d1-9ade-13ca148bf67b">

- 앱에서도 다크 모드, 라이트 모드 가능 및 웹의 데이터 저장 유지

### UI

<img width="300" alt="반응형" src="https://github.com/westhyun/all-notes-app/assets/90893579/da7910f9-979e-447c-9b80-b1e57a96ea51"><img width="800" alt="반응형웹" src="https://github.com/westhyun/all-notes-app/assets/90893579/ae2d2c4d-8fd1-4818-a803-d98034b37738">

- 반응형 적용
