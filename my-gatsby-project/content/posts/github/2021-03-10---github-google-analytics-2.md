---
title: "[Github] Google analytics & Search Console 확인 하기"
date: "2021-03-10 17:22:30"
template: "post"
draft: false
slug: "github-google-analytics-2"
category: "Github"
tags:
    - "Github"
    - "Google-analytics"
    - "Google-search-console"
description: "이번 포스팅 에서는 `Google Analytics`를 확인하는 방법과, `Google search console`에서 보이는 데이터에 대해 포스팅 해보도록 하겠습니다!"
---

안녕하세요!

개발 블로그를 시작하고 나서 처음으로 했던 것중 하나가 [👉🏻Google Analytics 연동](https://shinsangeun.github.io/categories/Github/github-google-analytics) 입니다.
그 이후로 블로그에 글을 작성 할 때마다 궁금해서 애널리틱스 창을 확인해 보곤 합니다.

그래서 이번 포스팅 에서는 `Google Analytics`를 확인하는 방법과, `Google search console`에서 보이는 데이터에 대해 포스팅 해보도록 하겠습니다!

-----
## 1. Google analytics
- 처음에는 제 블로그에 아무도 방문해 주시지 않아서 분석할 자료조차 없었습니다.🥲
- 그래서 저 혼자만 확인을 하고 말았었는데, 요즘 블로그 포스팅을 작성하면서 확인해 보니 검색 수도 많아지고 방문자 수도 서서히 많아지는게 보이더라구요.
- 엄청 많은 조회수가 있지는 않지만, 연동하고 나서 확인하는 방법에 대해 알려드리겠습니다!
![analytics-data](/assets/images/google/google-analytics-data.png)

- 먼저 Google Analytics 웹에 접속 하시면, 위와 같은 창이 나타 납니다. `시간별 사용자수`, `사용자가 방문하는 페이지`, `사용자 위치 파악` 등 제 블로그에 방문해 주신 분들의 데이터를 한눈에 볼 수 있습니다.

- 이 중에서 눈에 띈 데이터는 `사용자가 방문하는 페이지` 입니다. 어떤 포스팅이 가장 인기가 많은지 파악 할 수 있고 그 주제에 맞게 포스팅을 추가할 수 있기 때문입니다.
![analytics-data2](/assets/images/google/google-analytics-data2.png)
- 요즘 제 블로그에서는 [👉🏻코딩 테스트 알고리즘 강의 추천](https://shinsangeun.github.io/categories/Algorithm/online-lecture) 블로그가 페이지 뷰수가 많이 있더라구요. IT 개발자 대우가 좋아지다 보니, 코딩에 대한 관심도가 많은 것을 알 수 있었습니다.

- 구글 애널리틱스는 실시간 데이터를 유용하게 나타내주는 결과 인것 같습니다. `보고서` 메뉴에는 여러가지 정보를 확인 할 수 있는데요.
- 이중에서 `잠재고객>개요` 메뉴에 보시면 `날짜별 사용자`, `신규 방문자`, `세션`, `평균 세션시간`, `인구 통계` 등 다양한 정보를 확인하실 수 있습니다.
![analytics-data3](/assets/images/google/google-analytics-data3.png)

- `인구 통계` 메뉴에 보면, 아직 많이 부족한 저의 블로그에 `한국`, `미국`, `폴란드`에서 방문을 해주셨네요!🧸 감사합니다! Thank you!🎉
![analytics-data4](/assets/images/google/google-analytics-data4.png)
 
 
## 2. Google Search Console
- Google Search Console 도구와 보고서를 사용하면 사이트의 검색 트래픽 및 실적을 측정하고, 문제를 해결하며, Google 검색결과에서 사이트가 돋보이게 할 수 있습니다.
- Google에 검색을 했을 때 블로그가 검색 결과에 나타나도록 `sitemap.xml`을 설정해 놓으신 다음에, `Search Console`을 이용하면 `Google Analytics`와 비슷한 정보를 얻을 수 있게 됩니다.

### 2-1. 개요
![google-search-console](/assets/images/google/google-search-console.png)
- `개요` 페이지 에서는 `총 웹 검색결과 클릭수`, `색인 생성 범위`를 확인 할 수 있습니다.
- 처음에는 웹 검색결과 클릭수도 그닥 높지 않았었는데 포스팅을 늘려갈 수록 점차 클릭수가 높아진 것을 확인할 수 있었습니다! 점점 클릭수가 높아지니 뿌듯한 기분이 들었고 포스팅을 자주 해야겠다는 생각이 들었습니다..🤓

### 2-2. 실적
![google-search-console2](/assets/images/google/google-search-console2.png)
- `실적` 페이지로 가면 `총 클릭수`, `총 노출수`에 대한 클릭수가 날짜 별로 나타납니다.
- 또한 검색어에 대한 클릭수, 노출수가 표시됩니다. `페이지 별`, `국가별`, `기기별`, `검색 노출별`, `날짜 별`로 클릭수와 노출수가 나타납니다.

![google-search-console3](/assets/images/google/google-search-console3.png)
- 구글 애널리틱스 결과와 마찬가지로  [👉🏻코딩 테스트 알고리즘 강의 추천](https://shinsangeun.github.io/categories/Algorithm/online-lecture) 검색 결과 클릭수와 노출수가 가장 많은것을 알수 있었습니다.
- 제가 보려고 정리한 내용인데 많은 사람들이 포스팅을 읽어주시다니 너무 감사한 기분이 들고, 더 좋은 내용을 포스팅 해야겠다는 생각이 들었습니다.


## 3. 마치며
- 아직 부족한 저의 블로그에 많은 분들이 방문해 주시는것 같아서 너무 감사하고 뿌듯 합니다..❤️
- 앞으로도 더 좋은 내용을 포스팅 하고, 꾸준히 개발 블로그를 작성 하도록 하겠습니다! (갑분 다짐..!!🙆🏻‍♀️)

-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🤖✨