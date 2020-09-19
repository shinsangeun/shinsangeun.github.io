---
title: "[Github] Google analytics 연동하기"
date: 2020-09-19 22:05:23 -0400
layout: post
permalink: '/categories/Github/github-google-analytics'
categories: Github Google-Analytics
taxonomy: Github
---

안녕하세요!

개발 블로그를 시작 하기 전부터 생각 했었던 저만의 블로그가 생기면 **꼭 해보고 싶었던 일** 중 하나 인데요.  
바로 **구글 애널리틱스**를 이용 하여 블로그 방문자 수에 대한 분석을 해 보고자 합니다!  
(다른 하나는 블로그 광고를 이용 해서 **수익 창출** 하기 입니다.✨)  

그래서 이번에는 `Google Analytics`와 연동하는 방법에 대해 알아 보도록 하겠습니다.😎

현재 `쿠팡 파트너스` 와 `구글 애드센스`의 승인을 기다리는 중인데 승인이 나면 블로그에 방법을 따로 작성 하도록 하겠습니다.  

-----
# 1. Google Analytics의 정의
- 개발자나 혹은 마케팅, 블로그에 관심이 많은 분이라면 Google Analytics는 한번 쯤은 들어보셨을 거라고 생각 합니다. 그래도 다시 정의를 짚고 넘어가야 할 것 같아서 어떤 것인지 소개해 드리고자 합니다.
- `Google Analytics`에 대한 정의는 [위키백과](https://en.wikipedia.org/wiki/Google_Analytics) 에 아래 내용 처럼 소개 되어 있습니다. 
```
Google Analytics는 현재 Google Marketing Platform 브랜드 내부의 플랫폼으로 웹 사이트 트래픽을 추적하고보고하는 Google에서 제공하는 웹 분석 서비스입니다. 
Google은 Urchin을 인수 한 후 2005 년 11 월에 서비스를 시작했습니다. 
```

- 블로그를 방문하는 사람들의 `페이지 뷰 수`, `인기 키워드`, `인기 위치`, `인기 사용중 페이지` 등 블로그를 운영 하는 사람들에게 도움이 되는 내용을 분석해 주는 페이지 입니다.
- 그래서 블로그를 작성하는 분은 구글 애널리틱스를 잘 활용 하면 유저가 어떤 데이터를 좋아하는지, 어떤 글을 선호 하는지에 대해 더 자세 하고 정확 하게 파악이 가능 해 질것 입니다. 


# 2. Google Analytics 시작 하기
1. 본론으로 들어가서 첫번째로 구글 계정으로 Analytics에 가입을 합니다.
- [구글 애널리틱스](https://analytics.google.com/)

2. 가입을 한 후에 아래 해당하는 내용을 입력합니다.
[Analytics 속성 생성](/assets/images/google/github-google-analytics.png)

3. 약관 동의 후 생성된 추적 ID를 복사 합니다.
[추적 ID](/assets/images/google/github-google-analytics-2.png)


# 3. Jekyll 블로그와 연동 하기 
- 2번 내용에서 복사한 추적 ID를 Jekyll 블로그에 입력해 줘야 합니다. 이 블로그는 Jekyll 테마를 사용 하고 있어서 이 테마에 맞추어 설정하는 방법을 알려 드리겠습니다.  
1. `/root/_includes/analytics.html` 파일에 `gtag.js` 내용을 복사해서 붙여넣습니다.
[analytics.html](/assets/images/google/github-google-analytics-3.png)

2. `/root/_layouts/default.html` 파일 하단에 아래의 내용을 추가해 줍니다.
[default.html](/assets/images/google/github-google-analytics-4.png)

3. 수정한 파일을 github에 push 합니다.


# 4. 연동 후 확인 하기
- 3번까지 작업을 마친 후에는 `Google Analytics`와 제대로 연동이 되었는지 확인 합니다.  
- 자신의 블로그에 접속 한 후에 애널리틱스 화면을 확인 합니다. 활성화된 숫자가 있으면 제대로 연동이 완료 된 것입니다!
[애널리틱스 화면](/assets/images/google/github-google-analytics-5.png)



-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🤖✨