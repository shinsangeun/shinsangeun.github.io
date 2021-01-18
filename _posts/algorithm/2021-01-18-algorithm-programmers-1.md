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
문제 출처 사이트는 [👉🏻프로그래머스_위](https://programmers.co.kr/learn/courses/30/lessons/42578) 입니다.


## 1. 문제
- 스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장합니다.
- 예를 들어 스파이가 가진 옷이 아래와 같고 오늘 스파이가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야 합니다.
[programmers_1](/assets/images/algorithm/programmers_1.png)

- 스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

- 제한사항
```
1. clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
2. 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
3. 같은 이름을 가진 의상은 존재하지 않습니다.
4. clothes의 모든 원소는 문자열로 이루어져 있습니다.
5. 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.
6. 스파이는 하루에 최소 한 개의 의상은 입습니다.
```
[programmers_2](/assets/images/algorithm/programmers_2.png)

#### 입출력 설명
**예제 #1**
- headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.
```
1. yellow_hat
2. blue_sunglasses
3. green_turban
4. yellow_hat + blue_sunglasses
5. green_turban + blue_sunglasses
```

**예제 #2**
- face에 해당하는 의상이 crow_mask, blue_sunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.
```
1. crow_mask
2. blue_sunglasses
3. smoky_makeup
```

## 2. 풀이 
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

    // 모두 선택하지 않은 경우는 제외
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
