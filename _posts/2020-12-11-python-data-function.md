---
title: "[Python] 데이터 분석 함수 정리"
date: 2020-12-11 14:30:22
layout: post
permalink: '/categories/Python/data-function'
categories: Python
tags: Data-analysis Python
---

안녕하세요!

이번 포스팅은 `Python`으로 데이터 분석 시, **데이터 전처리**와 **시각화**를 하기 위해 사용 하는 함수에 대해 정리해 보도록 하겠습니다.🧚🏻‍♀️

-----
### 1. 필요한 라이브러리 import
```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
```

### 2. csv 파일 불러오기
```python
train=pd.read_csv('./train.csv')
test=pd.read_csv('./test.csv')
```

### 3. 데이터의 타입 확인 하기
```python
type(train)
type(test)
```

### 4. train 위쪽 데이터 확인
```python
train.head()
``` 

### 5. train 데이터의 행,열 갯수 확인
```python
train.shape
```

### 6. train의 칼럼별 결측치 데이터 합계 (NaN 데이터)
```python
train.isnull().sum()
```

### 7. 안 쓰는 칼럼 삭제
```python
train = train.drop(['test','test1','test2'], axis=1)
```

### 8. 비어 있거나 잘못된 값인 결측치 제거
 - fillna 함수: NaN을 특정 값으로 대체하는 함수
 - "Age"의 결측치를 성별로 groupby 하여 Age의 평균 값으로 채움
```python
train["Age"].fillna(train.groupby("Sex")["Age"].transform("mean"), inplace=True)
```

 - 'Origin' 문자열로 NaN 채우기
```python
chipo['description'].fillna('Origin',inplace=True)
chipo
```

### 9. 그래프 그리기
```python
%matplotlib inline
import seaborn as sb
sb.set()
```

### 10. 차트 생성
```python
# feature에 따라 죽었는지 살았는지 bar chart 생성
def bar_chart(feature):
    survived = train[train['Survived']==1][feature].value_counts()
    print("survived:", survived)
    dead = train[train['Survived']==0][feature].value_counts()
    print("dead:", dead)
    df = pd.DataFrame([survived, dead])
    df.index = ['Survived', 'Dead']
    df.plot(kind='bar', stacked=True, figsize=(10,5))
```

### 11. 컬럼명에 따른 바 차트 그리기
```python
bar_chart('Age')
```

### 12. 중복 행 데이터 제거
 - unique: 특정 컬럼의 중복 행 데이터 제거 하는 함수
```python
tmp_arr = data['컬럼명'].unique()
```

### 13. 특정 열의 데이터 치환
- strip([charset]): 문자열 양끝 제거 함수
    - chars 지정이 없으면 공백 문자를 제거. 지정 되어있으면 chars의 모든 조합을 제거.
- lstrip(chars]) : 문자열 왼쪽 제거 함수
    - chars 지정이 없으면 공백 문자를 제거. 지정 되어있으면 chars의 모든 조합을 제거.
- rstrip([chars]): 문자열 오른쪽 제거 함수
    - chars 지정이 없으면 공백 문자를 제거. 지정 되어있으면 chars의 모든 조합을 제거.
- $2.39 -> 2.39 로 치환
```python
data['price'] = data['price'].str.lstrip('$')
data['price'].astype(float)
data
```

### 14. 엑셀로 파일 저장
```python
# 엑셀로 파일 저장
file_path="./data_result.csv"
result_tmp.to_csv(file_path,sep=',')
```

-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️✨    
