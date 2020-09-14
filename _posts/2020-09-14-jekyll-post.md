---
title: "Jekyll Github 블로그 시작하기"
date: 2020-09-14 17:39:28 -0400
layout: category
permalink: '/categories/Github/jekyll-1'
categories: Github
taxonomy: Github
---

안녕하세요!

개발 블로그를 시작하려고 여러 블로그를 찾아보던 중 tistory, velog, github 중에 고민 하다가 **1일 1커밋** 달성을 위해 github.io 블로그를 생성하게 되었습니다.  
Github에 1일 1커밋 하는 일이 매일 매일 꾸준하게 계속 해야 하는 일이라 생각보다 어려운 일이더라구요.  
그래서 매일 커밋을 할 수 있는 일이 무엇이 있을까 생각하다가 github로 블로그를 작성하면 커밋 횟수가 늘어날 것 같은 생각이 들어서 선택하게 되었습니다.

Github 블로그에서도 여러가지 테마가 있는데 오늘은 `jekyll` 테마를 사용 해서 블로그를 만들어 보고자 합니다!

# 목차
[1. Github Repository 생성하기](#Github-Repository-생성하기)  
[2. 포스트 글 작성하기](#포스트-글-작성하기)

--- 
### 1. Github Repository 생성하기
1. 자신의 깃허브에 레포지토리를 생성 합니다. Jekyll 테마를 사용하기 위해 레포지토리 이름은 `username.github.io`로 생성 합니다.
![Repository](/assets/images/github-repository.png)

2. 생성된 레포지토리를 로컬에 clone 합니다. (or 소스트리를 이용해서 로컬에 clone 합니다.)
`git clone https://github.com/username/username.github.io`


--- 
### 2. 포스트 글 작성하기
1. 생성한 레포지토리에서 루트에 `_post` 폴더를 생성 합니다.
2. 생성한 폴더 밑에 `날짜-포스팅이름.md` 파일을 생성 합니다. (ex. 2020-09-14-first-post.md)
3. 생성한 파일에 포스팅 내용을 입력 합니다. 
4. 포스팅 내용 상단에 아래 내용을 입력 합니다.
- title: 글 제목, date: 글 작성 날짜, categories: 작성한 글의 태그
```
---
title: "Test posting"
date: 2020-09-11 12:39:28 -0400
categories: test
---
```