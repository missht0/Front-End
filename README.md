**记录一些遇到的问题**

## 虚拟 dom

### 什么是虚拟 dom

实际上就是对真实 dom 的抽象树，通过对象内的属性记录节点信息，最后可以通过 render 将虚拟 dom 渲染到真实浏览器环境上

有了虚拟 dom 后，就可以通过 diff 算法不必对全部的真实 dom 进行操作，只重新渲染那些发生改变的 dom

<br/>

### 虚拟 dom 操作和真实 dom 操作的效率

实际上操作虚拟 dom 最后还是要操作那些需要改变的真实 dom，那如果我需要修改某个 dom 的值，直接通过原生 JS 的语法去修改 dom，效率一定是高于虚拟 dom 的

<br/>

### 为什么要虚拟 dom

1. **开发效率问题**

过去那样不管是原生还是 jQuery 通过大量的 JS 操作更新 dom 的方式，开发效率实在是太低了，于是后来逐渐出现了模板语法并成为前端开发框架的主流，使用模版语法我们在确定结构之后只需要关注数据层的变化，当数据更新时重新渲染模版。

2. **render 全量渲染提高效率**

然而这个时候问题就来了，因为 render 渲染是全量的，如果没有虚拟 dom，就需要在每次数据发生变化时，将整个模版重新渲染。虚拟 dom 的出现就解决了这个问题，模版和真实 dom 之间隔了一层虚拟 dom 层，当数据更新时先通过 diff 算法找出那些发生变化的 dom，然后再单独操作对应的真实 dom，这样至少能在少量更新 dom 时效率优于直接操作真实 dom，当然在大量到几乎相当于全量更新时，虚拟 dom 自然还是不如模板引擎

3. **跨平台**

虚拟 dom 的存在让开发操作视图与真实的环境解耦，不管是在各种环境我们只需要修改虚拟 dom，不必关心虚拟 dom 如何将数据渲染到不同环境的视图上

## 瀑布开发和敏捷开发的区别

瀑布式开发和敏捷开发是两种不同的软件开发方法论，它们在项目管理和开发过程中有着不同的特点和重点。

瀑布式开发是一种传统的软件开发方法，它按照线性的顺序进行开发，包括需求分析、设计、编码、测试和维护等阶段。每个阶段都有明确的工作目标和交付物，且各个阶段之间有严格的依赖关系。在瀑布式开发中，项目的需求和规格在开始时就需要确定，并且在整个开发过程中很少改变。这种方法适用于对需求变化较少、项目规模较大、开发周期较长的项目。

敏捷开发是一种迭代和增量的开发方法，它强调团队合作、快速响应变化和持续交付。敏捷开发将开发过程分为多个迭代周期，每个周期称为一个迭代，每个迭代都包括需求分析、设计、编码、测试和评审等阶段。在每个迭代结束时，团队会根据客户反馈和需求变化进行调整和优化。敏捷开发注重快速交付可用的软件，以便及时获取用户的反馈和需求变更。这种方法适用于对需求变化频繁、项目规模较小、开发周期较短的项目。

总结来说，瀑布式开发强调计划和文档，适用于需求稳定的大型项目；而敏捷开发强调团队合作和快速交付，适用于需求变化频繁的小型项目。选择哪种方法应根据项目的特点和需求来决定。

## 设计模式

在前端开发中，设计模式是一种被广泛应用的编程思想，它提供了一种结构化的方法来组织和管理代码。下面介绍几种前端中最重要的设计模式：

1. 单例模式（Singleton Pattern）：

   - 基本介绍：单例模式是一种创建型模式，它确保类只有一个实例，并提供一个全局访问点来访问该实例。
   - 应用场景：适用于需要全局共享的对象，例如全局的配置对象、日志对象等。
   - 基于 JavaScript 的实现思路：

     ```javascript
     var Singleton = (function () {
       var instance

       function createInstance() {
         // 创建对象的代码
         return object
       }

       return {
         getInstance: function () {
           if (!instance) {
             instance = createInstance()
           }
           return instance
         },
       }
     })()
     ```

2. 观察者模式（Observer Pattern）：

   - 基本介绍：观察者模式定义了一种一对多的依赖关系，当一个对象的状态发生改变时，其依赖的对象都会收到通知并自动更新。
   - 应用场景：适用于需要实现事件监听和消息传递的场景，例如 DOM 事件、数据绑定等。
   - 基于 JavaScript 的实现思路：

     ```javascript
     function Subject() {
       this.observers = []
     }

     Subject.prototype.addObserver = function (observer) {
       this.observers.push(observer)
     }

     Subject.prototype.removeObserver = function (observer) {
       var index = this.observers.indexOf(observer)
       if (index !== -1) {
         this.observers.splice(index, 1)
       }
     }

     Subject.prototype.notifyObservers = function () {
       this.observers.forEach(function (observer) {
         observer.update()
       })
     }

     function Observer() {
       this.update = function () {
         // 处理更新逻辑
       }
     }

     var subject = new Subject()
     var observer1 = new Observer()
     var observer2 = new Observer()

     subject.addObserver(observer1)
     subject.addObserver(observer2)

     subject.notifyObservers()
     ```

3. 工厂模式（Factory Pattern）：

   - 基本介绍：工厂模式是一种创建型模式，它提供了一个统一的接口来创建对象，而不需要直接使用 new 关键字进行实例化。
   - 应用场景：适用于根据不同的条件创建不同的对象，例如创建各种类型的按钮、弹窗等。
   - 基于 JavaScript 的实现思路：

     ```javascript
     function Button() {
       this.render = function () {
         // 渲染按钮的代码
       }
     }

     function Input() {
       this.render = function () {
         // 渲染输入框的代码
       }
     }

     function createUI(type) {
       if (type === 'button') {
         return new Button()
       } else if (type === 'input') {
         return new Input()
       }
     }

     var button = createUI('button')
     button.render()
     ```

这些设计模式在前端开发中经常被使用，能够帮助我们更好地组织和管理代码，提高代码的可维护性和重用性。但需要注意的是，设计模式并非万能的解决方案，需要根据具体的业务场景和需求来选择合适的模式。

## 单点登录 SSO

使用场景是在公司系统逐渐增加时，为了简化用户在多个系统间的登录流程，实现：**一处登录，处处登录；一处注销，处处注销；**

实现思路是将登录注册模块分离出单独的系统，每当用户需要在某个系统（以 A 系统为例）登录时，跳转到这个登录系统（SSO 系统），检测登录状态。

- 如果是未登录就在这个系统进行登录，登录成功后返回一个`登录凭证`
- 如果是已登录就返回一个`登录凭证`
- 携带这个登录凭证返回 A 系统

为了防止 15 天过期的 token，用户 14 天能自动登录，15 天就要重新登录这样的不良体验，token 应该对于活跃用户及时刷新。

## 基于非对称加密实现限制登录

场景是在限制特定登录环境时，使用特定环境传入私钥进行非对称加密传输 cipher

1. 客户端初次登录时携带`公钥`
2. 服务端生成`会话秘钥`，使用公钥加密，传回给客户端
3. 客户端用私钥解密，取出会话秘钥
4. 再次发送登录请求，携带会话秘钥，登录成功

## PostMessage 跨窗口通信

PostMessage 是 HTML5 中提供的一种跨窗口通信的机制，它允许在不同窗口、标签页或 iframe 之间传递消息。

PostMessage 使用步骤：

1. 发送消息：在发送消息的窗口中调用`window.postMessage`方法，将消息和目标窗口的源(origin)传递给它。源可以是一个具体的域名，也可以是通配符"\*"，表示不限制源。示例代码如下：

```javascript
var targetWindow = window.open('https://www.example.com')
targetWindow.postMessage('Hello!', 'https://www.example.com')
```

在这个例子中，我们通过`window.open`方法打开了一个新窗口，并将消息"Hello!"发送给这个窗口。源被设置为`https://www.example.com`。

2. 接收消息：在接收消息的窗口中，通过监听`message`事件来获取消息。在事件处理函数中，可以通过`event.data`获取消息的内容，通过`event.origin`获取消息的发送源。示例代码如下：

```javascript
window.addEventListener('message', function (event) {
  if (event.origin === 'https://www.example.com') {
    console.log('Received message:', event.data)
  }
})
```

在这个例子中，我们通过`addEventListener`方法监听了`message`事件，并在事件处理函数中打印出接收到的消息。通过检查`event.origin`，我们可以确保只接收来自指定源的消息。

需要注意的是，PostMessage 的安全性需要特别注意。由于 PostMessage 允许不同源之间的通信，恶意网站可能会滥用它来进行攻击。因此，在使用 PostMessage 时，请确保验证消息的源和内容，以避免安全风险。

PostMessage 的应用场景包括但不限于以下几种情况：

- 在父窗口和子窗口之间进行通信。
- 在不同域名之间进行通信。
- 在主页面和嵌套的 iframe 之间进行通信。

通过使用 PostMessage，我们可以实现跨窗口的数据传递和通信，从而在前端应用中实现更灵活、交互性更强的功能。

## js 隔离方案 window 工厂

在前端开发中，"window 工厂"是一种用于隔离 JavaScript 代码的设计模式。它通常被用于避免全局命名空间的污染和冲突。

"window 工厂"模式的基本思想是将所有的代码封装在一个函数内部，并将需要暴露给外部的方法和属性作为返回值。通过这种方式，所有的代码都在函数的作用域内执行，不会直接污染全局命名空间。

下面是一个简单的示例，演示了如何使用"window 工厂"模式创建一个隔离的 JavaScript 模块：

```javascript
var MyModule = (function () {
  // 私有变量和方法
  var privateVariable = '私有变量'

  function privateMethod() {
    console.log('私有方法')
  }

  // 暴露给外部的公共方法和属性
  return {
    publicMethod: function () {
      console.log('公共方法')
    },
    publicVariable: '公共变量',
  }
})()

// 使用公共方法和属性
MyModule.publicMethod()
console.log(MyModule.publicVariable)

// 私有变量和方法不可访问
console.log(MyModule.privateVariable) // undefined
MyModule.privateMethod() // TypeError: MyModule.privateMethod is not a function
```

在上面的示例中，`MyModule`是一个立即执行函数，它返回一个对象，包含公共的方法和属性。私有的变量和方法则在函数内部定义，外部无法直接访问。

通过使用"window 工厂"模式，可以有效地避免全局命名空间的污染和冲突，同时提供了一种封装和隔离代码的方式，提高了代码的可维护性和可重用性。

## Vue 的 scoped 实现 css 隔离

Vue 的 scoped 实现 CSS 隔离是通过给每个组件的根元素添加一个唯一的属性选择器，这个属性选择器是根据组件的唯一标识生成的。这样一来，组件的样式只会作用于组件内部的元素，不会影响到其他组件。

具体实现步骤如下：

1. 在 Vue 组件的 style 标签中添加 scoped 属性，例如：

```html
<style scoped>
  .example {
    color: red;
  }
</style>
```

2. Vue 编译器会自动将该组件的样式转换为带有唯一属性选择器的形式，例如：

```html
<style>
  .example[data-v-xxxxxxx] {
    color: red;
  }
</style>
```

其中，data-v-xxxxxxx 是根据组件的唯一标识生成的。

3. 在组件的根元素上添加这个唯一属性选择器，例如：

```html
<template>
  <div class="example"></div>
</template>
```

编译后的结果为：

```html
<template>
  <div class="example" data-v-xxxxxxx></div>
</template>
```

这样，组件的样式就会被限制在带有唯一属性选择器的根元素内，不会影响到其他组件中的元素。这样做的好处是可以避免样式冲突，提高了组件的可维护性和复用性。

## 非对称加密

[图文彻底搞懂非对称加密（公钥密钥） - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/436455172)

非对称加密是一种可以使用 `公钥加密 私钥解密` 的加密方式

在 https 中使用非对称加密的目的是用加密的方式生成并传递 对称加密的会话秘钥

具体流程是：

1. 服务端准备私钥和公钥，并将公钥与 `服务端证书` 一起发送给客户端
2. 客户端拿到证书后基于`CA`验证证书可信，取出公钥
3. 客户端生成一个新的`会话秘钥`，并用公钥加密，然后将加密后的密文发送给服务端
4. 服务端使用自己的私钥进行解密，取出会话秘钥，这样就完成了会话秘钥的传递
5. 后续的会话内容使用会话秘钥进行对称加密，有效防止中间人抓包读取或者修改信息

<br/>

<br/>

## 抓包

中间人抓包的流程如下：

1. 客户端向服务端请求服务器证书
2. 中间人拦截，并代替客户端向服务端请求证书
3. 中间人将自己的服务器证书，携带自己的公钥发送给客户端
4. 客户端生成会话秘钥，使用中间人的公钥加密并发送给“服务器”
5. 中间人拦截后使用自己的私钥解密拿到会话秘钥，使用服务器公钥加密后发给服务器
6. 服务器拿到密文后用服务器私钥解密，拿到会话秘钥
7. 此时中间人就获得了会话秘钥，并取得双方新人，双方的通讯都可以由中间人代理

出现这样问题的关键在第四步，客户端轻易信任了伪造的服务器证书
