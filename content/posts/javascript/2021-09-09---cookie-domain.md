---
title: "[Javascript] 같은 도메인 간 쿠키 값 공유하기"
date: "2021-09-09 11:01:10"
template: "post"
draft: false
slug: "cookie-domain"
category: "Javascript"
tags:
- "Javascript"
- "cookie"
- "domain"
description: "이번 포스팅 에서는 같은 도메인 간 쿠키(cookie) 값을 공유하는 방법에 대해 소개해 드리겠습니다."
---

안녕하세요!

이번 포스팅 에서는 같은 도메인 간에 `쿠키(cookie)`🍪 값을 공유하는 방법에 대해 소개해 드리겠습니다.  

🗣 참고: [👉🏻[Web] 쿠키(Cookie)와 세션(Session)](https://shinsangeun.github.io/posts/web/cookie-session) 포스팅에 쿠키와 세션에 대한 내용도 읽어보세요!🙆🏻‍♀️

-----
### 1. 개요
- 예를 들어 `aaa.test.co.kr` 이라는 도메인과 `bbb.test.co.kr` 이라는 도메인이 있어요.
- 맨 앞의 최상위 도메인만 빼고 나머지 주소는 같은 값 이예요. 보통 최상위 도메인은 현업에서는 메뉴나 쓰이는 방식에 따라서 결정 되기 때문에 나머지 2차, 3차 도메인이 같은거는 자주 있는 규칙 입니다.
- `aaa.test.co.kr`에서 쓰던 쿠키 값을 `bbb.test.co.kr`에서 똑같은 값으로 유지하고 사용 할 때도 있으므로 이럴 경우에, 같은 도메인에서 쿠키 값을 공유 하는 방법에 대해 알려 드리겠습니다.


### 2. setCookie 함수
**Javascript**에서 Cookie 값을 사용 할 때 Cookie 값을 얻기 위해서는 **getCookie** 함수, Cookie 값을 저장하기 위해서는 **setCookie** 함수를 사용 합니다.
- 아래에 `setCookie` 함수 기본적인 예제를 보여 드리겠습니다.

```Javascript
function setCookie(cname, cvalue, exdays) {
 const d = new Date();
 d.setTime(d.getTime() + (exdays*24*60*60*1000));
 let expires = "expires="+ d.toUTCString();
 document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
```
- 함수를 호출 할 때는 `setCookie('isOpen', 'true', 1);` 이런 식으로 사용 합니다. 뜻은 <U>'isOpen' 이라는 쿠키가 'true' 값 이고 1일 후에 만료 된다</U> 입니다.


### 3. 적용 방법
위의 기본 방법으로 설정 했을 때 `aaa.test.co.kr` 도메인 값과 `bbb.test.co.kr` 도메인 값에 'isOpen' 이라는 쿠키 값이 각각 저장 되게 됩니다.  
근데 어차피 같은 도메인에서 사용하는 값이고, 쿠키 값이 동일 하게 유지 되어야 하는 거라면, 쿠키 값을 공유하는게 더 좋겠죠?
- 도메인간 공유를 위해 setCookie 함수에 Domain 파라미터를 추가 합니다.

 ```Javascript
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  const domain = "test.co.kr";
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;" + "domain=" + domain + ";";
}
``` 
- 이렇게 setCookie 함수에 Domain을 추가 함으로써, 같은 도메인 간에는 서로 같은 쿠키 값이 유지 되게 됩니다. 만약에 `ccc.test.co.kr` 라는 도메인이 있다면 거기에도 같은 쿠키 값이 공유되게 됩니다. 


### 4. 마치며
- 웹 개발 시에 쿠키 값을 유지하고, 공유 하는 작업은 처음 해봐서 블로그에 적게 되었습니다. 생각보다 간단 하죠?!🤭
- 생각 보다 간단 하지만 구글링하고 삽질하는데 시간이 꽤 오래 걸려서...저 같은 분들에게 도움이 되셨으면 좋겠어요!👍🏻

-----

오늘 준비한 내용은 여기까지 입니다.  

이번 포스팅이 도움이 되셨으면 아래 **좋아요** 버튼과,  
궁금한 점이 있으시다면 언제든지 **댓글**을 달아주세요!🤖✨