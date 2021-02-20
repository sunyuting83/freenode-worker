## 手抓节点的烹饪方法 CFWorks版.

### 原料说明

| 名称  |  原料类型  | 说明 |
| ------------ | ------------ | ------------ |
| [subscribed](https://github.com/JACKUSR2089/v2ray-subscribed) | 主料 | [gayhub](https://github.com)日推发现 |
| [works](https://developers.cloudflare.com/workers/) | 辅料 | 免服务器的JS神器 |

### 烹饪说明
1. 在hub日推发现了主料，但是发现皮厚、籽多、粗枝大叶。需要精心改刀取菜芯入菜。
2. 用raw摘取hub的菜苗是text，用JS爆炒很方便。再加上Works这么美味的免服务器辅料。
3. 突然想起来我还会JS爆炒法，动手。

### 烹饪方法
1. 在CloudFlare新建一个Works
2. 复制app.js全部内容到新建的Works
3. 点击保存

### 餐具推荐
[Qv2ray](https://github.com/Qv2ray/Qv2ray)

### 食用指南
复制Works地址，在餐具中添加新订阅
> 配合v2rss食用
```
# 复制Works地址到v2list文件内
# 安装版位置:
/etc/v2rss/v2list

# Docker版位置：容器内
/home/v2list

# v2list格式说明
http://订阅地址1
http://订阅地址2
http://订阅地址3
https://t.me/s/频道名称1
https://t.me/s/频道名称2
https://t.me/s/频道名称3
```