---
title: "[React] 동영상 파일 첨부 기능 추가하기 (feat. FormData)"
date: "2022-03-21 20:44:20"
template: "post"
slug: "react-file-upload"
category: "React"
tags:
- "React"
- "Next.js"
- "react file upload"
- "file attach"
description: "안녕하세요! 이번 포스팅 에서는 React.js에서 동영상을 첨부하는 기능을 구현해 보겠습니다."
---

안녕하세요!

이번 포스팅 에서는 React.js에서 [👉🏻회원 가입 기능 구현](https://shinsangeun.github.io/posts/react/react-validation)(이전글 참고) 에 이어서 동영상 이나 이미지 파일을 첨부하는 기능을 구현해 보겠습니다.

-----

### 1. 개요
게시판에 글을 쓸 때면 첨부 파일(사진, 동영상)을 올리는 기능이 있는데요.  
글을 업로드 한다고 가정 하고 React.js에서 제목, 내용, 파일 첨부 기능을 구현해 보겠습니다.

#### 항목별 조건
- 제목: 필수값, 1글자 이상 100글자 이하
- 내용: 필수값, 1글자 이상 1000글자 이하
- 파일 첨부: 선택값, 파일은 최대 1개, 300MB 이하 첨부만 가능

![react upload](../../../static/assets/images/react/react-file-upload/screenshot.png)


### 2. 화면 구현
⛔ ️styled-components 부분은 생략 하였습니다.

1. 이름 값에 입력 할 때마다 **onChangeName** 가 실행 됩니다.
2. 제목 값에 입력 할 때마다 **onChangeTitle** 가 실행 됩니다.
3. 내용 값을 입력 할 때마다 **onChangeContent** 함수가 실행 됩니다.
4. 파일 첨부를 하면 **onChangeAttach** 함수가 실행 됩니다.  
   (영상 파일 첨부 기능이므로 **type="file"** 에 `accept="video/*"` 파라미터를 추가해 줍니다.)
   
```
return(
        <>
            <h1>게시글 등록</h1>
            <Text type="text" name="name" onChange={onChangeName} placeholder={"*이름"}/>
            <Text type="text" name="title" onChange={onChangeTitle} placeholder={"*제목"}/>
            <Contents type="text" name="content" onChange={onChangeContent} placeholder={"*내용"}/>
            <FileWrap>
                <Text type="file" id="attachFile" name="attachFile" onChange={onChangeAttach} accept="video/*" placeholder={"첨부파일"} />
                <div className="text">{attachFilename === '' ? '파일을 선택해주세요' : attachFilename}</div>
                <div className="btn"><span>파일선택</span></div>
            </FileWrap>
            {(attach !== '' && isAttach)|| attachFilename !== '' ? <Close onClick={onReset}/>: <></>}
            <ConsentDescription className={"description"}>파일은 최대 1개, 300MB 까지 가능 합니다.</ConsentDescription><br/>
            <Submit onClick={() => onSubmit()}>
                <SubmitText>등록</SubmitText>
            </Submit>
        </>
    )
```


### 3. 구현 방법

#### 3-1. 초기 변수값 셋팅
- 이름, 제목, 내용, 파일에 대한 변수 값과 유효성 체크에 대한 변수 값을 **useState**로 선언 합니다.

```
const [name, setName] = useState<string>('');                        // 이름
const [title, setTitle] = useState<string>('');                      // 제목
const [content, setContent] = useState<string>('');                  // 내용
const [attach, setAttach] = useState<string>('');                    // 파일 첨부
const [attachFilename, setAttachFilename] = useState<string>('');    // 첨부한 파일 제목

const [isName, setIsName] = useState<boolean>(false);                // 이름 유효성 체크 
const [isKor, setIsKor] = useState<boolean>(false);                  // 한글 유효성 체크
const [isTitle, setIsTitle] = useState<boolean>(false);              // 제목 유효성 체크 & 작성 여부
const [isContent, setIsContent] = useState<boolean>(false);          // 내용 유효성 체크 & 작성 여부
const [isAttach, setIsAttach] = useState<boolean>(false);            // 파일 첨부 여부
```

#### 3-2. 변수별 onChange 함수 (useCallback)
1. **제목** : onChangeTitle 함수 (setTitle, setIsTitle을 셋팅 함)
   - e.target.value.length 가 1 이상 이고 100 이하 일 경우에 `setTitle`에  **e.target.value** 값 셋팅, `setIsTitle`은 **true**로 셋팅
   - 아니면 `setIsTitle`은 **false**로 셋팅 

```
const onChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
     if(e.target.value.length > 1 && e.target.value.length <= 100){
         setTitle(e.target.value);
         setIsTitle(true);
     } else {
         setIsTitle(false);
     }
 }, [])
```

2. **내용** : onChangeContent 함수 (setContent, setIsContent 셋팅 함)
   - e.target.value.length 가 1 이상 이고 1000 이하 일 경우에 `setContent`에  **e.target.value** 값 셋팅, `setIsContent`은 **true**로 셋팅
   - 아니면 `setIsContent`은 **false**로 셋팅

```
const onChangeContent = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
     if(e.target.value.length > 1 && e.target.value.length <= 1000){
         setContent(e.target.value);
         setIsContent(true);
     } else {
         setIsContent(false);
     }
 }, [])
```

3. **파일 첨부** : onChangeContent 함수 (setContent, setIsContent 셋팅 함)
   - maxSize: 300MB 파일 용량 체크
   - e.target.files[0].size 가 maxSize를 초과하면 얼럿 창 띄우고 파일 첨부 칸에 빈 메세지 표시, `setIsAttach`은 **false**로 셋팅
   - e.target.files[0].size 가 maxSize를 초과 하지 않으면 `setAttach`은 **e.target.files[0]** 파일 값 셋팅, `setIsAttach`은 **true**로 셋팅
   - 아이폰, ios, 사파리 일 경우에는 비디오 파일 이름이 이상한 값으로 들어가기 때문에 `setAttachFilename`에 **1개의 비디오** 라는 변수 값을 셋팅 함
   - 아이폰, ios, 사파리가 아닐 경우에는 `setAttachFilename`에 **e.target.files[0].name** 라는 파일 제목을 셋팅 함
   - 파일 첨부가 아무것도 없을 경우에는 `setIsAttach`를 **false**로 셋팅
   
```
const onChangeAttach = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
     const maxSize = 300 * 1024 * 1024;

     if(e.target.value.length > 1){
         if(e.target.files[0].size > maxSize){
             alert('파일 용량을 초과 하였습니다.')
             document.getElementById('attachFile').value = "";
             setIsAttach(false);
         }else{
             setAttach(e.target.files[0]);
             setIsAttach(true);

             // 파일이름
             const iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
             if(iOS) {
                 setAttachFilename("1개의 비디오");
             } else {
                 setAttachFilename(e.target.files[0].name);
             }
         }
     } else {
         setIsAttach(false);
     }
 }, [])
```

4. **등록** : onSubmit 함수
   1. formData에 이름, 제목, 내용, 파일을 추가 합니다.
   2. 유효성 검사에 따라 alert 창을 노출 합니다.
   3. 이름, 제목, 내용이 다 있으면 post 방식으로 API 주소로 데이터를 보냅니다.
   4. 데이터를 정상적으로 보내면 **/submit** 링크로 리다이렉트 시킵니다.


```
 const onSubmit = async () => {
     const formData = new FormData();
     formData.append('name', name);
     formData.append('title', title);
     formData.append('content', content);
     formData.append('file', attach);

     const config = {
         headers: {
             "content-type": "multipart/form-data",
         },
     };

     if(!isName) return alert("이름을 입력해주세요.");
     if(!isKor) return alert("이름을 한글로 입력해 주세요.");
     if(!isTitle) return alert("제목을 입력해주세요.");
     if(!isContent) return alert("내용을 입력해주세요.");

     if(isName && isTitle && isContent){
         try {
             await axios
                 .post(API 주소 입력, formData, config)
                 .then((res) => {
                     if (res.data.result === "success") {
                         location.href = "/submit";
                     }
                 })
         } catch (err) {
             console.error(err)
         }
     }
 }
```


### 5. 마치며
- React.js에서 파일을 첨부하는 기능에 대해 구현해 보았습니다.
- 내용이 도움이 되셨다면 아래 **좋아요**나 **댓글** 부탁 드립니다!👍🏻

-----

오늘 준비한 내용은 여기까지 입니다.  
이번 포스팅이 도움이 되셨거나 궁금한 점이 있으시다면 언제든지 댓글을 달아주세요!🙋🏻‍♀️✨