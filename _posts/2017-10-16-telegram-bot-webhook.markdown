---
layout:     post
title:      "텔레그램 봇 + 웹훅(Webhook)"
subtitle:   "BotFather loves me."
date:       2017-10-16 18:14:00 +0900
header-img: "assets/images/9ff2f2f01c4bd1b013.png"
published:  true
---

우..

다음에 알아보자. :kissing_heart:

### 1. 텔레그램 봇 등록

### 2. API 서버 만들기

### 3. 웹훅(WebHook) 설정

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
