//说明
1.第一次务必绑定微信,扫二维码登入微信页面,然后在下载APP，到我的'点击头像',退出登录...就会弹出绑定微信的页面
2.提现脚本定时cron务必设置在凌晨零点(00:00-00:59),并且切记不要在凌晨零点(00:00-01:00)这段时间手动执行脚本
3.这个毛看运气,基本应该有1元,还有一些优惠折扣商品
4.目前有一些加密的部分还没成功(广告气泡获取,步数buff,福利中心时段元宝,微信小程序福利中心任务)
5.步数不够,可以手动做赚步数4个BUFF任务,看广告...时间维持一个小时
6.步数换健康币：1000：1,建议首页的步数转换健康币不要换,很亏！

//信息

【BOXJS】:https://raw.githubusercontent.com/CenBoMin/GithubSync/main/cenbomin.box.json
【下载APP】:https://apps.apple.com/tw/app/%E8%B5%B0%E8%B7%AF%E8%B5%9A%E9%92%B1-%E8%BF%90%E5%8A%A8%E8%B7%91%E6%AD%A5%E6%89%8B%E6%9C%BA%E8%B5%9A%E9%92%B1/id1540915960
【邀请码】:扫图片二维码加我好友
【任务定时cron】: */30 * * * *
【提现定时cron】: 0 0 * * *
【任务脚本JS】:https://raw.githubusercontent.com/CenBoMin/GithubSync/main/RUNSTEP/runstep.js
【提现脚本JS】:https://raw.githubusercontent.com/CenBoMin/GithubSync/main/RUNSTEP/cash.js
【重写引用conf】:https://raw.githubusercontent.com/CenBoMin/GithubSync/main/RUNSTEP/cookie.conf

//食用方法
1.到[重写]-[引用],加入重写引用,根据以下提示获取cookie
2.[任务cookie]:打开App,即可获取
3.[提现cookie]:打开APP,点击下方[我的]，点击“账户余额”,会跳转到微信小程序提现页面,即可获取

//获取完cookie,务必关闭重写引用conf!