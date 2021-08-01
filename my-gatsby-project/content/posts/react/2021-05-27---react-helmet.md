---
title: "[React] react-helmet Title 적용 하기"
date: "2021-05-27 12:42:11"
template: "post"
draft: false
slug: "react-helmet"
category: "React"
tags:
  - "React"
  - "react-app"
  - "react-helmet"
description: "이번 포스팅 에서는 `React.js`에서 react-helmet 라이브러리를 이용하여 웹 페이지 마다(라우팅 별) `Title`을 수정하는 방법 방법에 대해 알아보도록 하겠습니다!😲"
---

안녕하세요!  
요즘 너무 바쁘다 보니 블로그를 너무 오랜만에 쓰는 것 같네요..🥲

이번 포스팅 에서는 `React.js`에서 **react-helmet** 라이브러리를 이용하여 웹 페이지 마다(라우팅 별) `Title`을 수정하는 방법 방법에 대해 알아보도록 하겠습니다!😲

-----
### 1. Title 설정
- react.js에서 초기에 프로젝트의 title은 아래 사진과 같이 `<title>` 태그로 되어 있습니다.  
![title-html](static/images/react/react_title_html.png)
  
- React.js는 기본적으로 [SPA(Single Page Application) 동작 방식](https://shinsangeun.github.io/categories/React/react-spa) 이기 때문에, 페이지 타이틀은 맨 처음에 서버에서 받은 값을 사용 합니다. 그래서 브라우저 단에서 라우팅이 변경이 되어도 이 값은 계속 유지가 됩니다. 
- 하지만 라우팅 별로 title 제목을 다르게 설정 하고 싶을 수도 있기 때문에 웹 페이지 별로 다른 타이틀을 보여 주고 싶은 상황이 생길 수 있습니다.


### 2. react-helmet 사용 방법
- 프로젝트에 react-helmet 라이브러리를 적용하기 위해 설치 합니다.

```shell
npm install react-helmet
``` 

- 함수형 컴포넌트에서 사용하기

```javascript
import {Helmet} from "react-helmet";

const title = () => {
    return <Helmet title="FIGLE - 경기 매치 리스트" />
}
```

- 자식 컴포넌트에서 사용하기

```javascript
<Helmet>
    <title>FIGLE - 경기 매치 리스트</title>
</Helmet>
```

- 결과
![title-list](static/images/react/react_title_list.png)
![title-list-matchId](static/images/react/react_title_match.png)
  - 라우팅 페이지 별로 Title이 다르게 나타나는 모습을 확인 할 수 있습니다.


### 3. 마치며
- 라이브러리를 통해 간단한 방법으로 `Title`을 적용하는 방법에 대해 알아보았습니다. 
- `React.js`는 `SPA(Single Page Application)` 방식이라 라이브러리를 사용해서 바꿔줘야 하지만 `SSR(Server-Side Rendering)`이 가능한 `Next.js`에서는 라이브러리 없이 title 설정이 가능 합니다.
- 다음 포스팅 에서는 `Next.js` 에 대해서도 작성해 보도록 하겠습니다!

-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️✨    

