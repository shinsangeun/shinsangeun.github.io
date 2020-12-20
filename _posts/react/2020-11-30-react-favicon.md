---
title: "[React] favicon 변경 하기"
date: 2020-11-30 01:33:23
layout: post
permalink: '/categories/React/react-favicon'
categories: React
tags: React favicon Toy-project
---

안녕하세요!  

이번 포스팅에서는 `React`를 개발 할 때 상단에 보이는 아이콘을 변경하는 방법에 대해 소개해 드리고자 합니다.  
`FIGLE`을 접어두고 다른 토이 프로젝트를 진행 중인데 구글링을 통해 개발을 하는 중이라서 따로 적어두지 않으면 까먹을 것 같아서 내용을 정리해 보고자 합니다!

-----

### 개요.

React 파일을 실행시키면 상단에 귀여운 React 모양의 `favicon.ico` 아이콘이 나타납니다.  
그런데 개발을 하다보면 본인만의 아이콘을 만들어서 적용할 때가 있는데요, 이 때 상단의 아이콘을 바꾸는 방법에 대해 알려 드리겠습니다!


### 1. Start

1. 자신의 `React` 프로젝트를 실행 시킵니다.  
2. `/public/favicon.ico`경로의 아이콘을 본인의 아이콘(같은 이름)으로 `복사+붙여 넣기` 합니다.
3. 웹 페이지를 새로고침 하면 상단의 아이콘이 적용한 모습으로 바뀌게 됩니다.  

👇🏻토이 프로젝트의 아이콘
![icon1](/assets/images/react/react_LHhome.png)

👇🏻위와 같이 적용한 아이콘의 모습 입니다!
![favicon1](/assets/images/react/favicon.png)


### 2. Why?

본인이 설정한 아이콘으로 잘 변경이 되었나요?  
그럼 왜 `favicon.icon`으로 설정을 해야 할까요?

바로 `/public/index.html`에 있는 `head` 부분의 `href`의 경로 때문 입니다.  
상단의 아이콘이 해당 경로에 있는 아이콘을 가져오기 때문에 아이콘의 이미지를 바꾸면 저장이 됩니다.

아래 사진에 있는 `href`의 경로에 자신의 아이콘을 적용 했기 때문에 잘 나타나게 되는 것이겠죠?😄
![head](/assets/images/react/react_head.png)


-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️✨    

   
