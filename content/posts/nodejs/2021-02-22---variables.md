---
title: "[Node.js] var & let & const 변수의 차이"
date: "2021-02-22-16:22:34"
template: "post"
draft: false
slug: "variables"
category: "Nodejs"
tags:
    - "Nodejs"
    - "Javascript"
description: "이번 포스팅 에서는 `Node.js(Javascript)`의 대표 변수 들에 대해 정리하고 각각의 차이에 대해 알아보도록 하겠습니다."
---

안녕하세요!

이번 포스팅 에서는 `Node.js(Javascript)`의 대표 변수 들에 대해 정리하고 각각의 차이에 대해 알아보도록 하겠습니다.  
Node.js 관련 면접을 준비하시는 분이라면 단골 질문이니 알아두시면 좋을 것 같습니다!😄

-----

### 1. 변수 종류
- 


#### 2. Node.js 단점 
- 이벤트 기반 비동기 방식이기 때문에 서버단 로직이 복잡할 경우 **콜백 함수의 늪**에 빠질수 있음
- 코드를 **순차적으로 실행하는 것이 아니라** 비동기 방식으로 이벤트를 보내고, 응답(이벤트)이 오면 처리하는 방식이기 때문에 java 개발을 하는 방식으로 설계하고 코드를 짜면 문제가 발생할 수 있음
- 단일 스레드(Single thread)이기 때문에 하나의 작업 자체가 많이 걸리는 웹 서비스에는 어울리지 않음
- 게시판 형식과 같이 **가벼운 I/O가 많은 웹 서비스**에 어울림
- 코드가 수행 되어야 에러가 있는지 알 수 있으며, 에러가 발생한 경우 프로세스가 내려가기 때문에 **테스트가 중요**함


#### 3. 어울리는 서비스
- 간단한 로직
- 대용량 서비스 (동시에 여러 request를 처리함)
- 빠른 응답시간이 요구되는 경우
- 빠른 개발이 요구되는 경우
- 비동기 방식에 어울리는 서비스 (ex. 네트워크 스트리밍 서비스, 채팅 서비스 등)


#### 4. 어울리지 않는 서비스
- 단일 처리가 오래 걸리는 경우: 싱글 스레드이기 때문
- 서버 체크 로직이 많은 경우: 비동기 방식 이기 때문에 Callback Hell(콜백 지옥)에 빠지지 않기 위해
- 업무 복잡도/난이도가 높은 경우: 에러가 발생하면 서버가 죽기 때문에 코드 품질이 중요함


-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️✨    