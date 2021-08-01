---
title: "[Github] Profile 관리하기 - Overview"
date: "2020-09-15 00:13:22 -0400"
template: "post"
draft: false
slug: "github-profile"
category: "Github"
tags:
    - "Github"
    - "Profile"
description: "Github를 구경 하다가 아주 흥미로운 기능이 있어서 2020년 7월에 새로 추가된 기능에 대해 소개 해보려 합니다."
---

안녕하세요!

Github를 구경 하다가 아주 흥미로운 기능이 있어서 **2020년 7월**에 새로 추가된 기능에 대해 소개 해보려 합니다.
자신의 프로필에 `Overview`를 클릭하면 맨 위에 상단에 나타나는 내용이 새로 추가된 모습을 볼 수 있습니다.

개발자라면 자신의 Github 프로필에 간단한 포트폴리오 정도로 자신을 나타낼 수 있는 화면이 있으면 편리하고 다른 사람들이 보기에도 좋겠죠?

이번 포스팅에 소개 해드릴 내용의 적용 버전으로 아래는 제 계정의 Github 프로필 입니다.
![Profile1](static/images/github/github-profile-overview.png)

Overview 메뉴에 자신을 소개할 수 있는 **README.md** 파일이 추가된 것이 보이시나요? 생각보다 **정말 간단하게** 만들 수 있습니다.

자, 그럼 어떻게 만드는 것인지 하나씩 소개 해 드리겠습니다!

-----

# 1. 자신의 아이디와 같은 Repository 생성
- 자신의 아이디와 같은 새로운 레포지토리를 생성 합니다. 제 아이디는 `shinsangeun` 이므로 `shinsangeun` 이라는 새로운 레포지토리를 생성 하였습니다.
![Profile2](static/images/github/github-profile-repository.png)
- 그럼 위와 같이 아래에 깃허브 고양이가 스페셜 레포지토리를 만들었다고 축하해 줍니다.
```
You found a secret! shinsangeun/shinsangeun is a ✨special ✨ repository that you can use to add a README.md to your GitHub profile. Make sure it’s public and initialize it with a README to get started.
```
- 아래의 `Create Repository` 버튼을 눌러서 레포지토리를 생성 합니다.

# 2. README.md 파일 업데이트
- 생성된 레포지토리에 README.md 파일을 보면 `Hi, there` 라는 문구가 나타납니다. 여기에 작성되는 내용이 자신의 github 프로필에 나타나게 됩니다.
- 기존에 만들어진 내용을 지우고 필요한 내용을 작성합니다.

> 아래는 저 프로필에 추가한 메뉴 입니다.

### 1. Profile 방문자수
- 자신의 프로필에 방문해준 사람들의 수를 표시해 주는 아이콘 입니다. 아주 간단하게 **한줄만** 추가해 주면 됩니다!
- 아래 내용의 username을 자신의 아이디로 바꿔줍니다.

- Markdown Code
```
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fshinsangeun&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
``` 

- 참고: [https://hits.seeyoufarm.com](https://hits.seeyoufarm.com)

### 2. Most Used Languages
- 자신이 Github에서 가장 많이 사용한 언어를 나타내 줍니다. 아주 간단하게 **한줄만** 추가해 주면 됩니다!
- 아래 내용의 username을 자신의 아이디로 바꿔줍니다.

- Markdown Code
```
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=shinsangeun)](https://github.com/shinsangeun/shinsangeun)
``` 

- 참고: [https://github.com/anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats)

### 3. Github Stats
- 자신의 Github Stats을 한눈에 보여주는 그래프 입니다. 총 스타 수, 총 커밋수, 총 PR수, 총 이슈 수, 기여한 횟수가 나타납니다. 아주 간단하게 **한줄만** 추가해 주면 됩니다!
- 아래 내용의 username을 자신의 아이디로 바꿔줍니다.

- Markdown Code
```
[![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=shinsangeun)](https://github.com/shinsageun/shinsangeun)
``` 

- 참고: [https://github.com/anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats)

### 4. Tech blog
- 자신의 Tech Blog 링크를 달 수 있는 뱃지 입니다. 아주 간단하게 **한줄만** 추가해 주면 됩니다!
- 아래 내용의 link를 자신의 Tech Blog 링크로 바꿔줍니다.

- Markdown Code
```
[![Tech Blog Badge](http://img.shields.io/badge/-Tech%20blog-black?style=flat-square&logo=github&link=https://shinsangeun.github.io/)](https://shinsangeun.github.io/)
``` 

- 참고: [https://shields.io/](https://shields.io/)


오늘 준비한 내용은 여기까지 입니다.
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!