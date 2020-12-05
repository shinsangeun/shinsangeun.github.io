---
title: "[Python] Mac OS에 OpenCV & cv2 설치 하기"
date: 2020-12-05 18:00:22
layout: post
permalink: '/categories/Python/cv2-install'
categories: Python
tags: Python OpenCV cv2
---

안녕하세요!  

이번 포스팅 에서는 `OpenCV`를 사용 해서 이미지 인식하는 프로그램을 만들어 보던 중에 만나게 된 트러블 슈팅 방안에 대해 알아 보겠습니다.  
`OpenCV`와 `cv2` 라이브러리를 설치하고 import 할 때 발생한 이슈와 해결 방안에 대해 포스팅 해보 도록 하겠습니다!🤔

-----

### 이슈
- `Jupyter notebook`에서 개발을 하는데 `OpenCV`를 사용하기 위해서는 `cv2` 라이브러리가 필요 합니다.  
- 그런데 `cv2`를 import 하니 아래와 같이 에러가 발생 하였습니다. `pip`로 `cv2`를 설치 했는데 모듈이 없다구요..?🤔  
```No module named 'cv2.cv2' ```

👇🏻cv2 에러가 발생한 모습
![cv2](/assets/images/python/python_cv2.png) 


### 해결 방안
- 구글링을 통해 해결한 방법을 정리해 보겠습니다. 저는 `Mac`을 사용 하기 때문에 윈도우 환경과 다를 수도 있습니다!
  - Python 버전: `3.9.x`
  
1) 터미널을 열고 `conda`가 설치 되어 있는지 확인 합니다.
    - 설치 되어 있지 않는 경우, 터미널에 `conda`라고 입력 하면 ```zsh: command not found: conda``` 라고 해당 커맨드가 없다고 나옵니다.
    - 설치 되어 있는 경우, `conda` 명령어를 사용할 수 있는 목록과 내용들이 나타납니다.  
    👇🏻conda가 설치 된 모습
    ![conda](/assets/images/python/conda.png) 
    
2) 저는 `conda`도 설치 되어 있지 않은 상태여서 설치하는 것 부터 작성 해 보도록 하겠습니다.  
 (Conda 설치 방법)
     - `bash_profile` 파일을 엽니다: `open ~/.bash_profile`  
     - `bash_profile`의 `export PATH` 경로를 `/Users/사용자이/anaconda/bin:$PATH` 로 수정 해 줍니다.  
     - 터미널에 `source .zshrc` 명령어를 입력 하여 바뀐 내용을 적용 합니다.
     - 위 과정 까지 모두 마친 후에 터미널에 `conda` 명령어를 입력하여 정상적으로 설치가 되었는 지 확인 합니다.
   
    ![bash_profile](/assets/images/python/bash_profile.png)

3) 그 다음 `cv2`를 설치 하기 위해 가상 환경을 생성 합니다.
- `conda create --name opencv-env python=3.6`
    
    👇🏻설치가 되면 아래와 같이 나타납니다!
    ![create_virtual](/assets/images/python/create_virtual.png)

4) 설치한 가상 환경을 실행 시킵니다.
- `activate opencv-env`
    
    ![activate](/assets/images/python/activate.png)

5) 4번까지 모두 정상적으로 설치가 완료 되었으면, `OpenCV`와 다른 패키지들을 설치 합니다.
```
pip install numpy scipy matplotlib scikit-learn jupyter
pip install opencv-contrib-python
pip install dlib
```

6) 설치된 모듈을 확인 합니다.
```
import cv2
cv2.__version__
```

👇🏻아래와 같이 나타나면 cv2가 설치된 것 입니다!
![check_cv2](/assets/images/python/check_cv2.png)


-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️✨    
     
     