---
title: "[Algorithm] 프로그래머스(Javascript) - 가운데 글자 가져오기"
date: 2021-02-23 16:14:33
layout: post
permalink: '/categories/Algorithm/programmers-4'
categories: Algorithm
tags: Algorithm Javascript
---

안녕하세요!

오늘은 알고리즘 문제 풀이에 대해 포스팅을 하려고 합니다.
문제 출처 사이트는 [👉🏻프로그래머스_가운데 글자 가져오기](https://programmers.co.kr/learn/courses/30/lessons/12903) 입니다.


## 1. 문제
![problem](/assets/images/algorithm/programmers/programmers-4/problem.png)
- 문제가 잘 안 보이시면 [👉🏻링크](https://programmers.co.kr/learn/courses/30/lessons/12903) 에서 봐주세요!

## 2. 문제 풀이
### 1. 첫번째 시도 (🙆🏻‍♀️)
- s의 가운데 글자를 가져 오기 위해서는 해당 위치의 인덱스를 알아내기 위해서 s의 길이를 체크 합니다.
- 만약, s의 길이가 짝수라면 가운데 두글자를 반환하고 홀수라면 가운데 한글자를 반환해야 합니다.
- 그래서 아래와 같이 코드를 짰을 때 모든 테스트케이스를 통과 하였습니다.

```javascript
function solution(s) {
    let answer ='';
    let mok = s.length/2;
    mok = parseInt(mok.toString());

     if(s.length % 2 === 0){
         answer += s[mok-1] + s[mok];
     }else{
         answer += s[mok];
     }
     return answer;
}

console.log(solution("abc"));
```

- 결과
![result_5](/assets/images/algorithm/programmers/programmers-4/result.png)
    - 정확성이 `100`로 테스트 16개 모두 통과 되었습니다.
    
### 2. 두번째 시도 (🙆🏻‍♀️)
- 다른 사람의 풀이를 보니 간단하게 작성되어 있어서 저도 제가 짠 코드를 리팩토링 해보았습니다.
- 수정 사항
    - `mok` 변수를 한줄로 변경
    - 삼항 연산자를 이용하여 if문을 없애고 바로 return 값에 넣음
    - s의 길이가 짝수이면 `s[mok-1] + s[mok]`, 홀수이면 `s[mok]` 값을 리턴 함

```javascript
function solution(s) {
    let mok = parseInt((s.length/2).toString());
    return (s.length % 2 === 0 ? s[mok-1] + s[mok] : s[mok]);
}

console.log(solution("abc"));
```


## 3. 다른 사람의 풀이
```
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
```
- 다른 사람들의 풀이에서는 삼항연산자와 Math 함수를 사용하여 답을 나타내었습니다.

-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️✨   
