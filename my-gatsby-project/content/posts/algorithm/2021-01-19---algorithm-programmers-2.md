---
title: "[Algorithm] 프로그래머스(Javascript) - 가장 큰 수"
date: "2021-01-19 17:42:33"
template: "post"
draft: false
slug: "programmers-2"
category: "Algorithm"
tags: 
  - "Algorithm"
  - "Javascript"
description: "오늘은 알고리즘 문제 풀이에 대해 포스팅을 하려고 합니다.🤓"
---

안녕하세요!

오늘은 알고리즘 문제 풀이에 대해 포스팅을 하려고 합니다.🤓  
문제 출처 사이트는 [👉🏻프로그래머스_가장 큰 수](https://programmers.co.kr/learn/courses/30/lessons/42746) 입니다.


## 1. 문제
![problem](/assets/images/algorithm/programmers/algorithm-2/problem.png)
- 문제가 잘 안 보이시면 [👉🏻링크](https://programmers.co.kr/learn/courses/30/lessons/42746) 에서 봐주세요!

## 2. 문제 풀이
### 1. 첫번째 시도 (🙅🏻‍♀️)
- 배열 안에 있는 숫자를 조합하여 가장 큰 수를 계산하기 위해서는, 그중에서 가장 큰 수가 맨 앞에 있어야 한다고 생각 했습니다.
- 그래서 주어진 배열을 **sort()** 한 다음에, 정렬된 배열을 다시 **reverse()** 하여 큰수가 맨 앞에 오도록 배열을 만들었습니다.
- 그리고 배열을 돌리면서 첫번째 자리수를 answer에 넣었습니다.
- numbers이 `[0,0,0,0]` 인 경우에는 answer이 "0000" 이 나올 경우도 있으므로 answer의 맨 앞자리가 0인 경우에는 "0"을 return 하도록 만들었습니다.  
- 이 방법으로 했을 때는 `[6,10,2]`이 코드를 통과 하였지만, `[3, 30, 34, 5, 9]` 배열은 통과하지 못했습니다..🥲

```javascript
function solution(numbers) {
    let answer = '';

    let numberSort = numbers.sort();
    let reverseNumber = numberSort.reverse();

    for(let i in reverseNumber){
        answer += reverseNumber[i];
    }

    if(answer[0] === "0"){
        answer = "0";
    }

    return answer.toString();
}

console.log(solution([6, 10, 2]));
```

- 결과
![result](/assets/images/algorithm/programmers/algorithm-2/result.png)
    - 정확성이 `36.4`로 테스트 11개 중 4개만 통과 되었습니다.
    - 다른 방법으로 시도 해야 할 것 같아서 구글링을 통해 방법을 얻게 되었습니다.
    

### 2. 두번째 시도 (🙆🏻‍♀️)
- 만약 `[12, 121]` 라는 배열이 주어졌을 때 첫번째 코드로 하게 된다면 **12112** 라는 결과가 나옵니다. 하지만 실제로는 **12121** 라는 숫자가 더 큰 수 이므로 정답이 아닙니다.
- 그래서 구글링을 통해 얻은 핵심 개념은 **(b+a)-(a+b)** 입니다.
- 코드 안에서 `arr.sort([compareFunction])`의 함수를 사용한 것을 볼 수 있는데요. compareFunction이란, **정렬 순서를 정의하는 함수.** 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬됩니다.
    - compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
    - compareFunction(a, b)이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다.
    - compareFunction(a, b)이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다.
    - compareFunction(a, b)은 요소 a와 b의 특정 쌍이 두 개의 인수로 주어질 때 항상 동일한 값을 반환해야합니다. 일치하지 않는 결과가 반환되면 정렬 순서는 정의되지 않습니다.
- 따라서 아래의 코드로 실행하게 되면 compareFunction 함수에 의해서 **12121**라는 정답을 얻을 수 있게 됩니다.

```javascript   
function solution(numbers) {
    var answer = numbers.sort((a,b) => (b.toString() + a.toString())-(a.toString() + b.toString())).join('');

    if(answer[0] === "0"){
        answer = "0";
    }

    return answer;
}

console.log(solution([12, 121]));
```


## 3. 다른 사람의 풀이
```javascript
function solution(numbers) {
    var answer = numbers.map(v=>v+'')
                        .sort((a,b) => (b+a)*1 - (a+b)*1)
                        .join('');

    return answer[0]==='0'?'0':answer;
}
```
- 이 풀이에서는 map, sort, 삼항연산자를 이용한 풀이로 보여집니다.
- 이번 문제의 핵심 개념인 **(b+a)-(a+b)** 이 쓰인것도 볼 수 있습니다.


-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️✨   
