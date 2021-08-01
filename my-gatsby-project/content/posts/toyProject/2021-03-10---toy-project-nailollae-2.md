---
title: "[Project] NailOllae - 개발 항목 정리"
date: "2021-03-11 20:30:22"
template: "post"
draft: false
slug: "nailollae-2"
category: "Project"
tags:
  - "Toy-project"
  - "NailOllae"
  - "Nodejs"
description: "이번 포스팅 에서는 오랜만에 토이 프로젝트 `NailOllae`을 진행하며 개발한 항목과 내용에 대해 기록 하고자 합니다."
---

안녕하세요!

이번 포스팅 에서는 오랜만에 토이 프로젝트 `NailOllae`을 진행하며 개발한 항목과 내용에 대해 기록 하고자 합니다.  
`NailOllae` 프로젝트의 개요는 [👉🏻이 포스팅](https://shinsangeun.github.io/categories/Project/nailollae-1) 을 참고해 주세요!  
[👉🏻 네일올래?](https://github.com/shinsangeun/Nail-Ollae) Github Repository 입니다. 소스 코드는 이 링크를 참고해 주세요!👩🏻‍💻

---
## 1. 주요 개발 스펙
```
1. Server: Node.js (v12.13.0)
2. DB: Mysql (v8.0.22)
```
- **Node.js**를 이용해서 개발을 하였고, **Mysql**과 연동하여 `예약 페이지`, `후기 작성 게시판`, `마이 페이지`를 만들었습니다.
- 개발 툴은 **Intelli J**와 [**Sequel Pro**](https://shinsangeun.github.io/categories/Database/install-sequel) 을 사용 하였습니다.
- HTML 화면 템플릿은 [👉🏻여기](https://html5up.net/) 에 있는 **Editorial** 템플릿으로 가져왔습니다. 이 사이트에 여러 가지 다양한 무료 HTML 템플릿이 있으니 필요하신 분들은 참고 하세요!


## 2. 구현 기능
- Home
    - 네일올래? 소개 및 후기 화면
- Login
    - 네이버, 카카오 연동 로그인 페이지 
- Reservation
    - 네일올래? 의 예약 페이지
- Review
    - 네일올래? 의 예약 리뷰 페이지(CRUD)    
- My page
    - 적립금, 예약 현황 조회
 
 
## 3. TODO 기능
- Home
    - 후기 HTML 수정 필요
- Login
    - 네이버 로그인 연동 수정 필요
- Review
    - 로그인 체크 후 수정/삭제 하는 로직 수정 필요
- My page
    - 로그인 체크 후 해당 유저의 정보 조회 수정 필요
- Location 
	- 네일 아트 위치 필요(사진)
- Q&A
	- 관리자 에게 문의 할수 있는 게시판
- Admin Page 
    - 이달의 아트 관리 게시판
    - Q&A 답글 관련 게시판
    

## 4. 구현 화면
- 아래는 현재까지 개발된 구현 화면 입니다.

#### 4-1. Home
![home](static/images/toyProject/home.png)

#### 4-2. Login
![login](static/images/toyProject/login.png)

#### 4-3. Reservation
![reservation](static/images/toyProject/reservation.png)

#### 4-4. Review
![review](static/images/toyProject/review.png)

#### 4-5. Review 작성
![review_write](static/images/toyProject/review_write.png)

#### 4-6. My page
![mypage](static/images/toyProject/mypage.png)


## 5. 마치며
- 아직 추가 해야 할 기능 들이 많이 있지만, 여태 까지 개발한 기능과 개선이 필요한 기능에 대해 정리해 보고자 포스팅을 작성 하게 되었습니다.
- 혼자서 토이 프로 젝트를 하니까 직접 `기획`, `개발`을 해볼 수 있다는 점이 좋은 것 같습니다. **네일 올래?** 프로젝트가 완성이 되면 다시 토이 프로젝트 포스팅 으로 돌아 오겠습니다!😊
- 혹시...이 포스팅을 읽고 나서, **수정**이나 **추가 사항**이 필요할 것 같은 부분이 있다면 <U>댓글로 남겨 주시면 너무 좋을 것 같아요!👍🏻</U> 

-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!👩🏻‍💻💕



