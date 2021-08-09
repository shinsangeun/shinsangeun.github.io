---
title: "[Blog] Jekyll에서 Gatsby로 블로그 이전하기"
date: "2021-08-01 18:20:23"
template: "post"
draft: false
slug: "gatsby-blog"
category: "Blog"
tags:
- "Blog"
- "Jekyll"
- "Gatsby"
description: "블로그 개발 환경을 `Jekyll`에서 `Gatsby`로 이전하게 되었습니다."
---

안녕하세요!

블로그 개발 환경을 `Jekyll`에서 `Gatsby`로 이전하게 되었습니다.
그래서 이번 포스팅에서는 `블로그를 이전하게 된 이유`와 `Gatsby` 설정 방법에 대해 작성해 보겠습니다.

-----
## 1. 개요
개발 블로그를 시작 할 때는 `Jekyll` 이 뭔지도 잘 모르고, 일단 시작해 보고 싶은 마음에 무작정 만들게 되었는데요. Jekyll은 `Ruby` 기반 으로 만들어졌습니다.  
그런데 카테고리 별로 메뉴를 추가 한다던지, 디자인을 바꾸고 싶었는데 구글링으로도 한계가 있었습니다. 

요즘 `React`와 `Next.js`를 주로 개발을 하고 있어서 찾게된 와중에 **Gatsby.js** 를 알게 되었습니다. Gatsby는 React 기반의 `Frontend Framework` 이라 `Javascript`를 다룰 수 있는 저에게는 친숙하게 느껴졌습니다.  
그래서 블로그를 **Gatsby.js** 로 바꿔야겠다고 결심하게 되었습니다.


## 2. Gatsby 이전 하기
- [👉🏻Gatsby 공식 사이트](https://www.gatsbyjs.com/)

Gatsby로 이전하려면 기존에 있던 포스팅을 모두 옮겨야 해서 일단 원래 있던 소스를 놔두고, `Gatsby` 폴더를 새로 만들어서 그 안에서 틈틈히 작업을 하였습니다.  
Jekyll과 Gatsby는 폴더 구조, Markdown 파일 작성 방법, config 설정 등 약간의 차이점이 있었습니다.


## 3. Jekyll vs. Gatsby 차이점
1. 파일 이름
    - Jekyll: 2021-08-01-blog-gastby.md
    - Gatsby: 2021-08-01---blog-gastby.md

2. Markdown Config
    - Jekyll

```
   ---
   title: "[Github] Google analytics 연동하기"
   date: 2020-09-19 22:05:23 -0400                           // 포스트 작성일
   layout: post                                              // 포스트 Layout
   permalink: '/categories/Github/github-google-analytics'   // 링크 url
   categories: Github Google-Analytics                       // 카테고리
   taxonomy: Github                                          // 태그
   ---
```

- Gatsby

```
   ---
   title: "[Blog] Jekyll에서 Gatsby로 블로그 이전하기"
   date: "2021-08-01 18:20:23"                             // 포스트 작성일
   template: "post"                                        // 포스트 Layout
   draft: false            
   slug: "gatsby-blog"                                     // 링크 url
   category: "Blog"                                        // 카테고리
   tags:                                                   // 태그
   - "Blog"
   - "Jekyll"
   - "Gatsby"
     description: "이번 포스팅에서는 `블로그를 이전하게 된 이유`와 `Gatsby` 설정 방법에 대해 작성해 보겠습니다."    // 간략 설명
   ---
```

3. 배포  
배포는 구성하는 방식에 따라 다르긴 하지만 제가 적용한 방법은 아래와 같습니다.  
기존에 Jekyll 블로그 도메인을 `shinsangeun.github.io`로 사용 하고 있어서 `Gatsby` 에서도 동일한 도메인으로 사용 하기 위해 **gh-page** 로 배포를 적용 하였습니다.  
프론트엔드 정적 사이트를 배포 할 수 있는 프레임워크 종류가 많아서 자신이 원하는 취향에 맞게 선택 할 수 있습니다!
   
   - Jekyll 배포: [👉🏻Jekyll 블로그 생성기](https://shinsangeun.github.io//posts/blog/jekyll-1)
   - Gatsby 배포: gh-page, Netlify, vercel 
   
Gatsby는 Github에 Push를 하고 Deploy 까지 해줘야 실제 블로그에 적용이 됩니다.
- Deploy 명령어 : `yarn clean && gatsby build --prefix-paths && gh-pages -d public`

### 4. Gatsby 장점

블로그를 Jekyll에서 Gatsby로 이전하면서 느낀 **장점**을 정리해 보았습니다. 


1. 카테고리 파일 불필요

`Jekyll`에서는 `A` 라는 카테고리를 만들려면 `A.html` 파일을 생성해야 카테고리가 추가 되었습니다.  
하지만 `Gatsby` 에서는 카테고리 파일을 추가 하지 않아도, 포스팅의 카테고리에 `category: "A"` 으로 작성해 주면 카테고리가 자동으로 생성 됩니다.
   

2. 배포 & 렌더링 빠름  

`Jekyll` 블로그를 사용할 때는 포스팅을 조회 할 때 좀 느리게 보여지는 경우가 종종 있었습니다. 하지만 `Gatsby` 에서 포스팅을 조회 할 때는 빠르게 렌더링 되어서 좋았습니다.
`Jekyll`로 배포를 할 때는 실제 블로그에 적용 되는데 까지 시간이 걸렸었는데, `Gatsby`는 `gh-page` 덕분인지 배포가 더 빠르게 되었습니다.


3. React.js 기반  

프론트엔드 언어로 `React.js`를 공부 하면서 `Gatsby`로 블로그를 만들면 일석 이조 인 것 같습니다.   
아무래도 운영, 배포 방식이 비슷하고 Gatsby 블로그에서 빌드를 하면 테스트 코드가 자동 생성 되기 때문에 테스트 코드를 배우기 에도 도움이 될 것이라 생각 됩니다. 
   

4. SEO 최적화  

Jekyll은 **SEO** 최적화가 되지 않아서 불편했던 점이 있었는데, `Gatsby`는 페이지 내에 모든 콘텐츠가 생성 되어 있기 때문에 SEO 최적화가 가능 합니다.
또한 static 페이지를 만들어 주는 것 뿐만 아니라, 필요에 따라 `CSR`, `SSR`, `lazy loading`을 적절히 사용 할 수 있어서 성능 면에서도 장점이 있습니다.👍🏻


5. 반응형 웹 적용
 
기존의 Jekyll은 모바일 에서 화면이 깨지거나 대응이 잘 안되는 부분이 있었습니다.  
Gastby로 블로그를 이전 하면서 모바일로 블로그를 보면 `반응형 웹 `이 잘 적용 되어 있었고, 따로 설정 하지 않아도 자동으로 적용 되니 사용자 입장에서 편하고 좋았습니다.


## 5. 마치며
- Gatsby 로 이전하는 내용은 기존 구글링 정보가 많아서 느낀 점과 사용 후기를 간략하게 정리해 보았습니다.
- 앞으로 **Gatsby**로 블로그를 운영하며 더 좋은 포스팅으로 찾아 오겠습니다.🎈

-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🤖✨