---
title: "[Github] Github 명령어 정리"
date: 2020-09-16 21:12:23 -0400
layout: post
permalink: '/categories/Github/github-command-1'
categories: Github
tags: Github Command
---

안녕하세요!

이번 포스팅 에서는 Github에서 자주 쓰이는 명령어들을 정리해 보고자 합니다.  
개발 하면서 새로 알게된 명령어가 있으면 아래에 계속 추가할 예정 입니다!

-----
# 1. Branch
- 현재 브랜치 확인  
`git branch`

- 원격 저장소 브랜치 리스트 보기  
    - `git branch -r`

- 모든 브랜치 리스트 보기  
    - `git branch -a`

- 브랜치 변경  
    - `git checkout <branch>`

- 브랜치 추적  
    - `git checkout -b <branch>`

- 브랜치 동기화 (fork한 원본 repository: upstream과 동기화)  
    - `git fetch upstream`

- 브랜치 동기화 (fork한 원본 repository: upstream와 동기화) 후 merge 하기  
    - `git pull upstream`

- 브랜치 삭제  
    - `git branch -d <branch`


# 2. User 정보 관련
- 현재 user 이름 확인  
    - `git config user.name`

- 현재 user 이메일 확인  
    - `git config user.email`

- user 이름 바꾸기  
    - `git global --config user.name <변경할 이름>`

- user email 바꾸기  
    - `git global --config user.email <변경할 email>`


# 3. Push
- git push 취소 하기  
    - `git reset --hard HEAD~<취소할 head의 갯수>`  
    - `git push -f origin <branch>`  

- git 강제 push  
    - `git push -u origin <branch>`

- git이 추적하지 않는 untrakced files 한꺼번에 삭제하기  
    - `git clean -f`

- git이 추적하지 않는 untrakced files 한꺼번에 삭제하기 (디렉토리까지 삭제하기)  
    - `git clean -f d`


# 4. Merge
- git merge 하기 (병합할 커밋)  
    - `git merge <commit>`


# 5. Reset
**⭐️주의!⭐️**  
hard 옵션은 커밋의 이력을 모두 삭제 하므로 협업 시에는 다른 사람의 커밋을 날리지 않도록 주의해서 사용해 주세요!  
**reset** 명령어 에는 3가지의 옵션이 있습니다.
- mixed: 작업 상태는 그대로 두지만 인덱스는 리셋
- soft: 모든 로컬 변경사항을 유지
- hard: 모든 작업 상태 내 변경 사항을 버림 

1. (UI) 만약 자신의 작업 브랜치에 커밋을 되돌리기 위한 경우, `source tree`의 UI에 대해 설명 하겠습니다.  
![image](/assets/images/github/git-commit-reset.png)
- 예를 들어, `[Algorithm] 프로그래머스(Javascript)-가운데 글자 가져오기 - 포스팅 업로드` 이후에 커밋한 내역을 삭제 하려면 Source Tree에서 해당 커밋을 선택하고 오른쪽 버튼을 누르면, **master를 이 커밋으로 초기화** 버튼을 눌러서 HEAD를 커밋 아이디 **6a6dbe9**로 맞춰 줍니다.

2. (터미널 명령어) hard: 커밋의 이력까지 모두 삭제
    - `git reset --<옵션:여기서는 hard> <commit ID: 되돌아 갈 커밋의 아이디>`
![image2](/assets/images/github/git-branch-pointer.png)

3. 로컬 저장소의 경우 커밋 히스토리가 원격 히스토리보다 뒤(non-fast-forward)인 경우, push를 진행시 오류가 발생 하기 때문에 강제로 브랜치에 덮어 씌워야 합니다.
- commit 이력 삭제 이후에는 해당 브랜치에 강제로 push를 해주어야 함
   - `git push -f`


# 6. Revert
- reset 명령어의 주의사항을 고려하여 변경하고 되돌린 내용을 다른사람들과 공유할 수 있는 기능입니다.
- 특정 지점의 과거 커밋으로 이동, 변경 내역은 유지 합니다.
- 이력이 남기 때문에 많은 사람들과 작업할 때 유용 합니다.
- `git revert <commit ID: 되돌아 갈 커밋의 아이디>`


-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!😎👍🏻