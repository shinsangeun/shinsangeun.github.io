---
title: "[Web] 웹 브라우저 동작 과정"
date: "2021-02-15 01:15:33"
template: "post"
draft: false
slug: "web-process"
category: "Web"
tags:
    - "Web"
    - "process"
description: "이번 포스팅 에서는 웹 개발자 라면 꼭 알아야 할 개념인 `웹 브라우저의 동작 과정`에 대해 알아 보도록 하겠습니다!😄"
---

안녕하세요!

이번 포스팅 에서는 웹 개발자 라면 꼭 알아야 할 개념인 `웹 브라우저의 동작 과정`에 대해 알아 보도록 하겠습니다!😄  
개발자 면접을 볼 때 가끔 질문을 받는 내용이여서 정리하게 되었습니다.📙  

🗣 참고: [👉🏻경력 개발자 면접 질문](https://shinsangeun.github.io/posts/interview/job-Interview) 포스팅도 함께 읽으시면 면접 시 도움이 됩니다!🙆🏻‍♀️

-----

경력직으로 기술 면접을 볼 때 가끔 이러한 질문을 받게 되었습니다.
 
```
Q: 인터넷에 웹 주소를 검색 했을 때 브라우저의 동작 과정에 대해 설명해 보세요.
A: 해당 주소로 요청을 하고, 응답을 받는 과정..입니다...(?)
```

위와 같은 대답은 면접관이 원하는 대답은 아니였겠지요..?😕    
그래서 웹 브라우저의 동작 과정에 대해 찾아 보니 **TCP 통신**, **HTTP 통신** 등 여러가지 핵심 단어를 사용해서 설명하는 것이 면접관이 원하는 대답인 것을 찾게 되었습니다.

### 1. 웹 브라우저 동작 과정
![process](../../../static/assets/images/web/web-process.png)


### 2. 설명
1. ①② 사용자가 웹 브라우저를 통해 찾고 싶은 웹 페이지의 URL 주소를 입력함
2. ③ 사용자가 입력한 URL 주소 중에서 **도메인 네임(domain name) 부분을 DNS 서버에서 검색**함
3. ④ DNS 서버에서 해당 도메인 네임에 **해당하는 IP 주소를 찾아** 사용자가 입력한 URL 정보와 함께 전달함
4. ⑤⑥ 웹 페이지 URL 정보와 전달받은 IP 주소는 **HTTP 프로토콜을 사용하여 HTTP 요청 메시지를 생성**함
5. 생성된 `HTTP 요청 메시지`는 **TCP 프로토콜을 사용하여 인터넷을 거쳐 해당 IP 주소의 컴퓨터로 전송**됨
6. ⑦ 도착한 `HTTP 요청 메시지`는 HTTP 프로토콜을 사용하여 웹 페이지 URL 정보로 변환됨
7. ⑧ 웹 서버는 도착한 웹 페이지 URL 정보에 해당하는 데이터를 검색함
8. ⑨⑩ 검색된 웹 페이지 데이터는 또 다시 **HTTP 프로토콜을 사용**하여 `HTTP 응답 메시지`를 생성함
9. 생성된 `HTTP 응답 메시지`는 **TCP 프로토콜을 사용**하여 인터넷을 거쳐 원래 컴퓨터로 전송됨
10. ⑪ 도착한 `HTTP 응답 메시지`는 **HTTP 프로토콜**을 사용하여 웹 페이지 데이터로 변환됨
11. ⑫ 변환된 웹 페이지 데이터는 웹 브라우저에 의해 출력되어 사용자가 볼 수 있게 됨


### 3. 마치며
- 위의 번호를 다 외워서 줄줄이 설명 하는 것보다는, 그림과 설명을 계속 보면서 내용을 익히면 면접을 볼 때 자연스럽게 자신만의 방식으로 설명 할 수 있을 것 입니다.
- 실제로 저도 계속 보고 익히면서 저만의 방식으로 설명을 해보고 연습해 보니, 면접에서 위의 내용을 쉽게 말할 수 있게 되었습니다.😄

-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️✨    
 