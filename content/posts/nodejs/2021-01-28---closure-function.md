---
title: "[Node.js] 클로저(Closure)란?"
date: "2021-01-28 23:22:33"
template: "post"
draft: false
slug: "closure-function"
category: "Nodejs"
tags:
    - "Nodejs"
    - "Javascript"
    - "Closure"
description: "이번 포스팅 에서는 `Javascript`에서 중요한 개념 중 하나인 클로저(Closure)에 대해 작성해 보겠습니다."
---

안녕하세요!

이번 포스팅 에서는 `Javascript`에서 중요한 개념 중 하나인 **클로저**에 대해 작성해 보겠습니다.  
저도 클로저는 들어보기만 하고 정확한 개념을 다시 짚어 보기 위해 정리 해 보겠습니다!😄

-----
### 1. 클로저(Closure)란?
- 클로저는 함수를 일급 객체로 취급하는 함수형 프로그래밍 언어에서 사용되는 중요한 특성 입니다.
- 클로저는 "함수가 선언 됐을 때의 렉시컬 환경(Lexical environment)" 입니다.


#### 2. 클로저 함수 예제
```javascript
function outerFunc() {
  var x = 10;
  var innerFunc = function () { console.log(x); };
  innerFunc();
}

outerFunc(); // 10
```
- 함수 `outerFunc` 내에서 내부함수 `innerFunc`가 선언 되고 호출 되었습니다. 
- 이때 내부함수 `innerFunc`는 자신을 포함하고 있는 외부함수 `outerFunc`의 변수 x에 접근할 수 있습니다. 이는 함수 `innerFunc`가 함수 `outerFunc`의 내부에 선언되었기 때문 입니다.

```
스코프는 함수를 호출할 때가 아니라 함수를 어디에 선언하였는지에 따라 결정된다. 이를 렉시컬 스코핑(Lexical scoping)라 한다. 
위 예제의 함수 innerFunc는 함수 outerFunc의 내부에서 선언되었기 때문에 함수 innerFunc의 상위 스코프는 함수 outerFunc이다. 
함수 innerFunc가 전역에 선언되었다면 함수 innerFunc의 상위 스코프는 전역 스코프가 된다.
```


### Reference.
- [👉🏻클로저](https://poiemaweb.com/js-closure)

-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️✨    
