---
layout:     post
title:      "텔레그램 봇 + 웹훅(Webhook)"
subtitle:   "BotFather loves me :kissing_heart:"
date:       2017-10-16 18:14:00 +0900
header-img: "assets/images/2017/20171016_botfather.png"
published:  true
---

올봄에 MS 빌드 2017 참석 후 이래 저래 고민이 많다.

너무 지난 프로젝트 포스팅이지만 C# 봇앱 템플릿을 보니 다시 또 설렌다.

미루고 또 미루고 있지만 아이디어를 분출할 길을 찾아 차근차근 지난 관심사 포스팅하는 데서부터 기분 좀 내 봐야겠다.

---

### 텔레그램과 이벤트, 그리고 Botfather

그러니까 작년 겨울(16년 1월), 회사에서 텔레그램 채널을 이용한 이벤트를 진행하였다.

채널 가입 회원에게 인게임 아이템을 주는 이벤트로, 사용자나 운영자나 매우 번거롭고 헛점이 많은 이벤트라 방법을 찾던 중 **텔래그램 봇** 개발을 시작했다.

이미 기획이 완료된 후 업무 요청이 들어온 터라 R&amp;D 결과를 적용할 수 없었지만 잘 만들어진 오픈 소스를 활용한 상호작용은 언제나 기분 좋은 만족감을 준다.

**작업 전 만든 화면 설계 원페이지.pptx**

[![텔레그램 봇 개발 계획.](/assets/images/2017/20171016_pptx.png){:style="width: 200px"}](/assets/images/2017/20171016_pptx.png){:target="_blank"}

**그리고 최종 작업물.jpg**

[![텔레그램 봇 화면](/assets/images/2017/20171016_app.png){:style="width: 200px"}](/assets/images/2017/20171016_app.png){:target="_blank"}

**What can this bot do?**

> STEP 1. 텔레그램 채널 가입`(가입 여부 확인이 되는지는 다시 알아 봐야겠다.)` 화면 캡쳐 이미지 전송
> 
> STEP 2. 인증코드를 포함한 URL을 발급
> 
> STEP 3. 해당 URL로 이동 후 로그인 시 자동 이벤트 참여 완료
> 
> STEP 4. 처리 결과 알림

문의사항 자동 응답이나 인게임 아이템 검색과 같은 전체 서비스로 확대하고 싶었지만 여기에서 정리하였다.

---

### 1. 텔레그램 봇 등록`TODO`

<!-- 
#### Bot API`TODO`
> [**Learn more about the Bot API here »**](https://core.telegram.org/bots)

Bot developers can also make use of our [Payments API](https://core.telegram.org/bots/payments) to accept **payments** from Telegram users around the world. -->

### 2. API 서버 만들기`TODO`

### 3. 웹훅(WebHook) 설정`TODO`

``` shell
curl
 -H "Content-Type:application/x-www-form-urlencoded;charset=UTF-8"
 -X POST
 --data "url={{ site.url }}/apps/telegram/bot"
 https://api.telegram.org/bot123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghi/setWebhook
 --cacert cacert.pem
```

### 참고

1. Telegram Bot API [https://core.telegram.org/bots/api](https://core.telegram.org/bots/api)
