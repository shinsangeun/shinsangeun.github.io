---
title: "[Node.js] 화살표 함수(Arrow Function)와 일반 함수의 차이"
date: 2021-01-28 18:15:31
layout: post
permalink: '/categories/Nodejs/arrow-function'
categories: Nodejs
tags: Nodejs Javascript ES6 ArrowFunction
---

안녕하세요!

이번 포스팅 에서는 `Javascript` 사용 되는 함수 선언에 대해 알아보도록 하겠습니다.   
그 중 에서도, `ES6` 버전에 새로 추가된 `화살표 함수(Arrow Function)`과 기존의 `일반 함수(Function)` 에 대한 차이점을 알아 보도록 하겠습니다!😄 

-----


### 화살표 함수(Arrow Function).
- 화살표 함수는 function 키워드 대신 화살표(=>)를 사용하여 간략한 방법으로 함수를 선언 할 수 있습니다.
- 하지만 모든 경우 화살표 함수를 사용할 수 있는 것은 아닙니다.


#### 1. 화살표 함수 선언
```javascript
// 1. 매개변수 지정 방법
() => { ... }       // 매개변수가 없을 경우
x => { ... }        // 매개변수가 한 개인 경우, 소괄호를 생략할 수 있다.
(x, y) => { ... }   // 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.

// 함수 몸체 지정 방법
x => { return x * x }   // single line block
x => x * x              // 함수 몸체가 한줄의 구문이라면 중괄호를 생략할 수 있으며 암묵적으로 return된다. 위 표현과 동일하다.

() => { return { a: 1 }; }
() => ({ a: 1 })        // 위 표현과 동일하다. 객체 반환시 소괄호를 사용한다.

() => {                 // multi line block.
  const x = 10;
  return x * x;
};
```


#### 2. 화살표 함수 호출
- 화살표 함수는 익명 함수로만 사용할 수 있습니다. 따라서 화살표 함수를 호출하기 위해서는 함수 표현식을 사용합니다.

- ES5 버전
```javascript
var pow = function (x) { return x * x; };
console.log(pow(10)); // 100
```

- ES6 버전
```javascript
const pow = x => x * x;
console.log(pow(10)); // 100
```

- 또는, 콜백 함수로 사용할 수 있습니다. 이 경우 일반적인 함수 표현식 보다 간결합니다.

- ES5 버전
```javascript
var arr = [1, 2, 3];
var pow = arr.map(function (x) { // x는 요소값
  return x * x;
});

console.log(pow); // [ 1, 4, 9 ]
```

- ES6 버전
```javascript
const arr = [1, 2, 3];
const pow = arr.map(x => x * x);

console.log(pow); // [ 1, 4, 9 ]
```


### 차이점.
- 일반 함수와 화살표 함수의 차이점은 아래와 같습니다.

#### 1. this
- 일반 함수와 화살표 함수의 가장 큰 차이점은 this 입니다.
- 화살표 함수와 일반 함수는 this가 다른 곳을 가리킵니다.
- 화살표 함수의 this는 바로 **상위 스코프의 this**와 같습니다. 
- 일반 함수는 this가 **동적으로 바인딩** 됩니다. 일반 함수의 this는 `내부 함수, 콜백 함수: 전역 객체`, `객체의 메소드`, `생성자 함수` 입니다.

#### 2. 생성자 함수로 사용 가능 여부
- 일반 함수는 생성자 함수로 사용할 수 있지만, 화살표 함수는 생성자 함수로 사용할 수 없습니다.
- 화살표 함수는 prototype 프로퍼티를 가지고 있지 않기 때문 입니다.

#### 3. arguments 사용 가능 여부
- 일반 함수 에서는 함수가 실행 될때 암묵적으로 arguments 변수가 전달되어 사용할 수 있습니다.
- 화살표 함수에서는 arguments 변수가 전달되지 않습니다.


### Reference.
- [👉🏻화살표 함수](https://poiemaweb.com/es6-arrow-function)
- [👉🏻함수 호출 방식에 의해 결정되는 this](https://poiemaweb.com/js-this)

-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️✨    
