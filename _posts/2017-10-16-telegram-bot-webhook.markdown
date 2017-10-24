---
layout:     post
title:      "텔레그램 봇 + 웹훅(Webhook)"
subtitle:   "BotFather loves me."
date:       2017-10-16 18:14:00 +0900
header-img: "assets/images/9ff2f2f01c4bd1b013.png"
published:  true
---

<!-- ### Bot API

The Botfather. Click for hi-res picture
This API allows you to connect bots to our system. Telegram Bots are special accounts that do not require an additional phone number to set up. These accounts serve as an interface for code running somewhere on your server.

To use this, you don't need to know anything about how our MTProto encryption protocol works — our intermediary server will handle all encryption and communication with the Telegram API for you. You communicate with this server via a simple HTTPS-interface that offers a simplified version of the Telegram API.

> [**Learn more about the Bot API here »**](https://core.telegram.org/bots)

Bot developers can also make use of our [Payments API](https://core.telegram.org/bots/payments) to accept **payments** from Telegram users around the world. -->

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
