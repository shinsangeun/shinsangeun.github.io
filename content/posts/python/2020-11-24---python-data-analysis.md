---
title: "[Python] 데이터 분석 참고 자료"
date: "2020-11-24 01:30:22"
template: "post"
draft: false
slug: "data-analysis"
category: "Python"
tags: 
  - "Data-analysis"
  - "Python"
description: "이번 포스팅은 Python을 이용 해서 개발 시에 많은 도움이 되었던 글들을 소개해 보고자 합니다."
---

안녕하세요!

이번 포스팅은 `Python`을 이용 해서 개발 시에 많은 도움이 되었던 글들을 소개해 보고자 합니다.  
부족한 자료 이지만, 데이터 분석과 머신 러닝을 공부할 때 유용 하게 사용 했던 함수와 블로그 자료 모음 입니다.  

여러분 에게도 유용 하게 쓰였으면 좋겠습니다!😄

-----
#### 1. Jupyter notebook 엔터
- 엔터: \

#### 2. 문자열 자료형
- [https://wikidocs.net/13](https://wikidocs.net/13)

#### 3. 일별 데이터를 주별로 묶기
- [https://jsideas.net/daily_to_weekly/](https://jsideas.net/daily_to_weekly/)

#### 4. lambda 함수
- [https://wikidocs.net/64](https://wikidocs.net/64)

#### 5. 내장 함수
- [https://wikidocs.net/32#all](https://wikidocs.net/32#all)

#### 6. Data 컬럼 쪼개고 새로운 컬럼으로 만들기
- [https://www.geeksforgeeks.org/python-pandas-split-strings-into-two-list-columns-using-str-split/](https://www.geeksforgeeks.org/python-pandas-split-strings-into-two-list-columns-using-str-split/)

#### 7. Timestamp 시간 변환
- [https://blog.doosikbae.com/89](https://blog.doosikbae.com/89)

#### 8. 시간 관련 함수
- 5분 마다:
``` df2.resample(rule='5T') ```

- 5분마다 평균 값:
``` df2.resample(rule='5T').mean() ```

- 5분마다 갯수:
``` df2.resample(rule='5T').count() ```

#### 9. 머신 러닝
- 랜덤 포레스트(Random Forest)
  - ``` random_state=0 ``` 
     - 데이터 분류 시, 해당 값으로 설정하면 재 수행 할때마다 동일한 예측결과를 출력 함
  - [랜덤 포레스트 vs 고객 이탈 예측을 위한 신경망](https://towardsdatascience.com/random-forest-vs-neural-networks-for-predicting-customer-churn-691666c7431e)
  
- 의사 결정 트리(Decision Tree)
  - [그래프](https://www.scaler.com/topics/decision-tree-algorithm/)
    - [Graphviz 패키지 설치](https://graphviz.org/download/)
    - [환경 변수 설정 방법 1](https://stackoverflow.com/questions/35064304/runtimeerror-make-sure-the-graphviz-executables-are-on-your-systems-path-aft)
    - [환경 변수 설정 방법 2](https://datascience.stackexchange.com/questions/37428/graphviz-not-working-when-imported-inside-pydotplus-graphvizs-executables-not)
    - [그래프 그리기](https://pythonprogramminglanguage.com/decision-tree-visual-example/)
     
-----


오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️💡
