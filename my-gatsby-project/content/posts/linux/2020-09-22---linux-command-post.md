---
title: "[Linux] 리눅스 명령어 정리(1)"
date: "2020-09-28 12:45:12 -0400"
template: "post"
draft: false
slug: "linux-command-1"
category: "Linux"
tags:
    - "Linux"
    - "Command"
description: "이번 포스팅에서는 자주 사용되는 기본 `Linux 명령어`에 대해 정리 해 보도록 하겠습니다!🗣"
---

안녕하세요!  

이번 포스팅에서는 자주 사용되는 기본 `Linux 명령어`에 대해 정리 해 보도록 하겠습니다!🗣 

-----

# 목차
[1. 파일 관련](#파일-관련)  
[2. 폴더 관련](#폴더-관련)  
[3. vi 에디터 줄 번호 보이기](#vi-에디터-줄-번호-보이기)  
[4. ^M 문자 지우기](#^M-문자-지우기)  
[5. 리눅스 버전 확인](#리눅스-버전-확인)

-----

### 1. 파일 관련
##### 1-1. 파일 권한 설정
- 대상 파일과 디렉토리의 사용 권한을 변경하기 위해 사용 합니다.

```
chown -R (R: 하위 파일과 디렉토리 권한 변경)
```

```
chmod -R 777 파일명 
```

##### 1-2. 파일 압축/풀기
- 파일 압축 하기 (tar 파일)
```
tar -cvf [tar파일] [압축할 파일/디렉토리]
```
  
- 파일 압축 하기 (zip 파일)
```
zip [압축 파일명].zip [압축할 파일/디렉토리]
```

- 파일 압축 풀기 (tar 파일)
```
 tar zvxf  file.tar.gz 
```
    
- 파일 압축 풀기 (zip 파일)
```
unzip [압축 파일명].zip
```
    

### 2. 폴더 관련
##### 2-1. 폴더 복사
```
cp -r [원본폴더] [목적지 폴더]
```

##### 2-2. 폴더 이동
```
 mv [원본폴더] [목적지폴더]
```


### 3. vi 에디터
##### 3-1. 관련 명령어 정리
- 리눅스 환경에서 자주 사용되는 vi 에디터에 관한 명령어들 입니다.

|    명령어    |             내용            |
|:----------:|:--------------------------:|
|   :snu     |       파일 줄 번호 보이기       | 
|   :wq!     |   vi 에디터 종료 (수정 후 저장)  |
|   :q!      | vi 에디터 종료 (수정 한것 저장 X) |
|    dd      |            삭제              |
|    ii      |            입력              |



### 4. ^M 문자 지우기
##### 4-1. ^M 문자 지우기
- 윈도우에서 리눅스로 전송한 파일에서 간혹 파일 뒤에 ^M문자가 있어서 실행에 에러가 나는 경우가 있습니다. 이럴 경우에는 ^M 문자를 제거 해줘야 정상적으로 실행 됩니다.

```
 :%s/^M$//g
```
- 위의 정규식에서 빨간색으로 된 ^M 이라는 문자열을 직접 글자 그대로 타이핑하면 안됩니다. 반드시 키보드의 Ctrl+V 키와 Ctrl+M 키를 눌러서 간접적으로 입력해야 합니다. 
- Ctrl키를 누른 상태에서 vm 이라는 2글자를 소문자로 연속으로 입력하면 됩니다.

##### 4-2. ^M 있는지 확인 하기
- 4-1.에서 수정한 파일을 확인 하기 위해 사용 합니다.
```
 vi -b 스크립트파일명
```


### 5. 리눅스 버전 확인

##### 5-1. 리눅스 버전 확인
- 사용 중인 리눅스의 버전을 확인 하기 위한 명령어 입니다.
```
cat /etc/*release*
```


-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️💡