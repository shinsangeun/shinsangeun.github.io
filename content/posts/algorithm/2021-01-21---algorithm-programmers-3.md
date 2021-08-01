---
title: "[Algorithm] 프로그래머스(Javascript) - K번째 수"
date: "2021-01-21 17:53:33"
template: "post"
draft: false
slug: "programmers-3"
category: "Algorithm"
tags: 
  - "Algorithm"
  - "Javascript"
description: "오늘은 알고리즘 문제 풀이에 대해 포스팅을 하려고 합니다.🤓"
---

안녕하세요!

오늘은 알고리즘 문제 풀이에 대해 포스팅을 하려고 합니다.🤓  
문제 출처 사이트는 [👉🏻프로그래머스_K번째 수](https://programmers.co.kr/learn/courses/30/lessons/42748) 입니다.


## 1. 문제
![problem](static/images/algorithm/programmers/algorithm-3/problem.png)
- 문제가 잘 안 보이시면 [👉🏻링크](https://programmers.co.kr/learn/courses/30/lessons/42748) 에서 봐주세요!

## 2. 문제 풀이
### 1. 첫번째 시도 (🙅🏻‍♀️)
- **array**를 자르기 위해 **commands**에 주어진 배열 갯수만큼 for문으로 돌려 줍니다.
- **commands**의 배열의 첫번째 원소부터 두번째 원소까지 배열을 잘라야 하므로 **slice** 함수를 사용하였습니다.
- 잘라진 result 배열을 sort 하고, 해당 배열을 다시 **result2**에 할당 하였습니다.
- 아래의 코드로 실행 하였을 때는 테스트 케이스가 통과하여 제출을 해보았습니다.

```javascript
function solution(array, commands) {
    var answer = [];
    for(var i = 0; i < commands.length; i++){
        var result = array.slice(commands[i][0]-1 , commands[i][1]);
        result.sort();

        var result2 = result[commands[i][2] - 1];
        answer.push(result2);
    }

    return answer;
}

console.log(solution([1,5,2,6,3,7,4], [[2,5,3],[4,4,1],[1,7,3]]));
```

- 결과
![result](static/images/algorithm/programmers/algorithm-3/result.png)
    - 정확성이 `85.7`로 테스트 7개 중 6개가 통과 되었습니다.
    - 테스트 케이스 2번만 실패를 하여 구글링을 통해 풀이를 찾아 보았습니다.
    

### 2. 두번째 시도 (🙆🏻‍♀️)
- `result` 배열에 정렬을 할 때 비교 식이 빠져서 통과가 되지 않았습니다.
- array.sort() 사용시에 **sort**함수는 **string 비교**를 하기 때문에 **number**비교를 위해서는 array.sort((x,y) => x-y)로 **오름차순 정렬** 을 해야 합니다.

- 지난번에 알고리즘 풀이에 작성한 `arr.sort([compareFunction])` 이 식과 마찬 가지로 정렬 할 때 기준이 추가 되어야 정답으로 인정 되었습니다.
- 다음번 에도 잊지 않기 위해 한번 더 작성해 봅니다!
- **arr.sort([compareFunction])**
    - compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬
    - compareFunction(a, b)이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬
    - compareFunction(a, b)이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트
    - compareFunction(a, b)은 요소 a와 b의 특정 쌍이 두 개의 인수로 주어질 때 항상 동일한 값을 반환

```javascript
function solution(array, commands) {
   var answer = [];
    for(var i = 0; i < commands.length; i++){
        var result = array.slice(commands[i][0]-1 , commands[i][1]);
        result.sort((a,b)=> a - b);
        var result2 = result[commands[i][2] - 1];
        answer.push(result2);
    }
   
    return answer;
}
```


## 3. 다른 사람의 풀이
```javascript
function solution(array, commands) {
    var answer = [];

    answer = commands.map(a=>{
        return array.slice(a[0]-1,a[1]).sort((b,c)=>b-c)[a[2]-1];
    })
    return answer;
}
```
- 이 풀이에서는 map, slice, sort 함수를 이용한 풀이로 보여집니다.
- 위의 풀이와 아이디어 방식은 비슷한데 코드가 간결하고 직관적 이네요..저는 언제 쯤 이렇게 작성 할수 있을 까요..?🥲


-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️✨   
