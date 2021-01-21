---
title: "[Algorithm] 프로그래머스(Javascript) - 위장"
date: 2021-01-18 15:38:33
layout: post
permalink: '/categories/Algorithm/programmers-1'
categories: Algorithm Javascript
tags: Algorithm Javascript
---

안녕하세요!

오늘은 알고리즘 문제 풀이에 대해 포스팅을 하려고 합니다.
문제 출처 사이트는 [👉🏻프로그래머스_위장](https://programmers.co.kr/learn/courses/30/lessons/42578) 입니다.


## 1. 문제
![programmers_1](/assets/images/algorithm/programmers/programmers_1.png)
![programmers_2](/assets/images/algorithm/programmers/programmers_2.png)

- 문제가 잘 안 보이시면 [👉🏻링크](https://programmers.co.kr/learn/courses/30/lessons/42578) 에서 봐주세요!


## 2. 문제 풀이 
```
function solution(clothes) {
    let answer = 1;
    let map = new Map();

    let size = clothes.length;
    for (let i = 0; i < size; i++) {
        if (!map.has(clothes[i][1])){
            map.set(clothes[i][1], 1);
        }else{
            map.set(clothes[i][1], map.get(clothes[i][1]) + 1);
        }
    }

    for (let value of map.values())
        answer *= value + 1;

    return answer - 1;
}
```

- 설명
1. 의상의 종류별 개수를 담을 Map을 생성 합니다.
2. clothes의 길이만큼 for문을 순회하며 의상의 종류별 갯수를 맵에 저장 합니다.
3. 해당 의상을 선택하지 않을 경우도 있기 때문에 각 개수에 1을 더하고, 각 의상의 종류별 개수를 곱합니다.
4. 모두 선택하지 않은 경우는 제외 하므로 -1을 해줍니다.


## 3. 다른 사람의 풀이
```
function solution(clothes) {
    return Object.values(clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
}
```
- 위의 코드보다 간결하고 **reduce** 함수를 사용한 것을 볼 수 있습니다.


-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️✨   
