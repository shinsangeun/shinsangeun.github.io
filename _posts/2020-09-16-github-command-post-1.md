---
title: "[Github] Github 명령어 정리"
date: 2020-09-16 21:12:23 -0400
layout: posts
permalink: '/categories/Github/github-command-1'
categories: Github
taxonomy: Github
comments: true
---

안녕하세요!

이번 포스팅 에서는 Github에서 자주 쓰이는 명령어들을 정리해 보고자 합니다.
개발 하면서 새로 알게된 명령어가 있으면 아래에 계속 추가할 예정 입니다!

-----
# 1. 브랜치 관련
- 현재 브랜치 확인
`git branch`

- 원격 저장소 브랜치 리스트 보기
`git branch -r`

- 모든 브랜치 리스트 보기
`git branch -a`

- 브랜치 변경
`git checkout <branch>`

- 브랜치 추적
`git checkout -b <branch>`

- 브랜치 동기화 (fork한 원본 repository: upstream과 동기화)
`git fetch upstream`

- 브랜치 동기화 (fork한 원본 repository: upstream와 동기화) 후 merge 하기
`git pull upstream`

- 브랜치 삭제
`git branch -d <branch`


# 2. User 정보 관련
- 현재 user 이름 확인
`git config user.name`

- 현재 user 이메일 확인
`git config user.email`

- user 이름 바꾸기
`git global --config user.name <변경할 이름>`

- user email 바꾸기
`git global --config user.email <변경할 email>`


# 3. Push
- git push 취소 하기
`git reset --hard HEAD~<취소할 head의 갯수>`  
`git push -f origin <branch>`  

- git 강제 push
`git push -u origin <branch>`

- git이 추적하지 않는 untrakced files 한꺼번에 삭제하기
`git clean -f`

- git이 추적하지 않는 untrakced files 한꺼번에 삭제하기 (디렉토리까지 삭제하기)
`git clean -f d`

# 4. Merge
- git merge 하기 (병합할 커밋)
`git merge <commit>`

-----

오늘 준비한 내용은 여기까지 입니다.
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!