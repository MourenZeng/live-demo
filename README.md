# 直播回放演示项目

## 项目概述
本项目尝试实现模拟小鹅通直播间。项目包含响应式前端界面和后端服务。

## 项目结构
live-demo/
├── backend/ 
│   ├── api/ 
│   │   └── videos/ 
├── frontend/ 
│   ├── src/
│   │   ├── components/ 
│   │   ├── utils/ 
│   │   ├── App.vue 
│   │   └── main.js 
│   ├── index.html
│   ├── package.json 
│   └── vite.config.js 
└── README.md

## 环境要求
- **前端开发环境**:
  - Node.js >= v20.x 
  - Vue 3 + Vite 开发栈
- **后端运行环境**:
  - PHP >= 8.0 (使用WampServer) 
  - Web服务器(Apache)

## 快速开始
### 1. 配置后端服务(WampServer)
1. 下载并安装WampServer
2. 将项目（`live-demo`目录）mlink到WampServer的`www`目录
3. 目录结构为：`www/live-demo/backend/...`
4. 启动WampServer服务

### 2. 启动前端开发服务器
```bash
cd frontend
npm install   
npm run dev  
```

## 开发历程
###  2025-5-16
正式启动直播回放项目!!!说实话有点忐忑。之前没有了解过前端的相关计算，对 Vue 和 Vite 的了解几乎为零，有点压力山大...

作为前端新手，还是决定先系统学习核心知识，先去看看Vue3怎么用吧，于是打开了 B 站（参考vue3入门教程：https://www.bilibili.com/video/BV1TLjBzyEG2?spm_id_from=333.788.videopod.episodes&vd_source=0dd4574dd2c46a1e4a138f3606b500b5&p=2）

01_为什么选择Vue框架：Vue是渐进式框架
02_Vue简介：响应式数据绑定
03_Vue API风格：Options API vs Composition API
04_Vue开发前的准备：配置环境果然是最难的...
05_Vue项目目录结构：src/components

###  2025-5-17
06_模板语法：“插值”
07_属性绑定：v-bind:src => :src
08_条件渲染：v-if vs v-show 
09_列表渲染：v-for 
10_通过key管理状态：key


###  2025-5-18
11_事件处理：@click="togglePlay"
12_事件传参：传视频 ID
13_事件修饰符：.stop.prevent
14_数组变化侦测：Vue 如何监听数组变化

终于大概理解了 vue3 的逻辑。
感觉Composition API​​是重点，ref()、reactive()用于处理响应式数据，computed、watch是监听变化的，onMounted, onUnmounted用于管理生命周期
使用Vite生态​​
配置 vite.config.js 

###  2025-5-19
无所事事的一天，实验报告实验报告

###  2025-5-20
赶工实验报告ddl

###  2025-5-22
感觉时间有点紧的样子，之前学过数据库系统，后端还是使用wampserver吧...

配置 Hosts - 打开 Hosts 文件​​ - 按下 Win + S，输入 ​​记事本​​ → 右键选择 ​​以管理员身份运行​​
在记事本中点击 ​​文件 → 打开​​，导航到：
C:\Windows\System32\drivers\etc\hosts
修改
IPv4 地址
127.0.0.1    localhost
127.0.0.1    live.test

IPv6 地址
::1          localhost
::1          live.test

###  2025-5-23
根据示例，考虑到直播端和观看端的设备类型（安卓竖屏和电脑横屏），如果一个人用手机观看，那么就应该使用两个部分来展示直播（只有上方的直播视频区域和下方评论区域，各种小组件位于其上方，小组件的部分暂时不考虑），如果一个人用电脑观看，那么就应该使用第三个部分来展示直播（包括左侧上方直播视频区域和左侧下方的礼物区，以及右侧的评论区，小组件的部分暂时不考虑）， 那么就靠需要考虑一点，如果一个手机用户观看电脑直播，那么由于分辨率不同的原因，那么如何在竖屏手机显示横屏视频呢？同理，电脑用户观看手机视频，怎么实现横屏显示竖屏视频呢？

先判断观看端的设备，然后再展示布局

###  2025-5-24
围棋课补课
编写周一要展示的ppt，不知道是谁要推导Supervised Discrete Hashing的所有优化公式还要复现论文成果，哭...

感觉推Supervised Discrete Hashing公式比debug还痛苦...

###  2025-5-25
推导Supervised Discrete Hashing的优化公式 + 制作ppt中...

###  2025-5-26
终于把论文里的结果复现了（虽然是ai写的...），不知道还来不还得及

本地资源无法加载，403报错
配置了httpd.conf，ok

###  2025-5-27
项目好像出现了个bug，不知道为什么界面一直加载不出来，调了一天也调不出来

###  2025-5-28
调了2天...界面渲染是空白的，控制台也没有显示错误，network上明明是加载了资源的，php好像也没问题，好奇怪

心好累...

###  2025-5-29
调了3天，进阶功能没指望了...

基础功能应该也没指望了，哭
