---
title: "[Deploy] Heroku - 로그 모니터링 및 mysql 이슈 해결"
date: 2021-04-07 18:31:22
layout: post
permalink: '/categories/Project/heroku-log-monitoring'
categories: Project
tags: heroku deploy Toy-project NailOllae Nodejs
---

안녕하세요!

이번 포스팅 에서는 **Heroku**로 프로젝트 배포 이후, 로그를 모니터링 하는 방법을 알아 보도록 하겠습니다.
또한, 구동 중인 프로 젝트에서 mysql connection 이슈가 발생 하였을 때 해결 방법에 대해 알아 보도록 하겠습니다!👩🏻‍💻


---
## 1. 개요
- heroku로 프로젝트를 만들고 배포한지 거의 한달이 다 되어 갑니다. 아직 미완성이지만, 그래도 빨리 배포 테스트를 해보고 싶어서 heroku 사이트를 통해 배포를 하였습니다.
- 그런데 처음에는 제대로 동작하는 것 같더니 배포 이후 몇일 뒤에 접속해 보면 홈페이지가 접속이 안되는 경우가 있었습니다.
- 그럴 때 마다 재배포를 통해 다시 웹을 구동 시켰지만 잠시 동안만 정상 동작을 하였고 다음날 보면 또 배포 사이트에 접속이 불가 하였습니다.

## 2. Heroku 로그 보기
-  사이트 접속 에러 원인을 파악하기 위해 heroku 홈페이지에 접속 하여 로그를 확인해 보았습니다.
-  


## 3. 결론
- 네일 올래안에 Mysql 익셉션 처리나 에러 처리가 완벽하게 되지 않아서, 홀딩이 

## 5. Heroku 배포 확인
- 이전에 작성한 포스팅인 [👉🏻[Project] NailOllae - 개발 항목 정리](https://shinsangeun.github.io/categories/Project/nailollae-2) 를 **Node.js** 로 만들어서 **Heroku**에 배포를 해 보았습니다.
- [👉🏻 네일 올래? 배포 사이트](https://nailollae.herokuapp.com/) 가 성공적으로 배포 되었습니다!
![nailOllae](/assets/images/deploy/heroku-nailollae.png)

- 무료 사이트 이다보니 사용할 때 약간 delay가 있지만 가볍게 사용 하기에는 무리가 없어 보입니다. 개발자 포트폴리오나 가벼운 토이 프로젝트를 배포하기에 아주 유용하게 쓰일 듯 합니다.👍🏻


## 6. 마치며
- 배포를 성공 하자마자 바로 포스팅을 작성하게 되어 부족한 부분이 있을 수 있지만, 제가 만든 토이 프로젝트를 처음으로 사이트에 배포하게 되어 너무 뿌듯합니다.🤩
- 이 포스팅을 보고 **Heroku** 에서 여러분들의 포트폴리오나 토이 프로젝트를 배포에 성공 하셨으면 좋겠습니다!


-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!👩🏻‍💻💕



