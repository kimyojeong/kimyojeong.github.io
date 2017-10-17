---
layout: post
title:  "텔레그램 봇 + 웹훅(Webhook)"
date:   2017-10-16 18:14:00 +0900
categories: articles
published: false
---
### 1. 텔레그램 봇 등록

### 2. API 서버 만들기

### 3. 웹훅(WebHook) 설정 
{% highlight markdown %}
curl
 -H "Content-Type:application/x-www-form-urlencoded;charset=UTF-8"
 -X POST
 --data "url={{ site.url }}/apps/telegram/bot"
 https://api.telegram.org/bot123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghi/setWebhook
 --cacert cacert.pem
{% endhighlight %}

### 참고
우.. 무자게 많이 검색했던 것 같은데 기억이 안난다.

1. Telegram Bot API [https://core.telegram.org/bots/api](https://core.telegram.org/bots/api){:target="_blank"}
2. 사랑과 존경을 담아 스택오버플로. :kissing_heart:
