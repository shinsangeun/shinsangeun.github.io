---
title: "[React] React 프로젝트 생성 & 실행 방법"
date: "2021-04-27 23:42:11"
template: "post"
draft: false
slug: "react-create"
category: "React"
tags:
  - "React"
  - "react-app"
description: "요즘 `React.js`를 이용해서 프로젝트를 진행 중이라 다시 시작하는 마음으로 앞으로 튜토리얼 형식으로 포스팅을 정리할 예정입니다."
---

안녕하세요!

요즘 `React.js`를 이용해서 프로젝트를 진행 중이라 다시 시작하는 마음으로 앞으로 튜토리얼 형식으로 포스팅을 정리할 예정입니다.  
그래서 이번 포스팅 에서는 `React` 프로젝트를 **생성**하고, **실행**하는 방법에 대해 알아보도록 하겠습니다.!🤔

-----
- 저는 Mac OS 환경에서 Intellij IDE를 사용하고 있습니다. 본인이 사용하는 툴에 따라 아래의 방법을 따라 하시면 됩니다!


### 프로젝트 생성
1. 터미널에서 `React 앱`을 생성하기 위한 모듈을 설치 합니다. `-g` 옵션으로 시스템 공통 폴더에 설치 됩니다.
```shell
npm install -g create-react-app
```
![react-create](static/images/react/react_create.png)

* 위의 명령어 실행 시, 아래처럼 권한 문제로 설치에 실패 한다면 `sudo` 명령어로 권한을 부여해 줍니다.
![react-create-err](static/images/react/react_create_err.png)
  
* 명령어 실행  
```shell
sudo npm install -g create-react-app
```

![react-create-sudo](static/images/react/react_create_sudo.png)  


2. 명령어 실행이 완료 되면, 프로젝트 이름을 입력해서 프로젝트를 생성 합니다.
- React 프로젝트는 npm 모듈 설치 하듯이 명령어 한 줄이면 알아서 프로젝트 구조가 생성이 되어 편리합니다!
```shell
create-react-app "프로젝트 이름"
```
![react-create-app](static/images/react/react_create_app.png)

- 자신이 생성한 **프로젝트 이름** 해당 경로로 이동하여 프로젝트가 제대로 생성이 되었는지 확인 합니다.
```shell
cd "프로젝트 이름"
```


### 프로젝트 실행
- 생성한 프로젝트의 루트 경로에 `package.json` 이라는 파일이 생성 되었습니다.
![react-script](static/images/react/react_script.png)
  
- `script`에 작성된 명령어로 프로젝트를 실행 할 수 있습니다. 
- 프로젝트 실행 방법은,  
  (1) 왼쪽의 재생 버튼을 눌러 프로젝트를 실행 합니다.  
  (2) 터미널에서 명령어를 입력 합니다.
  ```shell
  npm run start
  ```
- 명령어를 실행하면 터미널에 프로젝트가 생성 되었다고 알려 줍니다.
  ![react-start](static/images/react/react_start.png)
  
- localhost:3000 (기본포트는 3000) 주소로 들어가면 프로젝트가 실행 된것을 확인 할 수 있습니다!
  ![react-app](static/images/react/react_app.png)


-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️✨    

