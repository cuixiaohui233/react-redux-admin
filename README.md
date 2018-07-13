#### 2018-07-13 本项目一周年。review and Restructure.
#### Logo 变了，这个设计也难逃仿豆瓣的嫌疑。

# 安装：
   
   npm install 
   
   npm run build
   
# 链接：
   
   https://cuixiaohui233.github.io

# 项目

## 一、项目描述
   此项目是利用当前市场上最流行的前端框架之一react来完成的，这个项目是通过react-app+React-Router4来搭建的，分为前台页面和后台管理界面，达到了组件管理数据并通信共享的目的。本项目使用ES6语法规范和JSX语法，分为18个组件，其中后台管理系统10个组件，前台页面3个组件，用户登录、注册、个人中心5个组件，各个组件各司其职，组件的可复用性和扩展性很高。
   
## 二、技术栈:React+React-router+antd-design+axios

## 三、项目设计思路与主要功能

### 1.设计思路

   项目的起步是构思好一个后台管理系统，技术栈选用react框架也是看中了react这种v层的专门操作数据的特性，通过父组件传递数据给子组件，子组件通过props接收到父组件的信息，通过状态提升修改数据。后来发现数据的改变并没有相应页面去展示，这样就有了前台页面，拿到处理好的暂存在localStorage中的数据在前台页面中进行渲染。通过ajax来请求数据，渲染详情页。通过React-Router来实现路由的跳转，通过Redirect重定向来判	断用户的登录、注册。
   
### 2.项目详细功能

(1) 前台组件中用户登录、注册功能，按钮添加Link标签，在点击时判断用户是否登录，如果没有登录会通过react-router中的重定向Redirect到登录组件，如果登录成功，则会跳转到后台系统主页面，并且通过props将本次用户登录的信息传递给后台系统以便来根据不同的用户状态切换功能和视图;

(2) 通过this.state.states来判断当前用户的身份。会员状态，权限是只能查看后台数据信息，不能删除和修改；	管理员状态，管理员的权限是可以对数据进行增、删、改、查的操作，并且可以管理会员的状态；

(3) 前台页面的数据都是可后台数据紧密相连的，后台数据的操作会改变前台数据的状态，这一功能的实现是基于本地存储localstorage，前台数据的详情页是在componentDidMount这个生命周期中通过Ajax的方式来请求数	据来对页面进行渲染的，在登录状态下，用户可以收	藏、评分、评论，并在提交后存储到相应的登录用户数据中，并在路由跳转时传递给后台页面。

(4)后台数据的数据操作是以表格的形式展示，主要有文章、相册、产品的管理。其中增、删、改、查的功能是利用数组的split、unshift等等数组方法，通过状态提升，让父组件来处理，并利用react每次改变state就会进入render中的特性来实现的。其中图片上传由于没有数据库和服务器只能通过readAsDataURL来获取到图片的源码来实现；

## 四、项目总结

### 1.项目的优势

React专注于数据处理，减少DOM的操作，优化性能。

组件化的开发实现的代码高内聚，低耦合的特点。

### 2.遇到的问题和解决方法

  (1).在做页码切换的时候想了许多办法，最后用了ANTD的页码组件，其中的一个叫onChange的回调函数，来	监听到当前的页码数，根据页码数来规定显示数据条数。
  
  (2).使用React-Router4配置首页为跟路由‘/’，这样的话在跳转其他页面如‘/image’的时候会匹配不到,这个	问题开始很困扰，后来用了exact精确匹配，但是发现会有任意路径匹配不到，会出现空白页，这样不利于项目的	展示，所以用了React-Router中另一个组件Switch，并把根路径的route匹配在最后，不加exact，这样即实现了	页面的跳转，又实现了没有这个路由路径的时候页面的正常显示，不出现空白页。
  
  (3).当删除数据时，为了用户体验，会在用户点击删除的时候，出现提示框提示是否删除，这个简单的交互，可能	会传递三层组件，不是很好处理，像这样不好管理的复杂状态，重构代码时考虑用到redux。
  
(4).由于没有后端的支持，所有数据都要依靠localstorage来存储，但localstorage的存储空间毕竟是有限的，	当数据变得庞大的时候，就需要与后端的数据库连结。

## 五、总体感悟
  React这种专注于数据的操作，和VirturlDom，让我们省去了繁琐的DOM操作，提高性能，他能实现服务器端	的渲染，更加便于搜索引擎的优化。组件化的开发，代码的可维护性和扩展性大大提高。React-Router的使用，是	单页应用更加灵活。但是同时，我们在复杂的状态管理中处理数据，需要引入Redux,通过中间件applymiddleware	可以判断action的发起时机，通过react-redux中的connect来加强你的组件，多层嵌套的组件也可直接通过		dispatch发送action来获取reducer中的返回的数据。
