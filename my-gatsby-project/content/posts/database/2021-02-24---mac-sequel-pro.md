---
title: "[Database] Mac OS - Sequel Pro 설치 및 사용법"
date: "2021-02-24 20:38:24"
template: "post"
draft: false
slug: "install-sequel"
category: "Database"
tags:
  - "Database"
  - "Mysql"
description: "이번 포스팅 에서는 `Mac OS`에서 `Mysql` 설치 후 사용할 수 있는 클라이언트 프로그램에 대해 소개 하겠습니다!📕"
---

안녕하세요!

이번 포스팅 에서는 `Mac OS`에서 `Mysql` 설치 후 사용할 수 있는 클라이언트 프로그램에 대해 소개 하겠습니다!📕    
Window에서는 **Mysql workbench** 툴을 사용 하였는데 Mac에서 사용 하는 **Sequel Pro**툴에 대해 정리해 보겠습니다.🤔


-----
### 1. Mysql Workbench 이슈
- 처음 `Mac OS`에서 **Mysql**을 설치해서 사용 하였을 때는 **mysql workbench**를 설치하여 사용 하였습니다.
- 그런데 컴퓨터를 포맷 시킨적이 있어서 다시 설치하려고 보니, 버전이 안맞고 설치가 제대로 안되는 경우가 있어서 다른 툴을 찾아보게 되었습니다.


### 2. Sequel Pro 설치
- `Mac OS`를 사용하는 분들은 **Sequel Pro** 라는 프로그램을 많이 사용하시는 것 같습니다.
- **Mysql workbench**와 기능은 같지만 Mac OS에 맞게 UI가 다르다는 점이 있습니다. 제 생각에는 이게 더 깔끔하고 예쁜것 같아요!😄
- Sequel Pro 설치
    - [👉🏻설치 링크 (여기에서는 하지 마세요!)](https://sequelpro.com/download)

- 처음에 위의 링크로 Sequel Pro를 설치 하였는데 Database를 로드 하는 중에 **무한 로딩**이 발생하는 현상이 있었습니다. 그래서 구글링을 해보니, 툴 버전이 달라서 생긴 문제라고 하여 아래의 링크에서 다시 설치를 하였습니다.
![image](/assets/images/database/sequel-pro-download.png)
    - [⭐️여기에서 설치 하세요!!⭐](https://sequelpro.com/test-builds)


### 3. Sequel Pro 사용법
1. 설치 후 Sequel Pro를 실행하면 아래의 화면이 나타납니다.
![image2](/assets/images/database/sequel-pro-main.png)
    - Name: 자신이 저장할 연결 이름
    - Host: Database 연결 주소
    - Username: 로그인 할 유저 이름
    - Password: 로그인 할 유저 패스워드
    - Database: 접속할 데이터 베이스 이름
    - Port: 접속할 포트 번호
- 해당 정보를 입력한 후 connect 버튼을 눌러 연결을 시도 합니다.

2. 정상적으로 연결이 된 이후에는 아래의 화면이 나타납니다.
![image3](/assets/images/database/sequel-pro-database.png)
- 왼쪽 상단에서 Database를 선택 할 수 있습니다.
- 옆에 있는 메뉴에서는 테이블을 생성하고 관리할 수 있는 메뉴 입니다.
- 상단에 있는 메뉴는 아래와 같습니다.
    - Structure: 테이블 구조 조회 및 관리
    - Content: 테이블 데이터 조회 및 관리
    - Relations: 테이블 관계 조회 및 관리
    - Triggers: 트리거 조회 및 관리
    - Table info: 테이블 정보 조회
    - Query: 쿼리 작성
   

### 4. 마치며
- Sequel Pro를 다시 설치하면서 이슈를 해결하기 위해 포스팅으로 정리해 보았습니다..😋
- 저와 같은 문제를 겪고 있는 분들에게 도움이 되었으면 좋겠습니다!👍🏻

-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️✨    
