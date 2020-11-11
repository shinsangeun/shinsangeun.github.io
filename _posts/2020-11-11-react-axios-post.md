---
title: "[React] Axios & Fetch를 이용한 API 호출"
date: 2020-11-11 15:43:12
layout: post
permalink: '/categories/React/react-axios'
categories: React
---

안녕하세요!  

이번 포스팅에서는 React에서 Open API를 통해 데이터를 가져올 때 자주 사용되는 함수인 `Axios`와 `Fetch` 함수에 대해 알아 보도록 하겠습니다!  
두 함수에 대한 공통점과 차이점에 대해 정리 해 보도록 하겠습니다.🤔

-----

## 1. Axios vs. Fetch 
- React에서 개발 시 REST API를 호출하기 위해 `axios`, `fetch` 를 활용하는 방법을 소개 해 드리 고자 합니다.
- 둘 다 HTTP 클라이언트 라이브러리고 `Promise` 기반으로 이루어져 있습니다.


## 2. 사용 사례

#### 2-1. Axios
- `Axios` 함수를 사용 하여 선수의 포지션 정보를 가져 오는 함수 입니다. (아래는 `FIGLE` 개발 시에 사용된 실제 코드 입니다.)
- 여기서는 데이터를 가져오기 위해 `Get` 함수를 사용 하였고, 받아온 데이터를 `this.state.seasonResult` 에 저장 하였습니다.
- 아래 url들은 [FIFA Online 개발자 센터](https://developers.nexon.com/fifaonline4/apiList) 에 있는 데이터 정보 입니다.

```$xslt
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const getSeasonIdDetail = 'https://static.api.nexon.co.kr/fifaonline4/latest/seasonid.json';
axios.get(proxyurl + getSeasonIdDetail).then(response => {
    let data = response.data;
    this.setState({
        seasonResult: data
    });
})
```


#### 2-2. Fetch
- `Fetch` 함수를 사용 하여 선수의 포지션 정보를 가져 오는 함수 입니다. (아래는 `FIGLE` 개발 시에 사용된 실제 코드 입니다.)
- 여기서는 데이터를 가져오기 위해 `Get` 함수를 사용 하였고, api를 통해 받아온 데이터를 `this.state.positionList` 에 저장 하였습니다. 
- 아래 url들은 [FIFA Online 개발자 센터](https://developers.nexon.com/fifaonline4/apiList) 에 있는 데이터 정보 입니다. 

```$xslt
getPositionList = async () => {
    const url = '/fifaonline4/latest/spposition.json';
    const options = {
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept": "*/*",
            "Host": "static.api.nexon.co.kr",
            "Connection":"keep-alive"
        }
    };
    let response = await fetch(url, options);
    let responseOK = response && response.ok;
    if(responseOK){
        let data = await response.json();
        this.setState({
            positionList: data
        });
    }
}
```


## 3. 결론
- 필요에 따라 상황에 따라 2가지 함수를 적절히 사용하는 것이 좋을 것 같습니다. 
- 저는 FIGLE 개발 시에 `axios`를 더 많이 사용 하긴 했는데 개발을 하다 보니 상황에 따라 `fetch` 함수가 더 간단 명료한 경우가 있었습니다.
- 그래서 두 가지 중에 무엇이 좋다는 정답은 없는 것 같고, 본인이 개발 하면서 상황에 따라 더 좋은 방향으로 적절하게 사용하는 것이 좋을 듯 합니다!

-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️✨       
