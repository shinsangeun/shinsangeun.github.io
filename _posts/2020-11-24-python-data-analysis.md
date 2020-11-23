---
title: "[Python] 데이터 분석 참고 자료"
date: 2020-11-24 01:30:22
layout: post
permalink: '/categories/Python/data-analysis'
categories: Python Data-analysis
---

안녕하세요!

이번 포스팅은 `Python`을 이용 해서 개발 시에 많은 도움이 되었던 글들을 소개해 보고자 합니다.  
부족한 자료 지만, 제가 데이터 분석 시에 유용 하게 사용 했던 함수와 블로그 자료 모음 입니다.  

여러분 에게도 유용 하게 쓰였으면 좋겠습니다!😄

-----
#### 1. Jupyter notebook 엔터
- 엔터: \

#### 2. 문자열 자료형
- https://wikidocs.net/13

#### 3. 일별 데이터를 주별로 묶기
- https://jsideas.net/daily_to_weekly/

#### 4. lambda 함수
- https://wikidocs.net/64

#### 5. 내장 함수
- https://wikidocs.net/32#all

#### 6. Data 컬럼 쪼개고 새로운 컬럼으로 만들기
- https://www.geeksforgeeks.org/python-pandas-split-strings-into-two-list-columns-using-str-split/

#### 7. Timestamp 시간 변환
- https://blog.doosikbae.com/89

#### 8. 시간 관련 함수
- 5분 마다
```
df2.resample(rule='5T')
```

- 5분마다 평균 값
```
df2.resample(rule='5T').mean()
```

- 5분마다 갯수
```
df2.resample(rule='5T').count()
```

-----


오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️💡
